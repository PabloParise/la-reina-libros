/*-------------
 Custom JS File
 ------------*/

// Menu displaying on small devices
const $toggleButton = document.getElementById("menuToggle")
const $navbarList = document.getElementById("navbarList")

$toggleButton.addEventListener("click", handleMenu)

function handleMenu() { 
    $navbarList.classList.toggle("navbarActive");
 }

 
//Navbar style while scrolling
window.onscroll = function() {stickyStyle()};

const $navbarContainer = document.getElementById("navbarContainer");
const $navbarLogo = document.getElementById("navbarLogo");
const $smallLogo = document.getElementById("smallLogo");

let $navbarSticky = $navbarContainer.offsetTop;

function stickyStyle() {
  if (window.pageYOffset >= $navbarSticky) {
    $navbarLogo.classList.add("logoSticky");
    $smallLogo.classList.add("smallSticky");
    $navbarContainer.classList.add("navbarSticky");
  } else {
    $navbarLogo.classList.remove("logoSticky");
    $smallLogo.classList.remove("smallSticky");
    $navbarContainer.classList.remove("navbarSticky");
  }
}


