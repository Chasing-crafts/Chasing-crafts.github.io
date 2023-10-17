// JavaScript for the interactive quiz section
document.addEventListener("DOMContentLoaded", function () {
  // Quiz questions and answers
  const questions = [
    {
      question: "What is the objective of Space Chase?",
      answers: ["a) Collecting stars", "b) Defeating cosmic threats", "c) Racing through space"],
      correctAnswer: "b",
    },
    // Add more questions here
  ];

  const startButton = document.getElementById("start-quiz-button");
  const quizContainer = document.getElementById("quiz-container");
  const questionText = document.getElementById("question");
  const resultText = document.getElementById("result");

  let currentQuestion = 0;
  let score = 0;

  // Function to display the current question
  function showQuestion() {
    if (currentQuestion < questions.length) {
      questionText.textContent = questions[currentQuestion].question;
      const answers = questions[currentQuestion].answers;

      // Create radio buttons for answer choices
      for (let i = 0; i < answers.length; i++) {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="answer" value="${String.fromCharCode(97 + i)}">${answers[i]}`;
        quizContainer.appendChild(label);
      }

      currentQuestion++;
    } else {
      // Quiz is over
      questionText.textContent = "Quiz Completed!";
      quizContainer.style.display = "none";
      resultText.textContent = `Your Score: ${score} out of ${questions.length}`;
    }
  }

  // Function to check the answer
  function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
      if (selectedAnswer.value === questions[currentQuestion - 1].correctAnswer) {
        score++;
      }
      // Clear radio buttons and show the next question
      while (quizContainer.firstChild) {
        quizContainer.removeChild(quizContainer.firstChild);
      }
      showQuestion();
    }
  }

  // Event listeners
  startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion();
  });

  document.getElementById("submit-answer-button").addEventListener("click", checkAnswer);
});
