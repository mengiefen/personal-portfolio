const menuIcon = document.querySelector('.menu-icon');
const cancelIcon = document.querySelector('.cancel-btn');
const mobileNav = document.getElementById('mobile-nav');
const logo = document.getElementById('logo');
const bodyTag = document.getElementsByTagName('body');
const options = document.querySelectorAll('.mobile-nav-item');

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

options.forEach((listItem) => {
  listItem.addEventListener('click', toggleMenuClose);
});

menuIcon.addEventListener('click', toggleMenuOpen);
cancelIcon.addEventListener('click', toggleMenuClose);