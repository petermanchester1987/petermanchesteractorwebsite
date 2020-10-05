const showCarouselSlide = document.querySelector(".showcarousel-slide"),
  showCarouselImages = document.querySelectorAll(".showcarousel-slide img"),
  showPrevBtn = document.querySelector("#showPrevBtn"),
  showNextBtn = document.querySelector("#showNextBtn");
let showCounter = 1;
const showSize = showCarouselImages[0].clientWidth;
(showCarouselSlide.style.transform =
  "translateX(" + -showSize * showCounter + "px)"),
  showNextBtn.addEventListener("click", () => {
    showCounter >= showCarouselImages.length - 1 ||
      ((showCarouselSlide.style.transition = "transform 0.4s ease-in-out"),
      showCounter++,
      (showCarouselSlide.style.transform =
        "translateX(" + -showSize * showCounter + "px)"));
  }),
  showPrevBtn.addEventListener("click", () => {
    showCounter <= 0 ||
      ((showCarouselSlide.style.transition = "transform 0.4s ease-in-out"),
      showCounter--,
      (showCarouselSlide.style.transform =
        "translateX(" + -showSize * showCounter + "px)"));
  }),
  showCarouselSlide.addEventListener("transitionend", () => {
    "showLastClone" === showCarouselImages[showCounter].id
      ? ((showCarouselSlide.style.transition = "none"),
        (showCounter = showCarouselImages.length - 2),
        (showCarouselSlide.style.transform =
          "translateX(" + -showSize * showCounter + "px)"))
      : "showFirstClone" === showCarouselImages[showCounter].id &&
        ((showCarouselSlide.style.transition = "none"),
        (showCounter = showCarouselImages.length - showCounter),
        (showCarouselSlide.style.transform =
          "translateX(" + -showSize * showCounter + "px)"));
  });
