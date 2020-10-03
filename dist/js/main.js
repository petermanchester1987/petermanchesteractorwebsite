// Select DOM
const myMenuBtn = document.querySelector(".menu-btn");
const myMenu = document.querySelector(".menu");
const myMenuNav = document.querySelector(".menu-nav");
const myMenuBranding = document.querySelector(".menu-branding");
const myNavItems = document.querySelectorAll(".nav-item");

// Set initial state of menu
let showMenu = false;

//Adding event listener for menu
myMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    myMenuBtn.classList.add("close");
    myMenu.classList.add("show");
    myMenuNav.classList.add("show");
    myMenuBranding.classList.add("show");
    myNavItems.forEach((item) => item.classList.add("show"));

    //set menu state
    showMenu = true;
  } else {
    myMenuBtn.classList.remove("close");
    myMenu.classList.remove("show");
    myMenuNav.classList.remove("show");
    myMenuBranding.classList.remove("show");
    myNavItems.forEach((item) => item.classList.remove("show"));

    //set menu state
    showMenu = false;
  }
}

// FORM JAVASCRIPT

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
