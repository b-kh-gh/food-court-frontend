window.onload = function () {
  let menu = document.querySelector("#bars-icon");
  let navbar = document.querySelector(".header-navbar");

  menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };
};
