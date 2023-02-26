const quizData = [
    {
      question: "Q1: The correct sequence of HTML tags for starting a webpage is - ",
      a: "Head, Title, HTML, body",
      b: "HTML, Body, Title, Head",
      c: "HTML, Head, Title, Body",
      d: "HTML, Head, Title, Body",
      correct: "c",
    },
    {
      question: "Q2: Which of the following element is responsible for making the text bold in HTML? ",
      a: "1st",
      b: "2nd",
      c: "3rd",
      d: "4rd",
      correct: "a",
    },
    {
      question: "Q3: Which of the following tag is used to insert a line-break in HTML?",
      a: "1st",
      b: "2nd",
      c: "3rd",
      d: "4rd",
      correct: "d",
    },
    {
      question: "Q4: Which of the following element is responsible for making the text italic in HTML? ",
      a: "1st",
      b: "2nd",
      c: "3rd",
      d: "4rd",
      correct: "a",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  
  const submitBtn = document.getElementById("submit");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  
  const showScore = document.querySelector("#showScore");
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
    const currentQuestion = quizData[currentQuiz];
    questionEl.innerHTML = currentQuestion.question;
    a_text.innerHTML = currentQuestion.a;
    b_text.innerHTML = currentQuestion.b;
    c_text.innerHTML = currentQuestion.c;
    d_text.innerHTML = currentQuestion.d;
  
    if (currentQuiz === 0) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }
  
    if (currentQuiz === quizData.length - 1) {
      submitBtn.style.display = "block";
      nextBtn.disabled = true;
    } else {
      submitBtn.style.display = "none";
      nextBtn.disabled = false;
    }
  }
  
  function submitQuiz() {
    const userAnswers = getUserAnswers();
    let numCorrect = 0;
    console.log(userAnswers, "userAnswers");
    userAnswers.forEach((answer, index) => {
        console.log(quizData[index].correct, answer, "answer chekcing")
      if (answer === quizData[index].correct) {
        numCorrect += 1;
      }
    });
    const numIncorrect = quizData.length - numCorrect;
    console.log(numCorrect);
    alert(`You answered ${numCorrect} questions correctly and ${numIncorrect} questions incorrectly.`);
  }
  
  function getUserAnswers() {
    const userAnswers = [];
    console.log(answerEls, "answerEls")
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        userAnswers.push(answerEl.id);
      }
    });
    return userAnswers;
  }
  
  function deselectAnswers() {
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
    });
  }
  
  function getSelected() {
    let answer;
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  submitBtn.addEventListener("click", submitQuiz);
  prevBtn.addEventListener("click", goToPrevQuestion);
  nextBtn.addEventListener("click", goToNextQuestion);
  
  function goToPrevQuestion() {
    currentQuiz--;
    loadQuiz();
  }
  
  function goToNextQuestion() {
    currentQuiz++;
    loadQuiz();
  }
  