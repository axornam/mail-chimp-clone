document.addEventListener("DOMContentLoaded", function (event) {
  console.log("Loaded");

  const navBar = document.querySelector(".navbar");
  const sideBar = document.querySelector(".side-nav-drawer");
  const mainSideNavButtons = document.querySelectorAll(".sn__HI_Buttons");

  // Side Nav contents
  const sideNavContents = document.querySelectorAll(".sn__Content");
  const mainNavContent = document.querySelector("#main-nav-content");
  const productsNavContent = document.querySelector("#products-nav-content");
  const resourcesNavContent = document.querySelector("#resources-nav-content");
  const inspirationNavContent = document.querySelector(
    "#inspiration-nav-content"
  );

  const overlay = document.querySelector(".overlay");
  const navButton = document.getElementById("side-nav-btn");
  const sideNavHomeButtons = document.querySelectorAll(".sn__Back_Btn");

  const showHideMainSideNav = () => {
    // show - hide the side drawer
    sideBar.classList.toggle("show-hide-nav");

    // show - hide the overlay
    if (sideBar.classList.contains("show-hide-nav")) {
      overlay.style.transform = "translateX(0)";
    } else {
      overlay.style.transform = "translateX(-100%)";
    }
  };

  const showSideMenu = (body) => {
    // console.log(body.innerHTML);
    //  fade out and set display property of current div to none;
    sideNavContents.forEach((item) => (item.style.display = "none"));

    //  fade in and set display property to block - flex
    body.style.display = "flex";
  };

  // CHANGE COLOR OF THE NAVBAR ON MOUSE ENTER AND ON SCROLL DOWN
  navBar.addEventListener(
    "mouseenter",
    () => (navBar.style.backgroundColor = "#fff")
  );

  // ADD EVENT LISTENER TO NAV BUTTON
  navButton.addEventListener("click", showHideMainSideNav);

  // ADD OVERLAY EVENT LISTENER
  overlay.addEventListener("click", showHideMainSideNav);

  // ADD EVENT LISTENER TO SIDE NAV BACK BUTTONS
  sideNavHomeButtons.forEach((nodeItem) =>
    nodeItem.addEventListener("click", () => {
      showSideMenu(mainNavContent);
    })
  );

  // ADD EVENT LISTENER TO MAIN SIDE NAV BUTTONS
  mainSideNavButtons.forEach((nodeItem) =>
    nodeItem.addEventListener("click", () => {
      if (nodeItem.innerText === "Pricing") {
      } else if (nodeItem.innerText === "Inspiration") {
        showSideMenu(inspirationNavContent);
      } else if (nodeItem.innerText === "Resources") {
        showSideMenu(resourcesNavContent);
      } else if (nodeItem.innerText === "Products") {
        showSideMenu(productsNavContent);
      } else {
        console.log("invalid parameter item");
      }
      console.log("NODE ITEM: ", nodeItem.innerText);
    })
  );
});
