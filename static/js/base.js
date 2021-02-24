let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");

const handleHamburger = () => {
  hamburger.classList.toggle("cross");
  menu.style.display = menu.style.display === "none" ? 'block': 'none';
}


