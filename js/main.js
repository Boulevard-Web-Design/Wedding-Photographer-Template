// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener("click", function () {
  CShamburgerMenu.classList.toggle("cs-active");
  CSnavbarMenu.classList.toggle("cs-active");
  CSbody.classList.toggle("cs-open");
  // run the function to check the aria-expanded value
  ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
  const csUL = document.querySelector("#cs-expanded");
  const csExpanded = csUL.getAttribute("aria-expanded");

  if (csExpanded === "false") {
    csUL.setAttribute("aria-expanded", "true");
  } else {
    csUL.setAttribute("aria-expanded", "false");
  }
}

// mobile nav dropdown code if needed
const dropDowns = Array.from(
  document.querySelectorAll("#cs-navigation .cs-dropdown")
);
for (const item of dropDowns) {
  const onClick = () => {
    item.classList.toggle("cs-active");
  };
  item.addEventListener("click", onClick);
}

function togglePlayButton() {
  // Select all elements with the .cs-picture class
  const pictures = document.querySelectorAll("#hero-2219 .cs-video-group");

  // Add a click event listener to each .cs-picture element
  pictures.forEach((picture) => {
    picture.addEventListener("click", () => {
      // Select all elements with the .cs-play class
      const playButtons = document.querySelectorAll("#hero-2219 .cs-play");

      // Toggle the .cs-hide class on each .cs-play element
      playButtons.forEach((button) => {
        button.classList.toggle("cs-hide");
      });
    });
  });
}

// Call the function to activate the event listeners
togglePlayButton();

// function toggleVideoPlayback() {
//   // Select the video element
//   const video = document.querySelector("#hero-2219 video");

//   // Add a click event listener to the video
//   video.addEventListener("click", () => {
//     // Check if the video is paused
//     if (video.paused) {
//       video.play(); // Play the video if it is paused
//     } else {
//       video.pause(); // Pause the video if it is playing
//     }
//   });
// }

// // Call the function to activate the event listener
// toggleVideoPlayback();

class Slideshow {
  constructor() {
    // Initialize DOM elements for the slideshow
    // Converts NodeList to Array for better method availability
    this.slides = Array.from(document.querySelectorAll(".cs-slide"));
    this.nextButton = document.querySelector(".cs-slideshow-next");
    this.prevButton = document.querySelector(".cs-slideshow-prev");

    // Track the currently displayed slide and animation state
    this.currentIndex = 0;
    this.isMoving = false;

    // Setup event listeners and initial slide positions
    this.init();
  }

  init() {
    // Attach click handlers for navigation, using optional chaining for null safety
    this.nextButton?.addEventListener("click", () => this.moveSlide("next"));
    this.prevButton?.addEventListener("click", () => this.moveSlide("prev"));

    // Position slides in their starting configuration
    this.updateSlideStates();
  }

  updateSlideStates() {
    this.slides.forEach((slide, index) => {
      // Clear existing position classes to prevent conflicts
      slide.classList.remove("active", "prev", "next", "initial");

      // Apply appropriate positioning class based on slide's relation to current slide
      if (index === this.currentIndex) {
        slide.classList.add("active");
      } else if (index === this.getAdjacentIndex("prev")) {
        slide.classList.add("prev");
      } else if (index === this.getAdjacentIndex("next")) {
        slide.classList.add("next");
      }
    });
  }

  getAdjacentIndex(direction) {
    const totalSlides = this.slides.length;
    // Calculate the index of the next/previous slide with wrapping
    // Using modulo to create circular navigation
    if (direction === "next") {
      return (this.currentIndex + 1) % totalSlides;
    } else {
      return (this.currentIndex - 1 + totalSlides) % totalSlides;
    }
  }

  moveSlide(direction) {
    // Prevent animation overlap by checking if transition is in progress
    if (this.isMoving) return;
    this.isMoving = true;

    // Update the current slide index based on navigation direction
    this.currentIndex = this.getAdjacentIndex(direction);

    // Apply new positioning classes to slides
    this.updateSlideStates();

    // Re-enable navigation after transition animation completes
    setTimeout(() => {
      this.isMoving = false;
    }, 300); // Timeout should match CSS transition-duration
  }
}

// Create slideshow instance once DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  new Slideshow();
});

const faqItems = Array.from(document.querySelectorAll(".cs-faq-item"));
for (const item of faqItems) {
  const onClick = () => {
    item.classList.toggle("active");
  };
  item.addEventListener("click", onClick);
}
