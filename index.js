let mobileNav = document.getElementById("mobile-nav");
let menuIcon = document.getElementById("menu-icon");
let logo = document.getElementById("logo");
let bodyTag = document.getElementsByTagName("body");

function toggleMenuOpen(){
  mobileNav.style.display="block";
  menuIcon.style.display="none";
  logo.style.display="none";
  bodyTag[0].classList.toggle("scrollDisable");
}

function toggleMenuClose(){
  mobileNav.style.display="none";
  menuIcon.style.display="block";
  logo.style.display="block";
  bodyTag[0].classList.toggle("scrollDisable");
}
