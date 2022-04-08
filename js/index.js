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

const $navbarLogo = document.getElementById("navbarLogo")
const $navbarContainer = document.getElementById("navbarContainer")
const $navbarPosition = $navbarContainer.getBoundingClientRect() //method that provides the element's position and its relative position to the viewport.

function navbarTop () {
    if ($navbarPosition.top === 0) {
        $navbarLogo.classList.add("navbarSticked")
    };
}

document.addEventListener('scroll', navbarTop)