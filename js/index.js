const tabButtons = document.querySelectorAll("#top #icons li"); // Select tab buttons
const shopTabs = document.querySelectorAll(".shop-tabs"); // Select shop tabs (these are content tabs)
const sideBarmenu = document.querySelector("#side-bar-menu");
const sideBar = document.querySelector("#side-bar"); // selecting side bar
const closeSideBar = document.querySelector("#close-side-bar");
const menu = document.querySelector("#menu"); // seleecting top menu
const shop__tab = document.querySelectorAll(".shop-tabs");
const container__tab = document.querySelectorAll(".tabs-container");
const histort__btn = document.querySelector("#history-btn");
const history__tab = document.querySelector("#history-tab");
let card__images;
let card__container;
let lowestValueArrow;
let greatestValueArrow;
let preview__close__1;
let preview__close__2;

//  after document load this function will run
function DOM__CONTENT_LOAD() {
  // this functionality is for increment and decrement the quantity of the cards
  document.addEventListener("DOMContentLoaded", function () {
    greatestValueArrow = document.querySelectorAll(".increase-amount");
    lowestValueArrow = document.querySelectorAll(".decrease-amount");

    lowestValueArrow.forEach((arrow, index) => {
      arrow.addEventListener("click", function () {
        // Get the next sibling element (assuming it's a single element)
        const quantityElement = arrow.nextElementSibling;

        // Check if the sibling exists and has a valid number
        if (quantityElement && !isNaN(quantityElement.textContent)) {
          // Convert the text content to an integer
          let currentValue = parseInt(quantityElement.textContent);

          // Decrement the value, but only if it's greater than 1
          if (currentValue > 1) {
            currentValue--;
          }

          // Update the text content of the quantity element
          quantityElement.textContent = currentValue;
        } else {
          console.error("Invalid quantity element or format");
        }
      });
    });

    greatestValueArrow.forEach((arrow, index) => {
      arrow.addEventListener("click", function () {
        // Get the previous sibling element (assuming it's a single element)
        const quantityElement = arrow.previousElementSibling;

        // Check if the sibling exists and has a valid number
        if (quantityElement && !isNaN(quantityElement.textContent)) {
          // Convert the text content to an integer
          let currentValue = parseInt(quantityElement.textContent);

          // Increment the value
          currentValue++;

          // Update the text content of the quantity element
          quantityElement.textContent = currentValue;
        } else {
          console.error("Invalid quantity element or format");
        }
      });
    });
  });

  // this functionality for closing a preview card
  document.addEventListener("DOMContentLoaded", function () {
    preview__close__1 = document.querySelectorAll(".close-preview-1");
    preview__close__2 = document.querySelectorAll(".close-preview-2");

    preview__close__1.forEach((closeButton, index) => {
      closeButton.addEventListener("click", function (event) {
        this.closest(".preview-card").style.scale = "0"; // Access the element itself
        this.closest(".preview-card").style.opacity = "0";
      });
    });
    preview__close__2.forEach((closeButton, index) => {
      closeButton.addEventListener("click", function (event) {
        this.closest(".preview-card").style.scale = "0"; // Access the element itself
        this.closest(".preview-card").style.opacity = "0";
      });
    });
  });

  // this functionality is for opening a preview card
  document.addEventListener("DOMContentLoaded", function () {
    card__images = document.querySelectorAll(".card-img");
    card__container = document.querySelectorAll(".card-container");

    card__images.forEach((card__image) => {
      card__image.addEventListener("click", function () {
        let preview__CARD =
          card__image.parentElement.parentElement.parentElement.parentElement
            .childNodes[1];

        preview__CARD.style.scale = "1";
        preview__CARD.style.opacity = "1";
      });
    });
  });
}
DOM__CONTENT_LOAD();

// side bar selected and unselected functionality
function SIDE_BAR__TOOGLE() {
  // Event Listener for Toggle Button
  sideBarmenu.addEventListener("click", function () {
    console.log("clicked");
    sideBar.style.display = "block";
    sideBar.style.scale = "1";
    sideBar.style.opacity = "1";
    closeSideBar.style.display = "block";
  });

  // Event Listener for Close Button
  closeSideBar.addEventListener("click", function () {
    console.log("clicked");
    sideBar.style.display = "none";
    sideBar.style.scale = "0";
    sideBar.style.opacity = "0";
    closeSideBar.style.display = "none";
  });
}
SIDE_BAR__TOOGLE();

// Add event listener to each tab button to active tabs and buttons
function ACTIVE__TABS__AND__BUTTONS() {
  tabButtons.forEach((button, buttonIndex) => {
    button.addEventListener("click", () => {
      // Remove "active-tab-btn" from all buttons
      tabButtons.forEach((otherButton) =>
        otherButton.classList.remove("active-tab-btn")
      );
      const lowestValueArrow = document.querySelectorAll(".decrease-amount");

      lowestValueArrow.forEach((arrow, index) => {
        arrow.addEventListener("click", function () {
          // Get the next sibling element (assuming it's a single element)
          const quantityElement = arrow.nextElementSibling;

          // Check if the sibling exists and has a valid number
          if (quantityElement && !isNaN(quantityElement.textContent)) {
            // Convert the text content to an integer
            let currentValue = parseInt(quantityElement.textContent);

            // Decrement the value, but only if it's greater than 1
            if (currentValue > 1) {
              currentValue--;
            }

            // Update the text content of the quantity element
            quantityElement.textContent = currentValue;
          } else {
            console.error("Invalid quantity element or format");
          }
        });
      });

      // Add "active-tab-btn" to the clicked button
      button.classList.add("active-tab-btn");

      // Select the corresponding shop tab based on index
      const selectedTab = shopTabs[buttonIndex];

      // Remove "active-tab" (or your inactive class) from all shop tabs
      shopTabs.forEach((tab) => tab.classList.remove("active-tab")); // Adjust the class name if needed

      // Add "active-tab" to the selected shop tab
      selectedTab.classList.add("active-tab");
    });
  });

  histort__btn.addEventListener("click", () => {
    shopTabs.forEach((tab) => tab.classList.remove("active-tab"));
    history__tab.classList.add("active-tab");
  });
}
ACTIVE__TABS__AND__BUTTONS();

// resize functionality
function resizeHandler() {
 

  if (window.innerWidth > 930) {
    sideBar.style.zIndex = "0";
    sideBar.style.display = "block";
    sideBar.style.opacity = 1;
    sideBar.style.scale = 1;
  } else {
    sideBar.style.zIndex = "1";
    sideBar.style.display = "none";
    sideBar.style.opacity = 0;
    sideBar.style.scale = 0;
  }
}
window.addEventListener("resize", resizeHandler);
