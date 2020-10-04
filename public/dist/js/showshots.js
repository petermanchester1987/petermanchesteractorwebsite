// Show gallery

const showCarouselSlide = document.querySelector(".showcarousel-slide");
const showCarouselImages = document.querySelectorAll(".showcarousel-slide img");
const showPrevBtn = document.querySelector("#showPrevBtn");
const showNextBtn = document.querySelector("#showNextBtn");

let showCounter = 1;
const showSize = showCarouselImages[0].clientWidth;

showCarouselSlide.style.transform =
  "translateX(" + -showSize * showCounter + "px)";

//button listeners

showNextBtn.addEventListener("click", () => {
  if (showCounter >= showCarouselImages.length - 1) return;
  showCarouselSlide.style.transition = "transform 0.4s ease-in-out";
  showCounter++;
  showCarouselSlide.style.transform =
    "translateX(" + -showSize * showCounter + "px)";
});

showPrevBtn.addEventListener("click", () => {
  if (showCounter <= 0) return;
  showCarouselSlide.style.transition = "transform 0.4s ease-in-out";
  showCounter--;
  showCarouselSlide.style.transform =
    "translateX(" + -showSize * showCounter + "px)";
});

showCarouselSlide.addEventListener("transitionend", () => {
  if (showCarouselImages[showCounter].id === "showLastClone") {
    showCarouselSlide.style.transition = "none";
    showCounter = showCarouselImages.length - 2;
    showCarouselSlide.style.transform =
      "translateX(" + -showSize * showCounter + "px)";
  } else if (showCarouselImages[showCounter].id === "showFirstClone") {
    showCarouselSlide.style.transition = "none";
    showCounter = showCarouselImages.length - showCounter;
    showCarouselSlide.style.transform =
      "translateX(" + -showSize * showCounter + "px)";
  }
});
