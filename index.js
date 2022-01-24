const mobileNav = document.getElementById('mobile-nav');
const menuIcon = document.getElementById('menu-icon');
const logo = document.getElementById('logo');
const bodyTag = document.getElementsByTagName('body');

function toggleMenuOpen() {
  mobileNav.style.display = 'block';
  menuIcon.style.display = 'none';
  logo.style.display = 'none';
  bodyTag[0].classList.toggle('scroll-disable');
}

function toggleMenuClose() {
  mobileNav.style.display = 'none';
  menuIcon.style.display = 'block';
  logo.style.display = 'block';
  bodyTag[0].classList.toggle('scroll-disable');
}