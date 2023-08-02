const questions = [
    {
        question: "Q1: The correct sequence of HTML tags for starting a webpage is -",
        options: ["Head, Title, HTML, Body", "HTML, Body, Title, Head", "HTML, Head, Title, Body", "Body, Head, Title, Html"],
        answer: 2
    },
    {
        question: "Q2: Which attribute is used to provide a unique name to an HTML element?",
        options: ["id", "class", "type", "None of the above"],
        answer: 0
    },
    {
        question: "Q3: How many sizes of headers are available in HTML by default?",
        options: ["5", "1", "3", "6"],
        answer: 3
    },
    {
        question: "Q4: Can negative values be allowed in padding property?",
        options: ["Yes", "No", "Depends on property", "None of the above"],
        answer: 1
    },
    {
        question: "Q5: HTML files are saved by default with the extension?",
        options: [".html", ".h", ".ht", "None of the above"],
        answer: 0
    },
];

let currentQuestion = 0;
let userAnswers = [];
let quizCompleted = false;
const progress = document.getElementById('progress-bar');

const questionElem = document.getElementById('question');
const optionsElem = document.getElementById('options');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const resultElem = document.getElementById('result');

// Set progress bar width
function setProgressWidth() {
    const totalQuestions = questions.length; const progressWidth = (currentQuestion / totalQuestions) * 100; progress.style.width = `${progressWidth}%`;
} // Show the current question

function showQuestion(index) {
    questionElem.textContent = questions[index].question; optionsElem.innerHTML = '';
    for (let i = 0; i < questions[index].options.length; i++) {
        const option = document.createElement('div');
        option.classList.add('option');
        option.textContent = questions[index].options[i];
        option.onclick = () => {
            if (!quizCompleted) {
                userAnswers[index] = i;
                highlightSelectedOption();
            }
        };
        optionsElem.appendChild(option);
    }
    highlightSelectedOption();
}

function highlightSelectedOption() {
    const options = optionsElem.querySelectorAll('.option'); for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('selected');
    } if (userAnswers[currentQuestion] !== undefined) {
        options[userAnswers[currentQuestion]].classList.add('selected');
    }
}

function showNextQuestion() {
    currentQuestion++; if (currentQuestion >= questions.length) {
        currentQuestion = questions.length - 1;
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    } setProgressWidth(); showQuestion(currentQuestion);
}

function showPreviousQuestion() {
    currentQuestion--; if (currentQuestion < 0) {
        currentQuestion = 0;
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    } setProgressWidth(); showQuestion(currentQuestion);
}

function submitQuiz() {
    quizCompleted = true; nextBtn.style.display = 'none'; prevBtn.style.display = 'none'; submitBtn.style.display = 'none';
    let correctAnswers = 0; for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].answer) {
            correctAnswers++;
        }
    }

    const percentage = ((correctAnswers / questions.length) * 100).toFixed(2);

    resultElem.innerHTML = `
      <h2 class="heading">Quiz Results</h2>
      <div class="result-body">
       <p class="total-answer">Total Correct Answers: ${correctAnswers}</p>
       <p class="percentage">Percentage: ${percentage}%</p>
      </div>
     `;


    resultElem.style.display = 'block';
}

// Show the first question initially
showQuestion(currentQuestion);