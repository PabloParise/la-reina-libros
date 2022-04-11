/*-------------
 Custom JS File
 ------------*/

// Menu displaying on small devices
const $toggleButton = document.getElementById("menuToggle")
const $navList = document.getElementById("navbarList")

$toggleButton.addEventListener("click", handleMenu)

function handleMenu() { 
    $navList.classList.toggle("active");
 }

//Navbar style while scrolling
/*
$(function() { 
    $(window).scroll(function() {
        if ($(".navbarContainer").position().top > 186) {  //186 is the navbar absolute position from top of the window 
            $(".navbarLogo").addClass("navbarSticked");
        } else {
            $(".navbarLogo").removeClass("navbarSticked");
        }
    });
});*/

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


