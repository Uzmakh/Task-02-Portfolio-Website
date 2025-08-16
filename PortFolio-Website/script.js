// ? Mobile SideMenu
var sidemenu = document.getElementById("sidemenu");

function openMenu() {
  sidemenu.style.right = "0";
}
function closeMenu() {
  sidemenu.style.right = "-350px";
}




//? Make navigation fixed and add scroll effect
const nav = document.getElementById("mainNav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

//? Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


// ? For About Section
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  };
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  };
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
};


//? Dynamic Copyright Year
// Get the span element by its ID
const yearElement = document.getElementById('current-year');

// Get the current year using the Date object and set it as the text content
yearElement.textContent = new Date().getFullYear();