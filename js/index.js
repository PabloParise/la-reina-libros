const $toggleButton=document.getElementById("toggle-button")
const $NavList=document.getElementById("nav-list")

$toggleButton.addEventListener("click", handleMenu)

function handleMenu() { 
    $NavList.classList.toggle("active");
 }