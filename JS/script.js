// Scroll Header
const headers = document.querySelectorAll("header");
function handleScroll() {
  headers.forEach((header) => {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}
// Running Header Scroll Function
window.addEventListener("scroll", handleScroll);

// Hamburger
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
});

// Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header .navbar");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});

// Ads Popup
const adsPop = document.querySelector(".ads-contact");
const close = document.getElementById("closeAds");

close.addEventListener("click", () => {
  adsPop.classList.add("close");
});

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    adsPop.classList.add("close");
  } else {
    adsPop.classList.add("close");
  }
});
