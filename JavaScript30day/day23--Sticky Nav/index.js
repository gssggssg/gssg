const main = document.getElementById("main");
const logo = document.getElementsByClassName("logo")[0];

const topOfNav = main.offsetTop;

let theCurrentStyle = main.getBoundingClientRect();

window.addEventListener('scroll', function (e) {
  if (window.scrollY >= topOfNav) {
    main.classList.add("dw");
    logo.style.flex = 1;
  } else {
    main.classList.remove("dw");
    logo.style.flex = 0;
  }
});