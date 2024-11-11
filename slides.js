document.addEventListener("DOMContentLoaded", function () {
  const slideList = document.querySelector("[data-slide='list']");
  const slides = document.querySelectorAll("[data-slide='item']");
  const previousButton = document.querySelector("[data-slide='nav-previous-button']");
  const nextButton = document.querySelector("[data-slide='nav-next-button']");

  let currentIndex = 0;
  const slideInterval = 5000; 
  
  function updateSlidePosition() {
    slideList.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  previousButton.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSlidePosition();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlidePosition();
  });

  function autoPlaySlides() {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlidePosition();
  }

  setInterval(autoPlaySlides, slideInterval);
});
