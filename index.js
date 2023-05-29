// Code to update the header on scroll - start

function updateHeader() {
  var scrollValue = window.scrollY;
  var header = document.getElementById("header");
  // var verbier = document.getElementById("verbier");
  var line = document.getElementById("line");
  console.log(line);
  var download = document.getElementById("download");
  var lines = document.querySelectorAll(".menu-btn-lines");

  if (scrollValue < 500) {
    header.classList.remove("header-background-change");
    // verbier.classList.remove("header-background-change");
    line.classList.remove("header-background-color-change");
    download.classList.remove("header-border-color-change");
    lines.forEach((line) => {
      line.classList.remove("header-background-color-change");
    });
  } else {
    header.classList.add("header-background-change");
    // verbier.classList.add("header-background-change");
    line.classList.add("header-background-color-change");
    download.classList.add("header-border-color-change");
    lines.forEach((line) => {
      line.classList.add("header-background-color-change");
    });
  }
}

window.addEventListener("scroll", updateHeader);

// Code to update the header on scroll - start

// Code to toggle the visibility of the navbar menu - start
const navbarMenu = document.getElementById("navbarMenu");
const navbarMenuItems = document.querySelectorAll(".navbar-menu-links li");

function revealNavbarMenuLinks() {
  navbarMenuItems.forEach((item) => {
    item.style.opacity = "1";
    item.style.transition = "opacity 0.6s ease-out";
    item.style.transitionDelay = "0.6s";
  });
}
function hideNavBarMenuItems() {
  navbarMenuItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transition = "opacity 0.1s ease-out";
    item.style.transitionDelay = "0.1s";
  });
}

function toggleMobileMenuDisplay() {
  if (navbarMenu.style.right < "-95%") {
    navbarMenu.style.right = "0%";
    navbarMenu.style.transition = "right 0.6s ease-in-out";
    revealNavbarMenuLinks();
  } else {
    hideNavBarMenuItems();
    navbarMenu.style.right = "-100%";
  }
}

document
  .getElementById("close-btn")
  .addEventListener("click", toggleMobileMenuDisplay);
document
  .getElementById("open-btn")
  .addEventListener("click", toggleMobileMenuDisplay);

// Code to toggle the visibility of the navbar menu - end

//Code to toggle the layout content - start

var buttons = document.querySelectorAll(".layout-tab-buttons");
// var text = document.querySelectorAll(".new-layout-toggled-text");
// var images = document.querySelectorAll(".new-layout-img-container");

buttons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((button) => {
      button.classList.remove("layout-active-btn");
    });
    button.classList.add("layout-active-btn");

    // images.forEach((image) => {
    //     image.classList.remove("layout-active-img");
    // });
    // images[index].classList.add("layout-active-img");

    // contents.forEach((content) => {
    //     content.classList.remove("layout-content-active");
    // });
    // contents[index].classList.add("layout-content-active");
  });
});

var outsideText = document.getElementById("outsideContent");
var outsideImg = document.getElementById("outsideImg");
var insideCarousel = document.getElementById("insideCarousel");

function toggleOutsideTabActive() {
  console.log("Outside pressed");
  outsideText.style.display = "block";
  outsideImg.style.display = "block";
  insideCarousel.style.display = "none";
}

function toggleInsideTabActive() {
  console.log("Inside pressed");
  outsideText.style.display = "none";
  outsideImg.style.display = "none";
  insideCarousel.style.display = "block";
}

//Code to toggle the layout content - end












// //Code for the slider - start
// const slider = document.querySelector(".slider");
// const slides = document.querySelectorAll(".slide");
// const paginationBtns = document.querySelectorAll(".pagination-btn");
// const prevBtn = document.querySelector("#prev");
// const nextBtn = document.querySelector("#next");

// let currentSlide = 0;

// // Initialize the slider
// updateSlider();
// // Add event listener to the pagination buttons
// paginationBtns.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     currentSlide = index;

//     updateSlider();
//   });
// });

// // Add event listener to the control buttons

// prevBtn.addEventListener("click", () => {
//   currentSlide--;
//   updateSlider();
// });
// nextBtn.addEventListener("click", () => {
//   currentSlide++;
//   updateSlider();
// });

// function updateSlider() {
//   // update slides

//   slides.forEach((slide, index) => {
//     slide.classList.remove("active");

//     if (index === currentSlide) {
//       slide.classList.add("active");
//     }
//   });
//   // Update pagination buttons

//   paginationBtns.forEach((button, index) => {
//     button.classList.remove("active");

//     if (index === currentSlide) {
//       button.classList.add("active");
//     }
//   });
//   // Update control buttons

//   if (currentSlide === 0) {
//     prevBtn.disabled = true;
//   } else {
//     prevBtn.disabled = false;
//   }
//   if (currentSlide === slides.length - 1) {
//     nextBtn.disabled = true;
//   } else {
//     nextBtn.disabled = false;
//   }
// }


// showSlides();

// function showSlides() {
//   let i;
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   currentSlide++;
//   if (currentSlide > slides.length) {
//     currentSlide = 1;
//   }
//   for (i = 0; i < paginationBtns.length; i++) {
//     paginationBtns[i].className = paginationBtns[i].className.replace(" active", "");
//   }
//   slides[currentSlide - 1].style.display = "block";
//   paginationBtns[currentSlide - 1].className += " active";
//   setTimeout(() => {
//     slides.forEach((slide, index) => {
//       // console.log("here",index, currentSlide);
//       slide.style.opacity = index === currentSlide-1 ? '1' : '0';
//     });
//   }, 100);
//   setTimeout(showSlides, 4000); // Change image every 2 seconds
// }
// //Code for the slider - end













// // Code for versatility animation - start

window.addEventListener("scroll", () => {
  var pageY = window.pageYOffset;
  var versatility = document.getElementById("versatilitySlider");
  // versatility.style.left =
});

// Code for versatility animation - end

$(".versitality-image-container").slick({
  centerMode: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  centerPadding: "0px",
  variableWidth: true,
  prevArrow: null,
  nextArrow: null,
  autoplay: true,
  autoplaySpeed: 1500,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".subhero_section", {
  yPercent: -100,
  ease: "Power3.eaeOut",
  scrollTrigger: {
    trigger: ".subhero_section",
    scrub: true,
    start: "top 95%",
    end: "bottom top",
  },
});

// //Code for the slider - start
// const slider1 = document.querySelector(".slider1");
// const slides1 = document.querySelectorAll(".slide1");
// const paginationBtns1 = document.querySelectorAll(".pagination-btn1");
// const prevBtn1 = document.querySelector("#prev1");
// const nextBtn1 = document.querySelector("#next1");

// let currentSlide1 = 0;

// // Initialize the slider
// updateSlider();
// // Add event listener to the pagination buttons
// paginationBtns1.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     currentSlide1 = index;
    
//     updateSlider();
//   });
// });

// // Add event listener to the control buttons

// prevBtn1.addEventListener("click", () => {
//   currentSlide1--;
//   console.log(currentSlide1);
//   updateSlider();
// });
// nextBtn1.addEventListener("click", () => {
//   currentSlide1++;
//   updateSlider();
// });

// function updateSlider() {
//   // update slides

//   slides1.forEach((slide, index) => {
//     slide.classList.remove("active");

//     if (index === currentSlide1) {
//       slide.classList.add("active");
//     }
//   });
//   // Wait for the transition to complete before updating opacity
  

//   // Update pagination buttons

//   paginationBtns1.forEach((button, index) => {
//     button.classList.remove("active");

//     if (index === currentSlide1) {
//       button.classList.add("active");
//     }
//   });
//   // Update control buttons

//   if (currentSlide1 === 0) {
//     prevBtn1.disabled = true;
//   } else {
//     prevBtn1.disabled = false;
//   }
//   if (currentSlide1 === slides1.length - 1) {
//     nextBtn1.disabled = true;
//   } else {
//     nextBtn1.disabled = false;
//   }
// }


// showSlides1();

// function showSlides1() {
//   let i;
//   for (i = 0; i < slides1.length; i++) {
//     slides1[i].style.display = "none";
//   }
//   currentSlide1++;
//   if (currentSlide1 > slides1.length) {
//     currentSlide1 = 1;
//   }
//   for (i = 0; i < paginationBtns1.length; i++) {
//     paginationBtns1[i].className = paginationBtns1[i].className.replace(" active", "");
//   }
//   slides1[currentSlide1 - 1].style.display = "block";
//   paginationBtns1[currentSlide1 - 1].className += " active";
//   console.log(currentSlide1);
//   setTimeout(() => {
//     slides1.forEach((slide, index) => {
//       // console.log("here",index, currentSlide1);
//       slide.style.opacity = index === currentSlide1-1 ? '1' : '0';
//     });
//   }, 100);
//   setTimeout(showSlides1, 4000); // Change image every 2 seconds
// }
// //Code for the slider - end

const imagesLayout = document.querySelectorAll(".slider-image-layout");
const dotsLayout = document.querySelectorAll(".slider-dot-layout");
let currentSlideLayout = 0;

function showSlideLayout(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = imagesLayout.length - 1;
  } else if (slideIndex >= imagesLayout.length) {
    slideIndex = 0;
  }

  imagesLayout.forEach((image) => {
    image.classList.remove("active");
  });

  dotsLayout.forEach((dot) => {
    dot.classList.remove("active");
  });

  imagesLayout[slideIndex].classList.add("active");
  dotsLayout[slideIndex].classList.add("active");

  currentSlideLayout = slideIndex;
}

function nextSlideLayout() {
  showSlideLayout(currentSlideLayout + 1);
}

setInterval(nextSlideLayout, 4000);

dotsLayout.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlideLayout(index);
  });
});
