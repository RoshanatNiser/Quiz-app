// script.js

let quizData = {};

let currentUser = null;

let currentSubject = "";
let currentQuizName = "";

// TAB SWITCHING

const signupTab = document.getElementById("signupTab");
const loginTab = document.getElementById("loginTab");

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

signupTab.addEventListener("click", () => {

    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

    signupTab.classList.add("active");
    loginTab.classList.remove("active");

});

loginTab.addEventListener("click", () => {

    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");

    loginTab.classList.add("active");
    signupTab.classList.remove("active");

});

// LOAD QUESTIONS JSON

fetch("questions.json")
    .then(response => response.json())
    .then(data => {

        quizData = data;

    });

// SIGNUP

function signup() {

    const username =
        document.getElementById("signupUsername").value.trim();

    const password =
        document.getElementById("signupPassword").value.trim();

    if (!username || !password) {

        alert("Please fill all fields");
        return;
    }

    let users =
        JSON.parse(localStorage.getItem("users")) || {};

    if (users[username]) {

        alert("Username already exists");
        return;
    }

    users[username] = {

        password: password,

        scores: {}

    };

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    alert("Account created successfully");

}

// LOGIN

function login() {

    const username =
        document.getElementById("loginUsername").value.trim();

    const password =
        document.getElementById("loginPassword").value.trim();

    let users =
        JSON.parse(localStorage.getItem("users")) || {};

    if (!users[username]) {

        alert("User not found");
        return;
    }

    if (users[username].password !== password) {

        alert("Incorrect password");
        return;
    }

    currentUser = username;

    document.getElementById("authContainer")
        .classList.add("hidden");

    document.getElementById("dashboard")
        .classList.remove("hidden");

    document.getElementById("welcomeText")
        .innerText = `Welcome ${username}`;

    renderSubjects();

    loadScores();

}

// LOGOUT

function logout() {

    currentUser = null;

    document.getElementById("dashboard")
        .classList.add("hidden");

    document.getElementById("quizContainer")
        .classList.add("hidden");

    document.getElementById("authContainer")
        .classList.remove("hidden");

}

// RENDER SUBJECTS + QUIZZES

function renderSubjects() {

    const container =
        document.getElementById("subjectContainer");

    container.innerHTML = "";

    for (let subject in quizData) {

        const section =
            document.createElement("div");

        const title =
            document.createElement("h2");

        title.innerText =
            subject.toUpperCase();

        section.appendChild(title);

        const quizGrid =
            document.createElement("div");

        quizGrid.className = "quiz-grid";

        for (let quizName in quizData[subject]) {

            const btn =
                document.createElement("button");

            btn.innerText =
                quizName.toUpperCase();

            btn.onclick = () => {

                loadQuiz(subject, quizName);

            };

            quizGrid.appendChild(btn);

        }

        section.appendChild(quizGrid);

        container.appendChild(section);

    }

}

// LOAD QUIZ

function loadQuiz(subject, quizName) {

    currentSubject = subject;
    currentQuizName = quizName;

    document.getElementById("dashboard")
        .classList.add("hidden");

    document.getElementById("quizContainer")
        .classList.remove("hidden");

    document.getElementById("quizTitle")
        .innerText =
        `${subject.toUpperCase()} - ${quizName.toUpperCase()}`;

    const questionArea =
        document.getElementById("questionArea");

    questionArea.innerHTML = "";

    const questions =
        quizData[subject][quizName];

    questions.forEach((q, index) => {

        const div =
            document.createElement("div");

        div.className = "question";

        let optionsHTML = "";

        q.options.forEach(option => {

            optionsHTML += `
                <label class="option">
                    <input type="radio"
                           name="q${index}"
                           value="${option}">
                    ${option}
                </label>
            `;

        });

        div.innerHTML = `
            <h3>
                Q${index + 1}. ${q.question}
            </h3>

            ${optionsHTML}
        `;

        questionArea.appendChild(div);

    });

    document.getElementById("result").innerHTML = "";

}

// SUBMIT QUIZ

function submitQuiz() {

    let score = 0;

    const questions =
        quizData[currentSubject][currentQuizName];

    questions.forEach((q, index) => {

        const selected =
            document.querySelector(
                `input[name="q${index}"]:checked`
            );

        if (selected &&
            selected.value === q.answer) {

            score++;

        }

    });

    document.getElementById("result")
        .innerHTML =
        `You scored ${score} out of ${questions.length}`;

    let users =
        JSON.parse(localStorage.getItem("users")) || {};

    if (!users[currentUser].scores[currentSubject]) {

        users[currentUser].scores[currentSubject] = {};

    }

    users[currentUser]
        .scores[currentSubject][currentQuizName] = score;

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    loadScores();

}

// LOAD SCORES

function loadScores() {

    let users =
        JSON.parse(localStorage.getItem("users")) || {};

    const scoreBoard =
        document.getElementById("scoreBoard");

    scoreBoard.innerHTML = "";

    const scores =
        users[currentUser].scores;

    for (let subject in scores) {

        const subjectDiv =
            document.createElement("div");

        const title =
            document.createElement("h3");

        title.innerText =
            subject.toUpperCase();

        subjectDiv.appendChild(title);

        for (let quiz in scores[subject]) {

            const div =
                document.createElement("div");

            div.className = "score-item";

            div.innerHTML = `
                <strong>${quiz.toUpperCase()}</strong>
                <br>
                Marks:
                ${scores[subject][quiz]}
            `;

            subjectDiv.appendChild(div);

        }

        scoreBoard.appendChild(subjectDiv);

    }

}

// BACK TO DASHBOARD

function backToDashboard() {

    document.getElementById("quizContainer")
        .classList.add("hidden");

    document.getElementById("dashboard")
        .classList.remove("hidden");

    loadScores();

}
