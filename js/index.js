/*-------------
 Custom JS File
 ------------*/

//------Menu toggle for small devices------

const $menuToggle = document.getElementById("menuToggle");
const $navbarList = document.getElementById("navbarList");

$menuToggle.addEventListener("click", handleMenu);

function handleMenu() { 
    $navbarList.classList.toggle("active");
 };

//------Dropdown toggle for small devices------

const $dropdownToggle = document.getElementById("dropdown");
const $dropdownLinks = document.getElementById("dropdownLinks");
const $navbarSmall = document.getElementById("navbarSmall")
const $navbarCss = window.getComputedStyle($navbarSmall, null);

$dropdownToggle.addEventListener("click", handleDropdown);

function handleDropdown() {
  if ($navbarCss.getPropertyValue("display") == "flex") {
    $dropdownLinks.classList.toggle("active");
  }
};
 
//------Navbar style while scrolling------

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
};

//------Answer display for FAQ------

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
};

//------Contact form validation------

function handleVal() {
  let $fSelect = document.forms["form"]["subject"].value;
  let $fName = document.forms["form"]["name"].value;
  let $testRegex = /[0-9]/;
  if($fSelect === "placeholder") {
    alert("Seleccione un Asunto");
    return false;
  } else if($testRegex.test($fName)) {
    alert("El nombre no es válido");
    return false;
  } else {
    return confirm("¿Desea enviar?")
  }
};

//------Not available elements alert------

function naElem() {
    alert("Elemento no disponible");
  };

//------Slider infinite effect------

const $btnRight = document.getElementById("btnRight");
const $btnLeft = document.getElementById("btnLeft");
const $delay = 4000; //ms

//Small device slider
const $smallSlider = document.getElementById("smallSlider");
let $smallImage = document.querySelectorAll(".small");
let $smallImageLast = $smallImage[$smallImage.length-1];

$smallSlider.insertAdjacentElement("afterbegin", $smallImageLast); //Place the last slider image in the beggining of the slider (to get the infinite slider effect)

function smallRight() {
  let $smallImageFirst = document.querySelectorAll(".small")[0];
  $smallSlider.style.marginLeft = "-200%";
  $smallSlider.style.transition = "all 0.5s ease-out";
  setTimeout(function() {
    $smallSlider.style.transition = "none";
    $smallSlider.insertAdjacentElement("beforeend", $smallImageFirst); 
    $smallSlider.style.marginLeft = "-100%";
  }, 500);
};

function smallLeft() {
  let $smallImage = document.querySelectorAll(".small");
  let $smallImageLast = $smallImage[$smallImage.length-1];
  $smallSlider.style.marginLeft = "0%";
  $smallSlider.style.transition = "all 0.5s";
  setTimeout(function() {
    $smallSlider.style.transition = "none";
    $smallSlider.insertAdjacentElement("afterbegin", $smallImageLast); 
    $smallSlider.style.marginLeft = "-100%";
  }, 500);
};

let $autoSmall = setInterval(smallRight, $delay);
const $restartSmall = function() {
  clearInterval($autoSmall);
  $autoSmall = setInterval(smallRight, $delay);
};

$btnRight.addEventListener("click", function() {
  smallRight();
  $restartSmall();
});

$btnLeft.addEventListener("click", function() {
  smallLeft();
  $restartSmall();
});

//Large device slider

const $largeSlider = document.getElementById("largeSlider");
let $largeImage = document.querySelectorAll(".large");
let $largeImageLast = $largeImage[$largeImage.length-1];

$largeSlider.insertAdjacentElement("afterbegin", $largeImageLast); //Place the last slider image in the beggining of the slider (to get the infinite slider effect)

function largeRight() {
  let $largeImageFirst = document.querySelectorAll(".large")[0];
  $largeSlider.style.marginLeft = "-200%";
  $largeSlider.style.transition = "all 0.5s ease-out";
  setTimeout(function() {
    $largeSlider.style.transition = "none";
    $largeSlider.insertAdjacentElement("beforeend", $largeImageFirst); 
    $largeSlider.style.marginLeft = "-100%";
  }, 500);
};

function largeLeft() {
  let $largeImage = document.querySelectorAll(".large");
  let $largeImageLast = $largeImage[$largeImage.length-1];
  $largeSlider.style.marginLeft = "0%";
  $largeSlider.style.transition = "all 0.5s";
  setTimeout(function() {
    $largeSlider.style.transition = "none";
    $largeSlider.insertAdjacentElement("afterbegin", $largeImageLast); 
    $largeSlider.style.marginLeft = "-100%";
  }, 500);
};

let $autoLarge = setInterval(largeRight, $delay);
const $restartLarge = function() {
  clearInterval($autoLarge);
  $autoLarge = setInterval(largeRight, $delay);
};

$btnRight.addEventListener("click", function() {
  largeRight();
  $restartLarge();
});

$btnLeft.addEventListener("click", function() {
  largeLeft();
  $restartLarge();
});
