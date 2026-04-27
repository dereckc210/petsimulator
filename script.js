// Fade-in cards on scroll
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < trigger) {
      card.classList.add("show");
    }
  });
});

// Typing effect
function typeEffect(element, speed = 50) {
  const text = element.innerText;
  element.innerText = "";

  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerText += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.querySelector(".typing");
  if (typingText) typeEffect(typingText);
});
