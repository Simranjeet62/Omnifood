// Getting the current Year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// adding new class name to header for mobile navigation overlay

const header = document.querySelector(".header");
const btn = document.querySelector(".btn-mobile-nav");
const navigation = document.querySelector(".main-nav");

addEventListener("click", function toggleNavOpen() {
  btn.classList.toggle("nav-open");
  navigation.classList.toggle("nav-open");
});
