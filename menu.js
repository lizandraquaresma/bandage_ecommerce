document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu_btn");
  const navigatorMobile = document.querySelector(".navigator_mobile");

  menuBtn.addEventListener("click", function () {
    navigatorMobile.classList.toggle("active");
  });
});