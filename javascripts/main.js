document.addEventListener("DOMContentLoaded", function (event) {
  console.log("Loaded");

  const navBar = document.querySelector(".navbar");
  const mainSideNav = document.querySelector(".side-nav-drawer");
  const mainSideNavButtons = document.querySelectorAll(".sn__HI_Buttons");
  const mainNavContent = document.querySelector("#main-nav-content");
  const productsNavContent = document.querySelector("#products-nav-content");
  const resourcesNavContent = document.querySelector("#resources-nav-content");
  const inspirationNavContent = document.querySelector(
    "#inspiration-nav-content"
  );

  const overlay = document.querySelector(".overlay");
  const navButton = document.getElementById("side-nav-btn");
  const mainSideNavBackButton = document.querySelectorAll(".sn__Back_Btn");

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

  const showSideMenu = (body) => {
    mainSideNav.querySelector(".sn__Content").innerHTML = body.innerHTML;
    // console.log(body.innerHTML);
  };

  navBar.addEventListener(
    "mouseenter",
    () => (navBar.style.backgroundColor = "#fff")
  );

  // ADD EVENT LISTENER TO NAV BUTTON
  navButton.addEventListener("click", showHideMainSideNav);

  // ADD OVERLAY EVENT LISTENER
  overlay.addEventListener("click", showHideMainSideNav);
  mainSideNavBackButton.forEach((nodeItem) =>
    nodeItem.addEventListener("click", showHideMainSideNav)
  );

  // ADD EVENT LISTENERST TO MAIN SIDE NAV BUTTONS
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
