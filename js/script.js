const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");

menuButton.addEventListener('click', () => {
    console.log("Клик по меню");
    menu.classList.toggle("is-open");
  });