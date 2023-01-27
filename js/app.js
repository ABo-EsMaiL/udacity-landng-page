/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = Array.from(document.querySelectorAll("section"));
const navbar = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function createList() {
  for (section of sections) {
    let sectionName = section.getAttribute("data-nav");
    let sectionLink = section.getAttribute("id");
    // create item for each one
    let listCreate = document.createElement("li");
    // add the item text
    listCreate.innerHTML = `<a href="#${sectionLink}" data-nav="${sectionLink}" class="menu__link">${sectionName}</a>`;
    // add listCreate to menu
    navbar.appendChild(listCreate);
  }
}

// Add class 'active' to section when near top of viewport
window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (active) {
    if (
      active.getBoundingClientRect().top >= -300 &&
      active.getBoundingClientRect().top <= 400
    ) {
      active.classList.add("your-active-class");
    } else {
      active.classList.remove("your-active-class");
    }
  });
};

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
createList();
// Scroll to section on link click
navbar.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  }
});
// Set sections as active
