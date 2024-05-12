import "./styles.css";

// Select all elements with the class 'dropdownContent'
const dropdownContents = document.querySelectorAll(".dropdownContent");

// Loop through each dropdownContent element
dropdownContents.forEach((dropdownContent) => {
  // Find the hoverBtn and menuItems within this dropdownContent
  const hoverBtn = dropdownContent.querySelector("#hoverBtn");
  const menuItems = dropdownContent.querySelector(".menuItems");

  // Add click event listener to each hoverBtn
  hoverBtn.addEventListener("click", () => {
    // Toggle the 'hidden' class on the menuItems within this dropdownContent
    menuItems.classList.toggle("hidden");
  });
});