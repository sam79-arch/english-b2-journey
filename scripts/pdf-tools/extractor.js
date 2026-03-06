const fs = require('fs');
const pdf = require('pdf-extraction');
const path = require('path');

// Configure PDF path relative to this script
const DEFAULT_PDF = path.join(__dirname, '../../English Grammar In Use_5th Edition (VUS).pdf');

async function extractUnit(unitNumber, filePath = DEFAULT_PDF) {
    console.log(`Searching for Unit ${unitNumber} in: ${filePath}`);

    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return;
    }

    try {
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdf(dataBuffer);
        const text = data.text;

        const currentUnitHeader = `Unit ${unitNumber}`;
        const nextUnitHeader = `Unit ${parseInt(unitNumber) + 1}`;

        const startIndex = text.indexOf(currentUnitHeader);
        if (startIndex === -1) {
            console.error(`Could not find start of Unit ${unitNumber}`);
            return;
        }

        const endIndex = text.indexOf(nextUnitHeader, startIndex + 1);
        const content = endIndex !== -1
            ? text.substring(startIndex, endIndex)
            : text.substring(startIndex, startIndex + 10000);

        console.log(`--- CONTENT OF ${currentUnitHeader} ---`);
        console.log(content.trim());
        console.log(`--- END OF ${currentUnitHeader} ---`);

    } catch (err) {
        console.error("Error processing PDF:", err);
    }
}

// Get unit number from command line arguments
const targetUnit = process.argv[2];
if (!targetUnit) {
    console.log("Usage: node extractor.js <unit_number>");
    process.exit(1);
}

extractUnit(targetUnit);
