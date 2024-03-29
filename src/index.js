import './style.css';
import * as bootstrap from 'bootstrap';
import createFooter from './footer.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
} else {
  console.log('Looks like we are in production mode!');
}

function removeActiveClass(navLinks) {
  for (let j = 0; j < navLinks.length; j++) {
    navLinks[j].classList.remove('active');
  }
}

function component() {
  const navLinks = document.getElementsByClassName('nav-link');
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
      removeActiveClass(navLinks);
      this.classList.add('active');
    });
  }

  const footer = createFooter();

  return footer;
}

document.body.appendChild(component());
