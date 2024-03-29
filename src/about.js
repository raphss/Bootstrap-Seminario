import './style.css';
import navbar from './navbar.js';
import createFooter from './footer.js';

function component() {
  const nav = navbar();
  const footer = createFooter();

  return {
    nav,
    footer,
  };
}

const elements = component();
document.body.prepend(elements.nav);
document.body.appendChild(elements.footer);

const navLinks = document.getElementsByClassName('nav-link');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    removeActiveClass(navLinks);
    this.classList.add('active');
  });
  if (navLinks[i].id === 'sb-page') {
    navLinks[i].addEventListener('click', function () {
      window.location.href = './index.html';
    });
  } else if (navLinks[i].id === 'home-page') {
    navLinks[i].addEventListener('click', function () {
      window.location.href = './home.html';
    });
  } else if (navLinks[i].id === 'contact-page') {
    navLinks[i].addEventListener('click', function () {
      window.location.href = './contact.html';
    });
  }
}

const navLinkAbout = document.getElementById('about-page');
navLinkAbout.classList.add('active');

function removeActiveClass(navLinks) {
  for (let j = 0; j < navLinks.length; j++) {
    navLinks[j].classList.remove('active');
  }
}
