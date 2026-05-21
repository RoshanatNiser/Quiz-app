# Quiz App with JSON Question Creator

A complete browser-based Quiz Web Application with:

* User Authentication
* Quiz Navigation System
* Timer-based quizzes
* Performance tracking
* Dynamic question loading from `questions.json`
* JSON Question Creator GUI
* Multiple quizzes and subjects
* Local browser storage persistence
* Responsive UI

---

# Features

## Quiz System

* Multiple quizzes
* Multiple subjects per quiz
* MCQ-based questions
* Dynamic question rendering
* Automatic answer checking
* Score calculation
* Timer system
* Performance tracking

---

## Authentication

* Sign Up
* Login
* Logout
* Persistent account storage using browser `localStorage`

---

## JSON Question Creator

GUI tool to:

* Create quizzes
* Create subjects
* Add questions
* Add options
* Select correct answers
* Preview generated questions
* Export `questions.json`
* Download JSON file

---

# Project Structure

```text
quiz-project/
│
├── LICENSE
├── README.md
├── index.html
├── style.css
├── script.js
├── questions.json
└── Questions JSON Creater.html
```

---

# File Descriptions

## `index.html`

Main Quiz Application UI.

Contains:

* Login page
* Signup page
* Dashboard
* Quiz navigation
* Quiz page
* Timer display

---

## `style.css`

Main styling for:

* Layout
* Buttons
* Quiz cards
* Forms
* Responsive UI

---

## `script.js`

Core quiz logic:

* Authentication
* Timer system
* Question rendering
* Quiz evaluation
* Score saving
* Local storage handling

---

## `questions.json`

Stores all quiz questions in this format:

```json
{
  "Quiz-1": {

    "Physics": [

      {
        "question": "SI unit of force?",
        "options": [
          "Newton",
          "Joule",
          "Watt",
          "Pascal"
        ],
        "answer": "Newton"
      }

    ]

  }
}
```

---

## `Questions JSON Creater.html`

GUI application to generate compatible `questions.json` files.

Features:

* Create quizzes
* Add subjects
* Add questions
* Download JSON
* Copy JSON

---

# How To Run

## Step 1

Clone repository:

```bash
git clone <your-repository-url>
```

or download ZIP.

---

## Step 2

Open folder.

---

## Step 3

Open:

```text
index.html
```

in browser.

No installation required.

---

# How To Create Questions

Open:

```text
Questions JSON Creater.html
```

Then:

1. Create Quiz
2. Create Subject
3. Add Questions
4. Download `questions.json`
5. Replace existing `questions.json`

---

# Example Quiz Navigation

```text
Quiz-1
    Physics
    Chemistry
    Math
    Biology

Quiz-2
    Physics
    Chemistry
```

---

# User Data Storage

Currently uses:

```javascript
localStorage
```

to store:

* usernames
* passwords
* quiz performance

Data persists in the browser.

---

# Timer System

Each quiz automatically starts a timer.

Default:

```javascript
60 seconds
```

Modify in `script.js`:

```javascript
timeRemaining = 60;
```

---

# Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript
* JSON
* Browser LocalStorage

---

# Future Improvements

Possible future upgrades:

* Firebase Authentication
* Online Database
* Global Login
* Leaderboards
* Admin Panel
* Randomized Questions
* Negative Marking
* Question Shuffling
* Dark Mode
* Mobile App
* Cloud Sync
* Backend API

---

# Security Notice

Current version stores user data locally in browser storage.

This means:

* accounts are device-specific
* passwords are not encrypted
* no cloud synchronization

For production use:

* use Firebase/Auth backend
* hash passwords
* use secure databases

---

# License

MIT License

Copyright (c) 2026 RoshanatNiser

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
