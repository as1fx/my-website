// Responsive Navbar
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Typing Effect
const typingText = document.querySelector(".typing-text");
const words = ["Full-Stack Developer", "WordPress Engineer", "Java Enthusiast", "Tech Explorer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentWord = words[wordIndex];
    typingText.textContent = isDeleting ? currentWord.slice(0, charIndex--) : currentWord.slice(0, charIndex++);
    if (!isDeleting && charIndex === currentWord.length) isDeleting = true, setTimeout(typeEffect, 1500);
    else if (isDeleting && charIndex === 0) isDeleting = false, wordIndex = (wordIndex + 1) % words.length, setTimeout(typeEffect, 500);
    else setTimeout(typeEffect, isDeleting ? 100 : 200);
}

document.addEventListener("DOMContentLoaded", () => setTimeout(typeEffect, 1000));
