document.addEventListener("DOMContentLoaded", function (event) {
  console.log("Loaded");

  // Nav bar Links and Items
  const navLinks = document.querySelectorAll(".nav-link");
  const navBar = document.querySelector(".navbar");
  const sideBar = document.querySelector(".side-nav-drawer");
  const mainSideNavButtons = document.querySelectorAll(".sn__HI_Buttons");
  const homeNavBackBtn = document.getElementById("home-nav-back-btn");

  // Side Nav contents
  const sideNavContents = document.querySelectorAll(".sn__Content");
  const mainNavContent = document.querySelector("#main-nav-content");
  const productsNavContent = document.querySelector("#products-nav-content");
  const resourcesNavContent = document.querySelector("#resources-nav-content");
  const sideNavAuth = document.querySelector(".sn__Auth");
  const inspirationNavContent = document.querySelector(
    "#inspiration-nav-content"
  );

  const navButton = document.getElementById("side-nav-btn");
  const overlay = document.querySelector(".overlay");
  const sideNavHomeButtons = document.querySelectorAll(".sn__Back_Btn");

  // **********************************
  // FUNCTION DEFINITIONS
  // **********************************
  const addHoverListener = () => {
    overlay.addEventListener("mouseenter", showHideMainSideNav);
  };

  const removeHoverListener = () => {
    overlay.removeEventListener("mouseenter", showHideMainSideNav);
  };

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

    // **************************************
    // prepare side menu item for mobile
    // **************************************
    if (parseInt(window.screen.width) <= 1099) {
      console.log("Mobile Display");
      // remove hover event listener to overlay
      overlay.removeEventListener("mouseenter", showHideMainSideNav);
      overlay.removeEventListener("transitionend", addHoverListener);
      overlay.removeEventListener("transitionstart", removeEventListener);

      // show auth box
      sideNavAuth.style.display = "flex";

      // show header buttons
      body.querySelector(".sn__Header_Buttons").style.display = "flex";

      // **************************************
      // prepare side menu item for desktop
      // **************************************
    } else {
      console.log("Desktop Display");
      // add hover event listener to overlay
      // remove event listener when animation starts
      overlay.addEventListener("transitionstart", removeHoverListener);
      // add event listener when animation endds
      overlay.addEventListener("transitionend", addHoverListener);
      // hide auth box
      sideNavAuth.style.display = "none";

      // hide the header nav items
      body.querySelector(".sn__Header_Buttons").style.display = "none";

      // pad top of side bar and show links
      body.style.paddingTop = "50px";
    }

    //  fade out and set display property of current div to none;
    sideNavContents.forEach((item) => (item.style.display = "none"));

    //  fade in and set display property to block - flex
    body.style.display = "flex";
  };

  // Change color of navbar when mouse is hovered
  navBar.addEventListener(
    "mouseenter",
    () => (navBar.style.backgroundColor = "#fff")
  );

  navBar.addEventListener(
    "mouseleave",
    () => (navBar.style.backgroundColor = "#ffe01b")
  );

  // Add Event listener to show Side Bar when nav
  // Button is Clicked
  navButton.addEventListener("click", showHideMainSideNav);

  // Add Event listener to dismiss Side Bar
  // When Back Arrow is Clicked
  homeNavBackBtn.addEventListener("click", showHideMainSideNav);

  // Add Event listener to dismiss Side Bar
  // When Overlay is Clicked
  overlay.addEventListener("click", showHideMainSideNav);

  // Add Event listeners to main side bar buttons
  // To switch Side Bar Content When Clicked
  sideNavHomeButtons.forEach((nodeItem) =>
    nodeItem.addEventListener("click", () => {
      showSideMenu(mainNavContent);
    })
  );

  // Add Event listeners to nav links to display
  // Side Bar when hovered
  navLinks.forEach((nodeItem) => {
    // Show Side Menu When Hovering Items
    nodeItem.addEventListener("mouseenter", () => {
      if (nodeItem.innerText === "Pricing") {
        return;
      } else if (nodeItem.innerText === "Inspiration") {
        showSideMenu(inspirationNavContent);
      } else if (nodeItem.innerText === "Resources") {
        showSideMenu(resourcesNavContent);
      } else if (nodeItem.innerText === "Products") {
        showSideMenu(productsNavContent);
      } else {
        console.log("invalid parameter item");
      }
      showHideMainSideNav();
      console.log("NODE ITEM: ", nodeItem.innerText);
    });

    // Add Event listeners to nav links to dismiss
    // Side Bar when not hovered
    navLinks.forEach((nodeItem) =>
      // Hide Side Bar when Mouse Leaves link Items
      nodeItem.addEventListener("mouseout", () => {
        if (nodeItem.innerText === "Pricing") {
        } else {
          showHideMainSideNav();
        }
      })
    );
  });

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

  // DOM CONTENT LOADED
});
