const tabButtons = document.querySelectorAll('#top #icons li'); // Select tab buttons
const shopTabs = document.querySelectorAll('.shop-tabs'); // Select shop tabs (these are content tabs)

tabButtons.forEach((button, buttonIndex) => {
  button.addEventListener('click', () => {
    // Remove "active-tab-btn" from all buttons
    tabButtons.forEach(otherButton => otherButton.classList.remove('active-tab-btn'));

    // Add "active-tab-btn" to the clicked button
    button.classList.add('active-tab-btn');

    // Select the corresponding shop tab based on index
    const selectedTab = shopTabs[buttonIndex];

    // Remove "active-tab" (or your inactive class) from all shop tabs
    shopTabs.forEach(tab => tab.classList.remove('active-tab')); // Adjust the class name if needed

    // Add "active-tab" to the selected shop tab
    selectedTab.classList.add('active-tab');
  });
});