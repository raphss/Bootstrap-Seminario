import './style.css';
import navbar from './navbar.js';
import createFooter from './footer.js';

function createDOMElements() {
  const container = document.createElement('div');
  container.className = 'container content-container px-5 py-3';

  const h1 = document.createElement('h1');
  h1.textContent = 'Sobre o Projeto';
  container.appendChild(h1);

  const paragraphs = [
    'Este projeto, intitulado "Seminário Bootstrap com HTML5", nasceu da colaboração dos alunos ' +
      'da Universidade Unileste. Nós, integrantes deste grupo, decidimos explorar a integração entre o ' +
      'Bootstrap e o HTML5, duas ferramentas fundamentais no desenvolvimento web contemporâneo.',
    'Nossa iniciativa visa proporcionar um entendimento aprofundado e habilidades para criar ' +
      'interfaces web dinâmicas e eficientes. Desde uma breve contextualização histórica até a ' +
      'implementação prática, abordamos os conceitos essenciais dessas tecnologias, incluindo o ' +
      'sistema de grid e diversos componentes.',
    'O projeto é uma expressão do nosso comprometimento com a aprendizagem e a inovação. ' +
      'Ao reunir nossos conhecimentos e experiências na Universidade Unileste, buscamos criar ' +
      'um ambiente de colaboração e crescimento mútuo.',
    'O projeto ainda está em desenvolvimento e aceita contribuições. Caso haja interesse em contribuir, ' +
      'sinta-se à vontade para entrar em contato conosco ou enviar ' +
      'suas contribuições diretamente para nosso repositório.',
    'Para mais informações sobre o projeto e seus participantes, convidamos você a explorar nosso ' +
      'repositório no GitHub ou fazer o download do projeto.',
  ];

  paragraphs.forEach((text) => {
    const p = document.createElement('p');
    p.textContent = text;
    container.appendChild(p);
  });

  const h2 = document.createElement('h2');
  h2.textContent = 'Universidade Unileste';
  container.appendChild(h2);

  const p = document.createElement('p');
  p.textContent =
    'A Universidade Unileste é uma instituição de ensino superior localizada na região do Vale do Aço, ' +
    'em Minas Gerais, Brasil. Oferece uma ampla variedade de cursos de graduação e pós-graduação, ' +
    'contribuindo para o desenvolvimento acadêmico e profissional de seus alunos.';
  container.appendChild(p);

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
