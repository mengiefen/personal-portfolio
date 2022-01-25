const menuIcon = document.querySelector('.menu-icon');
const cancelIcon = document.querySelector('.cancel-btn');
const mobileNav = document.getElementById('mobile-nav');
const logo = document.getElementById('logo');
const bodyTag = document.getElementsByTagName('body');
const options = document.querySelectorAll('.mobile-nav-item');

const data = {
  title: 'Multi Post Stories',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  imageUrl: 'assets/images/modal-image-1.svg',
  technolgies: ['CSS', 'Bootstrap', 'Ruby on Rails'],
  liveLink: 'https://mengiefen.github.io/personal-portfolio/#',
  linkSource: 'https://github.com/mengiefen/personal-portfolio'
};

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

const title = document.createElement('h1');
const desc = document.createElement('p');
const image = document.createElement('img');
const techLists = document.createElement('ul');
const cancelButton = document.createElement('a');
const buttonGroup = document.createElement('div');

title.classList.add('modal-title');
title.textContent = data.title;
image.classList.add('modal-image');
image.src = data.imageUrl;
desc.classList.add('modal-desc');
desc.textContent = data.description;
techLists.classList.add('modal-buttons');
cancelButton.classList.add('cancel-modal');
buttonGroup.classList.add('modal-buttons-nav');


//some changes required
const sourceButton = document.createElement('a');
sourceButton.classList.add('button');
sourceButton.href = data.liveLink;
const githubButton = document.createElement('a');
githubButton.href = data.linkSource;
sourceButton.classList.add('button');
sourceButton.innerHTML = 'See Live <i class="fas fa-external-link-alt"></i>';
githubButton.innerHTML = 'See Source <i class="fab fa-github"></i></a>';

buttonGroup.appendChild(sourceButton);
buttonGroup.appendChild(githubButton);

for (let i = 0; i < data.technolgies.length; i += 1) {
  const li = document.createElement('li');
  li.classList.add('btn-gray-modal');
  li.appendChild(document.createTextNode(data.technolgies[i]));
  techLists.appendChild(li);
}

const popupModal = document.createElement('div');
popupModal.appendChild(cancelButton);
popupModal.appendChild(title);
popupModal.appendChild(techLists);
popupModal.appendChild(image);
popupModal.appendChild(desc);
popupModal.appendChild(buttonGroup);

popupModal.classList.add('modal-content');
const modal = document.createElement('section');
modal.classList.add('modal');

modal.appendChild(popupModal);

bodyTag[0].appendChild(modal);