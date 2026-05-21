// =====================================
// LOAD QUESTIONS.JSON
// =====================================

let quizData = {};

fetch("questions.json")
.then(response => response.json())
.then(data => {

    quizData = data;

});

// =====================================
// GLOBAL VARIABLES
// =====================================

let usersData = {};

let currentUser = null;

let currentQuiz = "";
let currentSubject = "";

let timer;
let timeRemaining = 60;

// =====================================
// LOAD USERS
// =====================================

function loadUsers() {

    usersData =
        JSON.parse(
            localStorage.getItem("quizUsers")
        ) || {};

}

loadUsers();

// =====================================
// SAVE USERS
// =====================================

function saveUsers() {

    localStorage.setItem(
        "quizUsers",
        JSON.stringify(usersData)
    );

}

// =====================================
// SIGNUP
// =====================================

function signup() {

    const username =
        document.getElementById(
            "signupUsername"
        ).value.trim();

    const password =
        document.getElementById(
            "signupPassword"
        ).value.trim();

    if (!username || !password) {

        alert("Fill all fields");

        return;

    }

    if (usersData[username]) {

        alert("User already exists");

        return;

    }

    usersData[username] = {

        password: password,

        performance: {}

    };

    saveUsers();

    alert("Account created successfully");

}

// =====================================
// LOGIN
// =====================================

function login() {

    const username =
        document.getElementById(
            "loginUsername"
        ).value.trim();

    const password =
        document.getElementById(
            "loginPassword"
        ).value.trim();

    if (!usersData[username]) {

        alert("User not found");

        return;

    }

    if (
        usersData[username].password
        !== password
    ) {

        alert("Wrong password");

        return;

    }

    currentUser = username;

    document.getElementById(
        "authContainer"
    ).classList.add("hidden");

    document.getElementById(
        "dashboard"
    ).classList.remove("hidden");

    document.getElementById(
        "welcomeText"
    ).innerText =
    `Welcome ${username}`;

    renderQuizNavigation();

    loadScores();

}

// =====================================
// LOGOUT
// =====================================

function logout() {

    clearInterval(timer);

    currentUser = null;

    document.getElementById(
        "dashboard"
    ).classList.add("hidden");

    document.getElementById(
        "quizContainer"
    ).classList.add("hidden");

    document.getElementById(
        "authContainer"
    ).classList.remove("hidden");

}

// =====================================
// QUIZ NAVIGATION
// =====================================

function renderQuizNavigation() {

    const container =
        document.getElementById(
            "quizNavigation"
        );

    container.innerHTML = "";

    for (let quizName in quizData) {

        const section =
            document.createElement("div");

        section.innerHTML =
        `<h2>${quizName}</h2>`;

        const grid =
            document.createElement("div");

        grid.className = "quiz-grid";

        for (let subject in quizData[quizName]) {

            const btn =
                document.createElement("button");

            btn.innerText = subject;

            btn.onclick = () => {

                loadQuiz(
                    quizName,
                    subject
                );

            };

            grid.appendChild(btn);

        }

        section.appendChild(grid);

        container.appendChild(section);

    }

}

// =====================================
// LOAD QUIZ
// =====================================

function loadQuiz(quizName, subject) {

    currentQuiz = quizName;

    currentSubject = subject;

    document.getElementById(
        "dashboard"
    ).classList.add("hidden");

    document.getElementById(
        "quizContainer"
    ).classList.remove("hidden");

    document.getElementById(
        "quizTitle"
    ).innerText =
    `${quizName} - ${subject}`;

    startTimer();

    const questions =
        quizData[quizName][subject];

    const questionArea =
        document.getElementById(
            "questionArea"
        );

    questionArea.innerHTML = "";

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
                Q${index + 1}.
                ${q.question}
            </h3>

            ${optionsHTML}

        `;

        questionArea.appendChild(div);

    });

}

// =====================================
// TIMER
// =====================================

function startTimer() {

    clearInterval(timer);

    timeRemaining = 60;

    document.getElementById(
        "timer"
    ).innerText = timeRemaining;

    timer = setInterval(() => {

        timeRemaining--;

        document.getElementById(
            "timer"
        ).innerText = timeRemaining;

        if (timeRemaining <= 0) {

            clearInterval(timer);

            submitQuiz();

        }

    }, 1000);

}

// =====================================
// SUBMIT QUIZ
// =====================================

function submitQuiz() {

    clearInterval(timer);

    let score = 0;

    const questions =
        quizData[currentQuiz][currentSubject];

    questions.forEach((q, index) => {

        const selected =
            document.querySelector(
                `input[name="q${index}"]:checked`
            );

        if (
            selected &&
            selected.value === q.answer
        ) {

            score++;

        }

    });

    document.getElementById(
        "result"
    ).innerText =
    `You scored ${score}/${questions.length}`;

    if (
        !usersData[currentUser]
        .performance[currentQuiz]
    ) {

        usersData[currentUser]
        .performance[currentQuiz] = {};

    }

    usersData[currentUser]
    .performance[currentQuiz][currentSubject]
    = score;

    saveUsers();

    loadScores();

}

// =====================================
// LOAD SCORES
// =====================================

function loadScores() {

    const scoreBoard =
        document.getElementById(
            "scoreBoard"
        );

    scoreBoard.innerHTML = "";

    const performance =
        usersData[currentUser]
        .performance;

    for (let quiz in performance) {

        const quizDiv =
            document.createElement("div");

        quizDiv.innerHTML =
        `<h3>${quiz}</h3>`;

        for (
            let subject
            in performance[quiz]
        ) {

            const div =
                document.createElement("div");

            div.className =
                "score-item";

            div.innerHTML = `

                <strong>
                    ${subject}
                </strong>

                <br>

                Marks:
                ${performance[quiz][subject]}

            `;

            quizDiv.appendChild(div);

        }

        scoreBoard.appendChild(quizDiv);

    }

}

// =====================================
// BACK
// =====================================

function backToDashboard() {

    clearInterval(timer);

    document.getElementById(
        "quizContainer"
    ).classList.add("hidden");

    document.getElementById(
        "dashboard"
    ).classList.remove("hidden");

}
