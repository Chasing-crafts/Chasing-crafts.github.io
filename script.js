// scripts.js
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

// Quiz related JavaScript
// ... your quiz code here

document.addEventListener("DOMContentLoaded", function () {
  const cyberMageSection = document.getElementById("cybermage-scroll-container");
  const headerText = document.getElementById("cybermage-header");
  const backgroundImages = ["cyber-bg-1.jpg", "cyber-bg-2.jpg", "cyber-bg-3.jpg"];
  let currentBackgroundIndex = 0;

  // Function to change the background image
  function changeBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
    const imageUrl = `url('images/${backgroundImages[currentBackgroundIndex]}')`;
    cyberMageSection.style.backgroundImage = imageUrl;
  }

  // Function to update header text
  function updateHeaderText() {
    const headerTexts = ["Explore the CyberMage World", "Unleash Your Powers", "Conquer the Digital Realm"];
    headerText.textContent = headerTexts[currentBackgroundIndex];
  }

  // Function to handle scrolling animations
  function handleScrollAnimation() {
    if (window.scrollY > 200) {
      // Add animation when scrolled 200 pixels
      cyberMageSection.classList.add("animate");
    } else {
      // Remove animation if scrolled back up
      cyberMageSection.classList.remove("animate");
    }
  }

  // Add click event to change background
  cyberMageSection.addEventListener("click", function () {
    changeBackground();
    updateHeaderText();
  });

  // Add scroll event to handle animations
  window.addEventListener("scroll", handleScrollAnimation);
});

document.addEventListener("DOMContentLoaded", function () {
  const chaseCraftSection = document.getElementById("chasecraft-scroll-container");
  const headerText = document.getElementById("chasecraft-header");
  const backgroundImages = ["chasecraft-bg-1.jpg", "chasecraft-bg-2.jpg", "chasecraft-bg-3.jpg"];
  let currentBackgroundIndex = 0;

  // Function to change the background image
  function changeBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
    const imageUrl = `url('images/${backgroundImages[currentBackgroundIndex]}')`;
    chaseCraftSection.style.backgroundImage = imageUrl;
  }

  // Function to update header text
  function updateHeaderText() {
    const headerTexts = ["Embark on ChaseCraft Adventures", "Conquer New Worlds", "Join the ChaseCraft Community"];
    headerText.textContent = headerTexts[currentBackgroundIndex];
  }

  // Function to handle scrolling animations
  function handleScrollAnimation() {
    if (window.scrollY > 200) {
      // Add animation when scrolled 200 pixels
      chaseCraftSection.classList.add("animate");
    } else {
      // Remove animation if scrolled back up
      chaseCraftSection.classList.remove("animate");
    }
  }

  // Add click event to change background
  chaseCraftSection.addEventListener("click", function () {
    changeBackground();
    updateHeaderText();
  });

  // Add scroll event to handle animations
  window.addEventListener("scroll", handleScrollAnimation);
});

document.addEventListener("DOMContentLoaded", function () {
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