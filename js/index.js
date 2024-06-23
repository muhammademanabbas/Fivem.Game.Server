const tabButtons = document.querySelectorAll("#top #icons li"); // Select tab buttons
const shopTabs = document.querySelectorAll(".shop-tabs"); // Select shop tabs (these are content tabs)
const sideBarmenu = document.querySelector("#side-bar-menu");
const sideBar = document.querySelector('#side-bar');
const closeSideBar = document.querySelector("#close-side-bar");
let lowestValueArrow;
let greatestValueArrow;

//  after document load this function will run
function DOM__CONTENT_LOAD(){
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
}
DOM__CONTENT_LOAD()

// side bar selected and unselected functionality
function SIDE_BAR__TOOGLE (){
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
SIDE_BAR__TOOGLE()

// Add event listener to each tab button to active tabs and buttons
function ACTIVE__TABS__AND__BUTTONS(){
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
}
ACTIVE__TABS__AND__BUTTONS()

// resize functionality
function resizeHandler() {
  // Media Query Check (within sideBarToogle)
  if (window.innerWidth > 930 ) {
    sideBar.style.display = "block";
    sideBar.style.opacity = 1;
    sideBar.style.scale = 1;
  } else {
    sideBar.style.display = "none";
    sideBar.style.opacity = 0;
    sideBar.style.scale = 0;
  }
}
window.addEventListener("resize", resizeHandler);