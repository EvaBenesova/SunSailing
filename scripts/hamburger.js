const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar__menu");
const main = document.querySelector(".main");


hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");
   main.classList.toggle("main-move");
})


document.querySelectorAll(".nav__link").forEach(n => n.addEventListener("click", () => {
   hamburger.classList.remove("active");
   navMenu.classList.remove("active");
 }))


