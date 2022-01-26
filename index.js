const menuIcon = document.querySelector('.menu-icon');
const cancelIcon = document.querySelector('.cancel-btn');
const mobileNav = document.getElementById('mobile-nav');
const logo = document.getElementById('logo');
const bodyTag = document.getElementsByTagName('body')[0];
const options = document.querySelectorAll('.mobile-nav-item');

const data = {
  recentWork: {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageUrl: 'assets/images/modal-image-1.svg',
    technolgies: ['CSS', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://mengiefen.github.io/personal-portfolio/#',
    linkSource: 'https://github.com/mengiefen/personal-portfolio',
  },
  work_1: {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageUrl: 'assets/images/modal-image-1.svg',
    technolgies: ['CSS', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://mengiefen.github.io/personal-portfolio/#',
    linkSource: 'https://github.com/mengiefen/personal-portfolio',
  },

  work_2: {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageUrl: 'assets/images/modal-image-1.svg',
    technolgies: ['CSS', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://mengiefen.github.io/personal-portfolio/#',
    linkSource: 'https://github.com/mengiefen/personal-portfolio',
  },

  work_3: {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageUrl: 'assets/images/modal-image-1.svg',
    technolgies: ['CSS', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://mengiefen.github.io/personal-portfolio/#',
    linkSource: 'https://github.com/mengiefen/personal-portfolio',
  },
  work_4: {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageUrl: 'assets/images/modal-image-1.svg',
    technolgies: ['CSS', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://mengiefen.github.io/personal-portfolio/#',
    linkSource: 'https://github.com/mengiefen/personal-portfolio',
  },

  work_5: {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageUrl: 'assets/images/modal-image-1.svg',
    technolgies: ['CSS', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://mengiefen.github.io/personal-portfolio/#',
    linkSource: 'https://github.com/mengiefen/personal-portfolio',
  },

  work_6: {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageUrl: 'assets/images/modal-image-1.svg',
    technolgies: ['CSS', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://mengiefen.github.io/personal-portfolio/#',
    linkSource: 'https://github.com/mengiefen/personal-portfolio',
  },
};

function toggleMenuOpen() {
  mobileNav.style.display = 'block';
  menuIcon.style.display = 'none';
  logo.style.display = 'none';
  bodyTag.classList.toggle('scroll-disable');
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

const constructModal = (modalItem) => {
  if (modalItem in data) {
    const modalName = data[modalItem];
    const title = document.createElement('h1');
    const desc = document.createElement('p');
    const image = document.createElement('img');
    const techLists = document.createElement('ul');
    const cancelButton = document.createElement('a');
    const buttonGroup = document.createElement('div');
    const sourceButton = document.createElement('a');
    const githubButton = document.createElement('a');
    title.classList.add('modal-title');
    title.textContent = modalName.title;
    image.classList.add('modal-image');
    image.src = modalName.imageUrl;
    desc.classList.add('modal-desc');
    desc.textContent = modalName.description;
    techLists.classList.add('modal-buttons');
    cancelButton.classList.add('cancel-modal');
    cancelButton.innerHTML = '<img class="cancel-icon" src="assets/images/icon-cancel.svg" alt="Menu cancel"/></a>';
    buttonGroup.classList.add('modal-buttons-nav');

    sourceButton.classList.add('button', 'btn', 'btn-solid-short');
    sourceButton.href = modalName.liveLink;

    githubButton.classList.add('button', 'btn', 'btn-solid-short');
    githubButton.href = modalName.linkSource;

    sourceButton.innerHTML = 'See Live <i class="fas fa-external-link-alt"></i>';
    githubButton.innerHTML = 'See Source <i class="fab fa-github"></i></a>';

    buttonGroup.appendChild(sourceButton);
    buttonGroup.appendChild(githubButton);

    for (let i = 0; i < modalName.technolgies.length; i += 1) {
      const li = document.createElement('li');
      li.classList.add('btn-gray-modal');
      li.appendChild(document.createTextNode(modalName.technolgies[i]));
      techLists.appendChild(li);
    }

    const popupModal = document.createElement('div');
    popupModal.classList.add('modal-content');
    popupModal.appendChild(cancelButton);
    popupModal.appendChild(title);
    popupModal.appendChild(techLists);
    popupModal.appendChild(image);
    popupModal.appendChild(desc);
    popupModal.appendChild(buttonGroup);

    const modal = document.createElement('section');
    modal.classList.add('modal');
    modal.appendChild(popupModal);
    bodyTag.appendChild(modal);
    modal.style.display = 'flex';

    cancelButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    };
  }
};

const featuredWork = document.getElementById('recent-work-item');

featuredWork.onclick = () => {
  constructModal('recentWork', 'block');
};