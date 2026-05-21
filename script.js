// =====================================
// GLOBAL VARIABLES
// =====================================

let quizData = {};

let currentQuiz = "";
let currentSubject = "";

let timer;
let timeRemaining = 60;

// =====================================
// LOAD QUESTIONS.JSON
// =====================================

async function loadQuestions() {

    try {

        const response =
            await fetch("questions.json");

        quizData =
            await response.json();

        renderQuizNavigation();

    }

    catch(error) {

        console.error(error);

        document.getElementById(
            "quizNavigation"
        ).innerHTML = `

            <h2 style="color:red;">
                Failed to load questions.json
            </h2>

            <p>
                Use Live Server or GitHub Pages.
            </p>

        `;

    }

}

loadQuestions();

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

        section.innerHTML = `
            <h2>${quizName}</h2>
        `;

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

    document.getElementById(
        "result"
    ).innerHTML = "";

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
