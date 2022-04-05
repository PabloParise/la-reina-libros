const $toggleButton=document.getElementById("menuToggle")
const $NavList=document.getElementById("navbarList")

$toggleButton.addEventListener("click", handleMenu)

function handleMenu() { 
    $NavList.classList.toggle("active");
 }