let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");

const handleHamburger = () => {
  hamburger.classList.toggle("cross");
  menu.style.display = menu.style.display === "none" ? "block" : "none";
};

(() => {
  const nav = document.getElementsByTagName("nav")[0];

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
})();
