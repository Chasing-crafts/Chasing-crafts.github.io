document.addEventListener("DOMContentLoaded", function () {
  // Function to handle smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // CyberMage section JavaScript
  const cyberMageSection = document.getElementById("cybermage-scroll-container");
  const headerText = document.getElementById("cybermage-header");
  const backgroundImages = ["cyber-bg-1.jpg", "cyber-bg-2.jpg", "cyber-bg-3.jpg"];
  let currentBackgroundIndex = 0;

  // Function to change the background image
  function changeBackgroundCyberMage() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
    const imageUrl = `url('images/${backgroundImages[currentBackgroundIndex]}')`;
    cyberMageSection.style.backgroundImage = imageUrl;
  }

  // Function to update header text
  function updateHeaderTextCyberMage() {
    const headerTexts = ["Explore the CyberMage World", "Unleash Your Powers", "Conquer the Digital Realm"];
    headerText.textContent = headerTexts[currentBackgroundIndex];
  }

  // Function to handle scrolling animations
  function handleScrollAnimationCyberMage() {
    if (window.scrollY > 200) {
      // Add animation when scrolled 200 pixels
      cyberMageSection.classList.add("animate");
    } else {
      // Remove animation if scrolled back up
      cyberMageSection.classList.remove("animate");
    }
  }

  // Add click event to change background for CyberMage
  cyberMageSection.addEventListener("click", function () {
    changeBackgroundCyberMage();
    updateHeaderTextCyberMage();
  });

  // Add scroll event to handle animations for CyberMage
  window.addEventListener("scroll", handleScrollAnimationCyberMage);

  // ChaseCraft section JavaScript
  const chaseCraftSection = document.getElementById("chasecraft-scroll-container");
  const chaseCraftHeaderText = document.getElementById("chasecraft-header");
  const chaseCraftBackgroundImages = ["chasecraft-bg-1.jpg", "chasecraft-bg-2.jpg", "chasecraft-bg-3.jpg"];
  let chaseCraftCurrentBackgroundIndex = 0;

  // Function to change the background image for ChaseCraft
  function changeBackgroundChaseCraft() {
    chaseCraftCurrentBackgroundIndex = (chaseCraftCurrentBackgroundIndex + 1) % chaseCraftBackgroundImages.length;
    const imageUrl = `url('images/${chaseCraftBackgroundImages[chaseCraftCurrentBackgroundIndex]}')`;
    chaseCraftSection.style.backgroundImage = imageUrl;
  }

  // Function to update header text for ChaseCraft
  function updateHeaderTextChaseCraft() {
    const headerTexts = ["Embark on ChaseCraft Adventures", "Conquer New Worlds", "Join the ChaseCraft Community"];
    chaseCraftHeaderText.textContent = headerTexts[chaseCraftCurrentBackgroundIndex];
  }

  // Function to handle scrolling animations for ChaseCraft
  function handleScrollAnimationChaseCraft() {
    if (window.scrollY > 200) {
      // Add animation when scrolled 200 pixels
      chaseCraftSection.classList.add("animate");
    } else {
      // Remove animation if scrolled back up
      chaseCraftSection.classList.remove("animate");
    }
  }

  // Add click event to change background for ChaseCraft
  chaseCraftSection.addEventListener("click", function () {
    changeBackgroundChaseCraft();
    updateHeaderTextChaseCraft();
  });

  // Add scroll event to handle animations for ChaseCraft
  window.addEventListener("scroll", handleScrollAnimationChaseCraft);

  // Matrix Rain section JavaScript
  const matrixSection = document.getElementById("matrix-scroll-container");
  const matrixCanvas = document.createElement("canvas");
  matrixCanvas.id = "matrix-canvas";
  matrixSection.appendChild(matrixCanvas);

  // Set up the canvas
  const canvas = document.getElementById("matrix-canvas");
  const context = canvas.getContext("2d");

  // Matrix settings
  const matrixFont = "Matrix Code NFI"; // You may need to import this font
  const fontSize = 14;
  const columns = Math.floor(window.innerWidth / fontSize);
  const matrix = "01"; // Characters for the matrix rain

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const drops = [];
  for (let x = 0; x < columns; x++) {
    drops[x] = Math.floor(Math.random() * canvas.height);
  }

  // Function to draw the matrix rain
  function drawMatrix() {
    context.fillStyle = "rgba(0, 0, 0, 0.04)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#00FF00"; // Green color for matrix rain
    context.font = `${fontSize}px ${matrixFont}`;

    for (let i = 0; i < drops.length; i++) {
      const text = matrix[Math.floor(Math.random() * matrix.length)];
      context.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  // Function to update the matrix rain animation
  function updateMatrixRain() {
    drawMatrix();
    requestAnimationFrame(updateMatrixRain);
  }

  updateMatrixRain();

  // Add click event to pause/resume the animation
  matrixSection.addEventListener("click", function () {
    if (canvas.style.display === "none") {
      canvas.style.display = "block";
      updateMatrixRain();
    } else {
      canvas.style.display = "none";
    }
  });
});

// Quiz-related JavaScript
const startQuizButton = document.getElementById("start-quiz-button");
const quizContainer = document.getElementById("quiz-container");
const submitAnswerButton = document.getElementById("submit-answer-button");
const resultText = document.getElementById("result");

let currentQuestion = 0;
const questions = [
  {
    question: "What is the objective of Space Chase?",
    correctAnswer: "b"
  },
  {
    question: "In Stellar Odyssey, what can you explore?",
    correctAnswer: "c"
  },
  {
    question: "What is the main theme of Nebula Quest?",
    correctAnswer: "a"
  }
};

startQuizButton.addEventListener("click", function () {
  startQuizButton.style.display = "none";
  quizContainer.style.display = "block";
  showQuestion(currentQuestion);
});

submitAnswerButton.addEventListener("click", function () {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (selectedAnswer) {
    if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
      resultText.textContent = "Correct!";
    } else {
      resultText.textContent = "Wrong. Try again!";
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion(currentQuestion);
    } else {
      resultText.textContent = "Quiz completed!";
    }
  }
});

function showQuestion(questionIndex) {
  resultText.textContent = "";
  document.getElementById("question").textContent = questions[questionIndex].question;
  document.querySelectorAll('input[name="answer"]').forEach((radio) => (radio.checked = false));
}
