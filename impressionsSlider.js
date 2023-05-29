const imagesImpressions = document.querySelectorAll(".slider-image-impressions");
const dotsImpressions = document.querySelectorAll(".slider-dot-impressions");
let currentSlideImpressions = 0;

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = imagesImpressions.length - 1;
  } else if (slideIndex >= imagesImpressions.length) {
    slideIndex = 0;
  }

  imagesImpressions.forEach((image) => {
    image.classList.remove("active");
  });

  dotsImpressions.forEach((dot) => {
    dot.classList.remove("active");
  });

  imagesImpressions[slideIndex].classList.add("active");
  dotsImpressions[slideIndex].classList.add("active");

  currentSlideImpressions = slideIndex;
}

function nextSlide() {
  showSlide(currentSlideImpressions + 1);
}

setInterval(nextSlide, 4000);

dotsImpressions.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});
