const quizData = [
    {
      question: "Q1: The correct sequence of HTML tags for starting a webpage is - ",
      a: "Head, Title, HTML, body",
      b: "HTML, Body, Title, Head",
      c: "HTML, Head, Title, Body",
      d: "Body, Head, Title, Html",
      correct: "c",
    },
    {
      question: "Q2: Which attribute is used to provide a unique name to an HTML element? ",
      a: "id",
      b: "class",
      c: "type",
      d: "None of the above",
      correct: "a",
    },
    {
      question: "Q3: How many sizes of headers are available in HTML by default?",
      a: "5",
      b: "1",
      c: "3",
      d: "6",
      correct: "d",
    },
    {
      question: "Q4: Can negative values be allowed in padding property?",
      a: "Yes",
      b: "No",
      c: "Depends on property ",
      d: "None of the above",
      correct: "b",
    },
    {
      question: "Q5: HTML files are saved by default with the extension? ",
      a: ".html",
      b: ".h",
      c: ".ht",
      d: "None of the above",
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
  