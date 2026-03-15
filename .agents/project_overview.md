# Project Overview: English B2 Journey

This document summarizes the context and methodology of the "english-b2-journey" project for the Gemini assistant to maintain long-term understanding and provide relevant support.

## 1. Core Objective

The primary goal of this project is a structured, self-directed study plan to advance English language proficiency, likely targeting the B2 level of the CEFR framework.

## 2. Learning Methodology

The user employs a systematic and disciplined approach inspired by software development principles.

*   **Daily & Weekly Structure:** Learning is organized into daily tasks (`day-XX.md`) and weekly cycles. A typical week involves daily exercises followed by a weekend review and mini-test.
*   **"Grammar as Code":** The user treats grammar rules like a codebase.
    *   **Units:** Study is based on units from "English Grammar In Use".
    *   **Practice:** Exercises are created and corrected in the `writing/sentences/` directory.
    *   **"Bug" Tracking:** Recurring grammatical errors are logged in `bug-log/grammar-bugs.md` to be systematically addressed and "fixed."
*   **Progress Tracking:**
    *   **Manual:** `progress-dashboard.md` provides a high-level, manually updated summary of progress.
    *   **Automated:** The project is set up with a GitHub Actions workflow (`.github/workflows/weekly-report.yml`) and a script (`scripts/generate_report.js`) to automate the generation of weekly progress reports.

## 3. Key Directories

-   `./`: Contains the primary PDF textbooks ("In Use" series).
-   `/.agents/`: For agent-related context files like this one.
-   `/grammar/`: Markdown files detailing specific grammar rules and concepts.
-   `/vocabulary/`: For tracking learned vocabulary.
-   `/writing/sentences/`: The core of the daily work. Contains markdown files with exercises, reviews, and tests for grammar units.
-   `/writing/task1/` & `/writing/task2/`: For practicing IELTS-style writing tasks.
-   `/weekly-review/`: Where automated reports are stored.
-   `/bug-log/`: Contains logs of specific, persistent errors to focus on.
-   `/scripts/`: Holds Node.js scripts for automation (e.g., report generation, PDF extraction).

## 4. Key Principles for the Assistant

1.  **Acknowledge the System:** Recognize and work within the user's established system (daily files, weekly reviews, bug logs).
2.  **Refer to the "Bugs":** When identifying errors, cross-reference `bug-log/grammar-bugs.md` to see if it's a known issue.
3.  **Maintain the Structure:** When creating new content, follow the existing naming conventions and directory structure.
4.  **Support Automation:** Be aware of the reporting scripts and assist in their maintenance or execution if requested.
5.  **Context is Key:** This file serves as the primary context. Refer to it to understand the user's goals and methods before responding.
