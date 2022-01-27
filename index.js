const menuIcon = document.querySelector('.menu-icon');
const cancelIcon = document.querySelector('.cancel-btn');
const mobileNav = document.getElementById('mobile-nav');
const logo = document.getElementById('logo');
const bodyTag = document.getElementsByTagName('body')[0];
const options = document.querySelectorAll('.mobile-nav-item');

const data = {
  featured_work: {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageUrl: 'assets/images/modal-image-1-desktop.svg',
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
  bodyTag.classList.add('scroll-disable');
}

function toggleMenuClose() {
  mobileNav.style.display = 'none';
  menuIcon.style.display = 'block';
  logo.style.display = 'block';
  bodyTag.classList.remove('scroll-disable');
}

options.forEach((listItem) => {
  listItem.addEventListener('click', toggleMenuClose);
});

menuIcon.addEventListener('click', toggleMenuOpen);
cancelIcon.addEventListener('click', toggleMenuClose);
const title = document.createElement('h1');

const techLists = document.createElement('ul');
const cancelButton = document.createElement('a');
const popupModal = document.createElement('div');
const modal = document.createElement('section');

title.classList.add('modal-title');
techLists.classList.add('modal-buttons');
cancelButton.classList.add('cancel-modal');
popupModal.classList.add('modal-content');
modal.classList.add('modal');

cancelButton.innerHTML = '<img class="cancel-icon" src="assets/images/icon-cancel.svg" alt="Menu cancel"/></a>';

const constructModal = (modalItem) => {
  if (modalItem in data) {
    const modalName = data[modalItem];
    title.textContent = modalName.title;
    const htmlGroup = `    
      <img class="modal-image" src=${modalName.imageUrl} alt="feature work">
      <div class ="wrapper-para">
        <p class="modal-desc">${modalName.description}</p>
        <div class="modal-buttons-nav">
          <a class="button btn btn-solid-short" href=${modalName.liveLink} target="_blank">See Live <i class="fas fa-external-link-alt"></i>
          </a>
          <a  class="button btn btn-solid-short" href=${modalName.linkSource} target="_blank"> See Source <i class="fab fa-github"></i></a></a>
        </div>
      </div>`;
    const newContainer = document.createElement('div');
    newContainer.classList.add('wrapper-group');
    newContainer.innerHTML = htmlGroup;

    for (let i = 0; i < modalName.technolgies.length; i += 1) {
      const li = document.createElement('li');
      li.classList.add('btn-gray-modal');
      li.appendChild(document.createTextNode(modalName.technolgies[i]));
      techLists.appendChild(li);
    }

    popupModal.appendChild(cancelButton);
    popupModal.appendChild(title);
    popupModal.appendChild(techLists);
    popupModal.appendChild(newContainer);

    modal.appendChild(popupModal);
    bodyTag.appendChild(modal);

    bodyTag.classList.toggle('blur');
    modal.style.display = 'flex';

    cancelButton.addEventListener('click', () => {
      modal.style.display = 'none';
      bodyTag.classList.remove('blur');
      newContainer.innerHTML = '';
      techLists.innerHTML = '';
    });

    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        bodyTag.classList.toggle('blur');
      }
    };
  }
};

const featuredWork = document.getElementById('featured_work');
const workOne = document.getElementById('work-1');
const workTwo = document.getElementById('work-2');
const workThree = document.getElementById('work-3');
const workFour = document.getElementById('work-4');
const workFive = document.getElementById('work-5');
const workSix = document.getElementById('work-6');

featuredWork.onclick = () => {
  constructModal('featured_work', 'block');
};
workOne.onclick = () => {
  constructModal('work_1', 'block');
};
workTwo.onclick = () => {
  constructModal('work_2', 'block');
};
workThree.onclick = () => {
  constructModal('work_3', 'block');
};
workFour.onclick = () => {
  constructModal('work_4, block');
};
workFive.onclick = () => {
  constructModal('work_5', 'block');
};
workSix.onclick = () => {
  constructModal('work_6', 'block');
};

const form = document.getElementById('portfolio-form');
const submitError = document.getElementById('submit-error');
const {
  email,
  userName,
  message,
} = form.elements;

const regRex = /^([a-z0-9_\-.]+)@([a-z0-9_\-.]+)\.([a-z]{2,5})$/;

function showSubmitError() {
  submitError.classList.toggle('submit-error-message');
  email.classList.toggle('border-red');
}

const emptyForm = () => {
  userName.value = '';
  email.value = '';
  message.value = '';
};

function submitForm() {
  form.submit();
  emptyForm();
  localStorage.removeItem('formData');
}

const fillLocalStorage = () => {
  let formData = {};
  formData = {
    userName: userName.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
};

const fillForm = () => {
  let storedData = {};
  try {
    storedData = JSON.parse(localStorage.getItem('formData'));
    userName.value = storedData.userName;
    email.value = storedData.email;
    message.value = storedData.message;
  } catch {
    userName.value = '';
    email.value = '';
    message.value = '';
  }
};

fillForm();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!regRex.test(email.value.trim())) {
    showSubmitError();
  } else {
    email.classList.add('border-normal');
    submitForm();
  }
});
userName.addEventListener('change', fillLocalStorage);
email.addEventListener('change', fillLocalStorage);
message.addEventListener('change', fillLocalStorage);