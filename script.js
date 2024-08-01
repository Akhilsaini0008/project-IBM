function showSection(sectionId) {
  const sections = document.querySelectorAll(".form-container");
  sections.forEach((section) => section.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");
}

document
  .getElementById("sellRecyclableForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const paper = parseFloat(document.getElementById("paper").value) || 0;
    const plastic = parseFloat(document.getElementById("plastic").value) || 0;
    const glass = parseFloat(document.getElementById("glass").value) || 0;

    const eTokens = paper * 0.5 + plastic * 0.8 + glass * 0.2;

    document.getElementById(
      "result"
    ).innerText = `You have earned ${eTokens.toFixed(2)} E-Tokens`;

    updateWallet(eTokens);
  });

function updateWallet(tokens) {
  const walletTokens = document.getElementById("walletTokens");
  let currentTokens = parseFloat(walletTokens.innerText.split(": ")[1]) || 0;
  currentTokens += tokens;
  walletTokens.innerText = `Total E-Tokens: ${currentTokens.toFixed(2)}`;
}

// Initialize carousel
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel img");
const totalSlides = slides.length;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 3000);
