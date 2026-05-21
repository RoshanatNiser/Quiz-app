# Quiz App with JSON Question Creator

A browser-based Quiz Web Application that dynamically loads quizzes from a `questions.json` file and includes a GUI-based JSON Question Creator.

The project supports:

* Multiple quizzes
* Multiple subjects
* MCQ questions
* Countdown timer
* Dynamic question loading
* JSON-based quiz management
* Responsive UI

---

# Features

## Quiz Application

* Dynamic quiz loading from `questions.json`
* Multiple quizzes and subjects
* MCQ-based questions
* Timer for each quiz
* Automatic score calculation
* Responsive interface
* Browser-based execution
* No backend required

---

## Questions JSON Creator

`Questions JSON Creater.html` provides a GUI for creating quiz data.

Features:

* Create quizzes
* Add subjects
* Add questions
* Add options
* Select correct answers
* Live preview
* Copy JSON
* Download `questions.json`

Compatible with the quiz application structure. 

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

* Quiz navigation
* Quiz page
* Timer
* Question rendering area
* Result display

---

## `style.css`

Styling for:

* Layout
* Buttons
* Quiz cards
* Responsive design
* Timer UI

---

## `script.js`

Core application logic:

* Loads `questions.json`
* Renders quiz navigation
* Loads questions dynamically
* Handles timer
* Calculates scores
* Navigation between pages

---

## `questions.json`

Stores all quiz data.

Example structure:

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

GUI tool for generating compatible `questions.json` files.

Supports:

* Quiz creation
* Subject creation
* Question creation
* JSON export
* JSON download

---

# How To Run

## Option 1 — VS Code Live Server (Recommended)

### Step 1

Install:

[Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&utm_source=chatgpt.com)

---

### Step 2

Open project folder in VS Code.

---

### Step 3

Right click:

```text
index.html
```

and select:

```text
Open with Live Server
```

---

# Why Live Server Is Needed

The application uses:

```javascript
fetch("questions.json")
```

Browsers block local JSON loading when opened directly using:

```text
file:///
```

Live Server solves this by creating a local HTTP server.

---

## Option 2 — GitHub Pages

Upload repository to GitHub and enable:

```text
Settings
→ Pages
→ Deploy from branch
```

Then the app works online.

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

# Timer System

Each quiz automatically starts a timer.

Default value:

```javascript
timeRemaining = 60;
```

Modify inside:

```text
script.js
```

---

# Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript
* JSON

---

# Future Improvements

Possible upgrades:

* Firebase integration
* Online leaderboard
* User accounts
* Cloud save
* Dark mode
* Randomized questions
* Negative marking
* Question shuffling
* Admin dashboard
* Backend API

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
