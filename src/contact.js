import './style.css';
import navbar from './navbar.js';
import createFooter from './footer.js';

function createDOMElements() {
  const container = document.createElement('div');
  container.className = 'container content-container px-5 py-3';

  const h1 = document.createElement('h1');
  h1.textContent = 'Contato';
  container.appendChild(h1);

  const p1 = document.createElement('p');
  p1.textContent =
    'Para mais informações sobre o projeto ou caso deseje contribuir, entre em contato com algum dos integrantes abaixo:';
  container.appendChild(p1);

  const ul = document.createElement('ul');

  const contacts = [
    { name: 'Raphael Vilete', email: 'raphael.coelho@a.unileste.edu.br' },
    { name: 'Samuel dos Passos', email: 'samuel.passos@a.unileste.edu.br' },
    { name: 'Antônio Erick', email: 'antonio.erick@a.unileste.edu.br' },
  ];

  contacts.forEach((contact) => {
    const li = document.createElement('li');

    li.textContent = `${contact.name} - `;

    const a = document.createElement('a');
    a.href = `mailto:${contact.email}`;
    a.textContent = contact.email;

    li.appendChild(a);
    ul.appendChild(li);
  });

  container.appendChild(ul);

  const p2 = document.createElement('p');
  p2.textContent =
    'Sinta-se à vontade para nos contatar se tiver alguma dúvida ou sugestão!';
  container.appendChild(p2);

  return container;
}

function component() {
  const nav = navbar();
  const content = createDOMElements();
  const footer = createFooter();

  return {
    nav,
    content,
    footer,
  };
}

const elements = component();
document.body.prepend(elements.nav);
document.body.appendChild(elements.content);
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
  } else if (navLinks[i].id === 'about-page') {
    navLinks[i].addEventListener('click', function () {
      window.location.href = './about.html';
    });
  } else if (navLinks[i].id === 'home-page') {
    navLinks[i].addEventListener('click', function () {
      window.location.href = './home.html';
    });
  }
}

const navLinkContact = document.getElementById('contact-page');
navLinkContact.classList.add('active');

function removeActiveClass(navLinks) {
  for (let j = 0; j < navLinks.length; j++) {
    navLinks[j].classList.remove('active');
  }
}
