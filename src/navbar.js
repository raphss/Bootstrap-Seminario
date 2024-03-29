import 'jquery';
import 'popper.js';
import 'bootstrap';

function removeActiveClass(navLinks) {
  for (let j = 0; j < navLinks.length; j++) {
    navLinks[j].classList.remove('active');
  }
}

function navbar() {
  const nav = document.createElement('nav');
  const divContainer = document.createElement('div');
  const button = document.createElement('button');
  const span = document.createElement('span');
  const divCollapse = document.createElement('div');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const a1 = document.createElement('a');
  const img = document.createElement('img');
  const li2 = document.createElement('li');
  const a2 = document.createElement('a');
  const li3 = document.createElement('li');
  const a3 = document.createElement('a');
  const li4 = document.createElement('li');
  const a4 = document.createElement('a');

  nav.setAttribute('class', 'navbar navbar-expand-sm navbar-dark p-3');
  divContainer.setAttribute('class', 'container navbar-container');
  button.setAttribute('class', 'navbar-toggler my-2');
  button.setAttribute('type', 'button');
  button.setAttribute('data-bs-toggle', 'collapse');
  button.setAttribute('data-bs-target', '#navbarNav');
  button.setAttribute('aria-controls', 'navbarNav');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Toggle navigation');
  span.setAttribute('class', 'navbar-toggler-icon');
  divCollapse.setAttribute('class', 'collapse navbar-collapse');
  divCollapse.setAttribute('id', 'navbarNav');
  ul.setAttribute('class', 'navbar-nav');
  li1.setAttribute('class', 'nav-item');
  a1.setAttribute('href', '#');
  a1.setAttribute('class', 'nav-link nav-link-brand');
  a1.setAttribute('id', 'sb-page');
  img.setAttribute('src', './images/bootstrap.png');
  img.setAttribute('alt', 'bootstrap-logo');
  img.setAttribute('width', '25');
  img.setAttribute('height', '25');
  img.setAttribute('class', 'align-top mx-2');
  li2.setAttribute('class', 'nav-item');
  a2.setAttribute('href', '#');
  a2.setAttribute('class', 'nav-link');
  a2.setAttribute('id', 'home-page');
  a2.textContent = 'Página inicial';
  li3.setAttribute('class', 'nav-item');
  a3.setAttribute('href', '#');
  a3.setAttribute('class', 'nav-link');
  a3.setAttribute('id', 'about-page');
  a3.textContent = 'Sobre o projeto';
  li4.setAttribute('class', 'nav-item');
  a4.setAttribute('href', '#');
  a4.setAttribute('class', 'nav-link');
  a4.setAttribute('id', 'contact-page');
  a4.textContent = 'Contato';

  a1.insertBefore(img, a1.firstChild);
  const textNode = document.createTextNode('Seminário Bootstrap');
  a1.appendChild(textNode);

  li1.appendChild(a1);
  li2.appendChild(a2);
  li3.appendChild(a3);
  li4.appendChild(a4);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  divCollapse.appendChild(ul);
  button.appendChild(span);
  divContainer.appendChild(button);
  divContainer.appendChild(divCollapse);
  nav.appendChild(divContainer);

  return nav;
}

export default navbar;
