import './style.css';
import navbar from './navbar.js';
import createFooter from './footer.js';

function createDOMElements() {
  const container = document.createElement('div');
  container.className = 'container content-container px-5 py-3';

  const h1 = document.createElement('h1');
  h1.textContent = 'Seminário Bootstrap com HTML5';
  container.appendChild(h1);

  const p = document.createElement('p');
  p.textContent =
    'O objetivo do projeto é explorar a integração entre o Bootstrap e o HTML5, ' +
    'dois elementos cruciais no desenvolvimento web contemporâneo. Desde uma breve ' +
    'contextualização histórica até a implementação prática, abordaremos os conceitos ' +
    'fundamentais dessas tecnologias, incluindo o sistema de grid, componentes diversos e ' +
    'a importância da responsividade. Através de exemplos práticos, visamos proporcionar um ' +
    'entendimento aprofundado e habilidades para criar interfaces web dinâmicas e eficientes.';
  container.appendChild(p);

  const h2 = document.createElement('h2');
  h2.textContent = 'Acesso ao projeto';
  container.appendChild(h2);

  const p2 = document.createElement('p');
  p2.textContent = 'Visite o repositório ou faça o download do projeto abaixo:';
  container.appendChild(p2);

  const a = document.createElement('a');
  a.href =
    'https://github.com/raphss/Bootstrap-Seminario/archive/refs/heads/main.zip';
  a.download = '';
  a.className = 'btn-links';

  const div = document.createElement('div');
  a.appendChild(div);

  const button = document.createElement('button');
  button.className = 'btn btn-light my-3';
  button.textContent = 'Download';
  div.appendChild(button);

  container.appendChild(a);

  const imgDiv = document.createElement('div');
  imgDiv.className = 'd-flex my-3 img-div';

  const imgLink = document.createElement('a');
  imgLink.href = 'https://github.com/raphss/Bootstrap-Seminario';
  imgLink.target = '_blank';

  const img = document.createElement('img');
  img.src = './images/github.png';
  img.alt = 'repositório-git';
  img.className = 'img-fluid';
  imgLink.appendChild(img);

  imgDiv.appendChild(imgLink);

  const githubDiv = document.createElement('div');
  githubDiv.className = 'px-4 github-div';

  const githubH2 = document.createElement('h2');
  githubH2.textContent = 'Repositório GitHub';
  githubDiv.appendChild(githubH2);

  const githubP = document.createElement('p');
  githubP.style.textAlign = 'initial';
  githubP.textContent =
    'Clique na imagem para ir ao repositório GitHub ou acesse em: ';

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/raphss/Bootstrap-Seminario/';
  githubLink.target = '_blank';
  githubLink.textContent = 'https://github.com/raphss/Bootstrap-Seminario/';
  githubP.appendChild(githubLink);

  githubDiv.appendChild(githubP);
  imgDiv.appendChild(githubDiv);

  container.appendChild(imgDiv);

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
  if (navLinks[i].id === 'home-page') {
    navLinks[i].addEventListener('click', function () {
      window.location.href = './home.html';
    });
  } else if (navLinks[i].id === 'about-page') {
    navLinks[i].addEventListener('click', function () {
      window.location.href = './about.html';
    });
  } else if (navLinks[i].id === 'contact-page') {
    navLinks[i].addEventListener('click', function () {
      window.location.href = './contact.html';
    });
  }
}

const navLinkIndex = document.getElementById('sb-page');
navLinkIndex.classList.add('active');

function removeActiveClass(navLinks) {
  for (let j = 0; j < navLinks.length; j++) {
    navLinks[j].classList.remove('active');
  }
}
