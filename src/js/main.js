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

//fullscreen the iframes

var elem = document.getElementById("showreelVideo");

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}

var elem2 = document.getElementById("musicVideo");

function openMusicFullscreen() {
  if (elem2.requestFullscreen) {
    elem2.requestFullscreen();
  } else if (elem2.mozRequestFullScreen) {
    /* Firefox */
    elem2.mozRequestFullScreen();
  } else if (elem2.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem2.webkitRequestFullscreen();
  } else if (elem2.msRequestFullscreen) {
    /* IE/Edge */
    elem2.msRequestFullscreen();
  }
}
/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}
