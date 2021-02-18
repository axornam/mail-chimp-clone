document.addEventListener("DOMContentLoaded", function (event) {
  console.log("Loaded");

  const navBar = document.querySelector(".navbar");
  const mainSideNav = document.querySelector(".side-nav-drawer");
  const navButton = document.getElementById("side-nav-btn");
  const overlay = document.querySelector(".overlay");
  const mainSideNavBackButton = document.querySelector(
    ".sn__Header_Buttons span:first-child"
  );

  const showHideMainSideNav = () => {
    // show - hide the side drawer
    mainSideNav.classList.toggle("show-hide-nav");

    // show - hide the overlay
    if (mainSideNav.classList.contains("show-hide-nav")) {
      overlay.style.transform = "translateX(0)";
    } else {
      overlay.style.transform = "translateX(-100%)";
    }
  };

  navBar.addEventListener(
    "mouseenter",
    () => (navBar.style.backgroundColor = "#fff")
  );

  navButton.addEventListener("click", showHideMainSideNav);
  overlay.addEventListener("click", showHideMainSideNav);
  mainSideNavBackButton.addEventListener("click", showHideMainSideNav);
});
