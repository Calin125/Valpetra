//Code for the slider - start
const slider1 = document.querySelector(".slider1");
const slides1 = document.querySelectorAll(".slide1");
const paginationBtns1 = document.querySelectorAll(".pagination-btn1");
const prevBtn1 = document.querySelector("#prev1");
const nextBtn1 = document.querySelector("#next1");

let currentSlide1 = 0;

// Initialize the slider
updateSlider();
// Add event listener to the pagination buttons
paginationBtns1.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentSlide1 = index;
    
    updateSlider();
  });
});

// Add event listener to the control buttons

prevBtn1.addEventListener("click", () => {
  currentSlide1--;
  console.log(currentSlide1);
  updateSlider();
});
nextBtn1.addEventListener("click", () => {
  currentSlide1++;
  updateSlider();
});

function updateSlider() {
  // update slides

  slides1.forEach((slide, index) => {
    slide.classList.remove("active");

    if (index === currentSlide1) {
      slide.classList.add("active");
    }
  });
  // Wait for the transition to complete before updating opacity
  

  // Update pagination buttons

  paginationBtns1.forEach((button, index) => {
    button.classList.remove("active");

    if (index === currentSlide1) {
      button.classList.add("active");
    }
  });
  // Update control buttons

  if (currentSlide1 === 0) {
    prevBtn1.disabled = true;
  } else {
    prevBtn1.disabled = false;
  }
  if (currentSlide1 === slides1.length - 1) {
    nextBtn1.disabled = true;
  } else {
    nextBtn1.disabled = false;
  }
}


showSlides1();

function showSlides1() {
  let i;
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  currentSlide1++;
  if (currentSlide1 > slides1.length) {
    currentSlide1 = 1;
  }
  for (i = 0; i < paginationBtns1.length; i++) {
    paginationBtns1[i].className = paginationBtns1[i].className.replace(" active", "");
  }
  slides1[currentSlide1 - 1].style.display = "block";
  paginationBtns1[currentSlide1 - 1].className += " active";
  console.log(currentSlide1);
  setTimeout(() => {
    slides1.forEach((slide, index) => {
      console.log("here",index, currentSlide1);
      slide.style.opacity = index === currentSlide1-1 ? '1' : '0';
    });
  }, 100);
  setTimeout(showSlides1, 4000); // Change image every 2 seconds
}
//Code for the slider - end