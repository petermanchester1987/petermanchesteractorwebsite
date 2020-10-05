const carouselSlide = document.querySelector(".carousel-slide"),
  carouselImages = document.querySelectorAll(".carousel-slide img"),
  prevBtn = document.querySelector("#prevBtn"),
  nextBtn = document.querySelector("#nextBtn");
let counter = 1;
const size = carouselImages[0].clientWidth;
(carouselSlide.style.transform = "translateX(" + -size * counter + "px)"),
  nextBtn.addEventListener("click", () => {
    counter >= carouselImages.length - 1 ||
      ((carouselSlide.style.transition = "transform 0.4s ease-in-out"),
      counter++,
      (carouselSlide.style.transform =
        "translateX(" + -size * counter + "px)"));
  }),
  prevBtn.addEventListener("click", () => {
    counter <= 0 ||
      ((carouselSlide.style.transition = "transform 0.4s ease-in-out"),
      counter--,
      (carouselSlide.style.transform =
        "translateX(" + -size * counter + "px)"));
  }),
  carouselSlide.addEventListener("transitionend", () => {
    "lastClone" === carouselImages[counter].id
      ? ((carouselSlide.style.transition = "none"),
        (counter = carouselImages.length - 2),
        (carouselSlide.style.transform =
          "translateX(" + -size * counter + "px)"))
      : "firstClone" === carouselImages[counter].id &&
        ((carouselSlide.style.transition = "none"),
        (counter = carouselImages.length - counter),
        (carouselSlide.style.transform =
          "translateX(" + -size * counter + "px)"));
  });