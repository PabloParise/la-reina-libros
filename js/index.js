/*-------------
 Custom JS File
 ------------*/

// Menu toggle for small devices

const $menuToggle = document.getElementById("menuToggle")
const $navbarList = document.getElementById("navbarList")

$menuToggle.addEventListener("click", handleMenu)

function handleMenu() { 
    $navbarList.classList.toggle("active");
 }

// Dropdown toggle for small devices

const $dropdownToggle = document.getElementById("dropdown");
const $dropdownLinks = document.getElementById("dropdownLinks");
const $navbarSmall = document.getElementById("navbarSmall")
const $navbarCss = window.getComputedStyle($navbarSmall, null);

$dropdownToggle.addEventListener("click", handleDropdown);

function handleDropdown() {
  if ($navbarCss.getPropertyValue("display") == "flex") {
    $dropdownLinks.classList.toggle("active");
  }
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


//Answer display for FAQ

let $accordionArr = document.getElementsByClassName("accordion");

for (let i = 0; i < $accordionArr.length; i++) {
  $accordionArr[i].addEventListener("click", function() {
    this.classList.toggle("activeAccordion");
    let $answer = this.nextElementSibling;
    if ($answer.style.display === "block") {
      $answer.style.display = "none";
    } else {
      $answer.style.display = "block";
    }
  });
}

