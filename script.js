const quizData = [
    {
        question: "Q1: The correct sequence of HTML tags for starting a webpage is - ",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Title, Body",
        correct: "d",
    },
    {
        question: "Q2: Which of the following element is responsible for making the text bold in HTML? ",
        a: "<b>",
        b: "<pre>",
        c: "<br>",
        d: "<a>",
        correct: "a",
    },
    {
        question: "Q3: Which of the following tag is used to insert a line-break in HTML?",
        a: "<b>",
        b: "<pre>",
        c: "<a>",
        d: "<br>",
        correct: "d",
    },
    {
        question: "Q4: Which of the following element is responsible for making the text italic in HTML? ",
        a: "<i>",
        b: "<italic>",
        c: "<it>",
        d: "<pre>",
        correct: "a"
    }
];

const quiz = document.getElementById('.quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitbtn = document.getElementById('submit');

const showScore = document.querySelector('#showscore');

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getselected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return asnwer
}


submit.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2> You answered ${score}/${quizData.length} question correctly</h2>
        <button onclick="location.reload()"> Play Again</button>
        `
        }

    };

    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {

        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }

});