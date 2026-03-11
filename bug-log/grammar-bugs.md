# 🐛 Grammar-Bugs.md — The Debugger Log

> **Core mindset:** Treat every grammar error as a code bug. Find the root cause, fix the syntax, and never deploy the same bug twice.

## 📊 Summary Table

| ID | Date | Buggy Sentence (Syntax Error) | Correct Sentence (Hotfix) | Root Cause / Rule | Category |
|:---|:---|:---|:---|:---|:---|
| 001 | 2026-03-05 | I **was not seeing** him since 2015. | I **haven't seen** him since 2015. | "Since" triggers Present Perfect. | Tense |
| 002 | 2026-03-05 | She suggested **to go**... | She suggested **going**... | `suggest` + `-ing`. | Gerund |
| 003 | 2026-03-05 | John said he **will** come... | John said he **would** come. | Reported speech backshift. | Tense |
| 004 | 2026-03-05 | lack of **agreetion**. | lack of **agreement**. | Word form: AGREE (v) → agreement (n). | Word Form |
| 005 | 2026-03-05 | If I **was** you... | If I **were** you... | Conditional Type 2 (subjunctive). | Conditional |
| 006 | 2026-03-05 | **im** working... | **I'm** working... | Capitalize "I". | Caps |
| 007 | 2026-03-05 | working on **new project** | working on **a new project** | Singular countable nouns need articles. | Articles |
| 008 | 2026-03-05 | having **a great sex** | having **great sex** | Uncountable nouns don't take "a/an". | Articles |
| 009 | 2026-03-06 | **im love** / **im often feel** | **I love** / **I often feel** | No "am/is/are" with main verb in Simple. | Tense |
| 010 | 2026-03-06 | Huong **not** a good person | Huong **is not** a good person | Missing "to be" verb in clause. | Structure |
| 011 | 2026-03-06 | **do** silent treatment | **gives** me the silent treatment | Collocation: "give someone the..." | Vocab |
| 012 | 2026-03-11 | I **am liking** programming. | I **like** programming. | Stative verb (emotion) never uses continuous. | Tense |
| 013 | 2026-03-11 | I know what you mean, so I **am helping** you. | I know what you mean, so I **help** you. | Stative verb "help" in simple statement ≠ "am helping". | Tense |
| 014 | 2026-03-11 | I **am not wanting** any coffee. | I **don't want** any coffee. | Stative verb "want" NEVER continuous form. | Tense |
| 015 | 2026-03-11 | They have been testing and they **find** bugs. | They have been testing and they **found** bugs. | Perfect Continuous (process) + Past Simple (result) = valid mix. | Tense |
| 016 | 2026-03-11 | She **has graduated** and **she is starting** her new job next week. | She **has graduated** and **she is starting** (correct as is). | Present Perfect for immediate past → Present Continuous for future plan. | Tense |
| 017 | 2026-03-11 | The system **contains** data from 2020. | The system **contains** data from 2020. (Test ambiguity: both "contain" and "is containing" options were marked) | Stative verb "contain" never continuous. Question clarity issue. | Test QA |

---

## 📝 Detailed Analysis (Optional)

<details>
<summary>Click to view deeper notes on complex bugs</summary>

### Bug 001: Since vs Tense
*   **Rule:** "Since [point in time]" marks the start of a period continuing to now → Present Perfect.
*   **Avoid:** Don't use Past Continuous for ongoing states starting in the past.

### Bug 005: Subjunctive Mood
*   **Rule:** In "If I were you", "were" is used for all subjects to express an unreal/imaginary condition.

### Bug 011: Collocations
*   **Tip:** Learning "libraries" (vocabulary) is about learning which words "fit" together exactly. `give` + `silent treatment`.

### Bugs 012-014: Stative Verb Continuous Errors (Day 07 Test Pattern)
*   **Rule (Unit 3-4):** Stative verbs describe STATES, not ACTIONS, so they NEVER take continuous form.
*   **Stative verbs:** like, love, hate, want, prefer, enjoy, know, understand, believe, think, realize, see, hear, smell, taste, own, have, belong, contain, consist, appear, seem, sound
*   **WRONG:** "I am liking", "I am wanting", "I am helping (in state)" 
*   **CORRECT:** "I like", "I want", "I help"
*   **Note:** "am helping (active action)" ≠ "help (state)" — context matters, but in statement "I know, so I help you" = stative, not action
*   **Frequency:** 3 errors in Day 07 test (Q15 like, Q51 help/know, Q94 want) = **PRIORITY focus**

### Bug 015: Perfect Continuous + Simple Mix (Day 07 Test Q90)
*   **Valid Pattern:** `have been + -ing (process)` + `past simple (result)` is VALID and COMMON
*   **CORRECT:** "They have been testing and they **found** bugs" ✅
*   **Student confusion:** Thought both clauses needed same form
*   **Rule:** Perfect Continuous = focus on process/duration; Past Simple in second clause = completed action/result
*   **Similar pattern:** "I have been coding all day and I completed 6 tasks" ✅

### Bug 016: Present Perfect + Present Continuous (Day 07 Test Q92)
*   **Rule (Unit 7-8):** Present Perfect (recent past) can lead into Present Continuous (future plan or current action)
*   **CORRECT:** "She has graduated and she is starting her new job next week" ✅
*   **Pattern:** Immediate past → current/future action = natural progression
*   **Student confusion:** Thought both needed to be same tense (either both Perfect or both Simple)

### Bug 017: Test QA (Day 07 Test Q89)
*   **Issue:** Question marked both "contain" and "is containing" as potentially correct
*   **Rule:** Stative verb "contain" NEVER uses continuous
*   **ONLY CORRECT:** "The system **contains** data from 2020" ✅
*   **Action:** Question needs revision for clarity

</details>

---

## 📈 Pattern Analysis (March 11 Update)

**Weak Areas Identified from Day 07 Test (94/100):**

| Category | Count | Status | Next Step |
|:---|:---:|:---|:---|
| Stative Verbs (Units 3-4) | 3 errors | 🔴 PRIORITY | Focus Day 08 exercises heavily |
| Perfect Tense Mixing (Units 9-10) | 2 errors | 🟡 Secondary | Day 11 cumulative practice |
| Test Quality | 1 issue | ℹ️ Informational | Correct ambiguous Q89 |

**Overall Performance:** 94/100 (94%) = Excellent foundation with targeted weak areas identified ✅

---
*Last Updated: 2026-03-11*
