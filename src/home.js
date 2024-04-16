import './style.css';
import navbar from './navbar.js';
import createFooter from './footer.js';

function createDOMElements() {
  const container = document.createElement('div');
  container.className = 'container content-container px-5 py-3';

  const h1 = document.createElement('h1');
  h1.textContent = 'Página Inicial';
  container.appendChild(h1);

  const p = document.createElement('p');
  p.textContent =
    'Seguem abaixo algumas informações relacionadas ao HTML5 e ao Bootstrap:';
  container.appendChild(p);

  const h2 = document.createElement('h2');
  h2.textContent = 'Introdução HTML5';
  container.appendChild(h2);

  const p2 = document.createElement('p');
  p2.textContent =
    'O HTML5 é a quinta versão da linguagem de marcação HyperText Markup Language, ' +
    'usada para estruturar e apresentar conteúdo na web. Ele introduziu novos elementos, ' +
    'como <header>, <footer>, <nav>, <article>, <section>, <canvas> e <video>, para melhorar ' +
    'a semântica e funcionalidades da web. Além disso, trouxe suporte nativo para áudio e vídeo, ' +
    'gráficos vetoriais com o elemento <svg>, e APIs para interação avançada com o usuário, como ' +
    'a API de Geolocalização e a API de Armazenamento Local.';
  container.appendChild(p2);

  const imgDiv = document.createElement('div');
  imgDiv.className = 'div-images';

  const imgH4 = document.createElement('h4');
  imgH4.textContent = 'Estrutura Básica do HTML5:';
  imgDiv.appendChild(imgH4);

  const img = document.createElement('img');
  img.src = './images/example1.png';
  img.className = 'example-images img-fluid py-2';
  imgDiv.appendChild(img);

  container.appendChild(imgDiv);

  const bootstrapH2 = document.createElement('h2');
  bootstrapH2.textContent = 'Introdução ao Bootstrap';
  container.appendChild(bootstrapH2);

  const bootstrapH4 = document.createElement('h4');
  bootstrapH4.textContent = 'O que é Bootstrap?';
  container.appendChild(bootstrapH4);

  const bootstrapP = document.createElement('p');
  bootstrapP.textContent =
    'Bootstrap é um framework front-end que facilita o desenvolvimento web responsivo e rápido. ' +
    'Ele fornece uma coleção de estilos CSS e componentes JavaScript pré-projetados que podem ser ' +
    'facilmente integrados aos projetos.';
  container.appendChild(bootstrapP);

  const advantagesH4 = document.createElement('h4');
  advantagesH4.textContent = 'Vantagens de usar o Bootstrap:';
  container.appendChild(advantagesH4);

  const ul = document.createElement('ul');

  const advantages = [
    'Grid System responsivo para layout de página consistente em diferentes dispositivos;',
    'Componentes prontos para uso, como navegação, botões, ícones, carrossel (carousel) e etc;',
    'Personalização fácil com variáveis Sass ou CSS;',
    'Suporte a navegadores modernos e dispositivos móveis.',
  ];

  for (let advantage of advantages) {
    const li = document.createElement('li');
    li.textContent = advantage;
    ul.appendChild(li);
  }

  container.appendChild(ul);

  const gridH3 = document.createElement('h3');
  gridH3.textContent = 'Grid System no Bootstrap';
  gridH3.style.marginTop = '3vh';
  container.appendChild(gridH3);

  const gridP = document.createElement('p');
  gridP.textContent =
    'O Grid System do Bootstrap é baseado em um sistema de 12 colunas, que permite criar layouts ' +
    'flexíveis e responsivos. Ele é composto por classes CSS que definem o tamanho das colunas em ' +
    'diferentes tamanhos de tela.';
  container.appendChild(gridP);

  const gridImgDiv = document.createElement('div');
  gridImgDiv.className = 'div-images';

  const gridImg = document.createElement('img');
  gridImg.src = './images/example2.png';
  gridImg.className = 'example-images img-fluid py-0';
  gridImgDiv.appendChild(gridImg);

  container.appendChild(gridImgDiv);

  const componentsH3 = document.createElement('h3');
  componentsH3.textContent = 'Componentes do Bootstrap';
  container.appendChild(componentsH3);

  const componentsUl = document.createElement('ul');
  componentsUl.className = 'py-2';

  const components = [
    {
      title: 'Navegação (Navbar):',
      text:
        'O Bootstrap oferece um componente de barra de navegação responsiva e altamente ' +
        'personalizável, que pode ser facilmente integrado ao topo de sua página.',
      imgSrc: './images/example3.png',
    },
    {
      title: 'Botões e Ícones:',
      text:
        'Botões e ícones são componentes comuns do Bootstrap que vêm em uma variedade de estilos ' +
        'e tamanhos pré-definidos.',
      imgSrc: './images/example4.png',
    },
    {
      title: 'Carrosséis (Carousels):',
      text:
        'Os carrosséis do Bootstrap permitem criar slideshows de imagens ou conteúdo que podem ser ' +
        'navegados manualmente ou automaticamente.',
      imgSrc: './images/example5.png',
    },
  ];

  for (let component of components) {
    const li = document.createElement('li');

    const h5 = document.createElement('h5');
    h5.textContent = component.title;
    li.appendChild(h5);

    const p = document.createElement('p');
    p.textContent = component.text;
    li.appendChild(p);

    const imgDiv = document.createElement('div');
    imgDiv.className = 'div-images';

    const img = document.createElement('img');
    img.src = component.imgSrc;
    img.className = 'example-images img-fluid py-0';
    imgDiv.appendChild(img);

    li.appendChild(imgDiv);

    componentsUl.appendChild(li);
  }

  container.appendChild(componentsUl);

  const responsiveH3 = document.createElement('h3');
  responsiveH3.textContent = 'Responsividade no Bootstrap';
  container.appendChild(responsiveH3);

  const responsiveP = document.createElement('p');
  responsiveP.textContent =
    'Com o Bootstrap, você pode criar layouts responsivos facilmente usando o Grid System e classes ' +
    'de utilitário para ocultar, mostrar ou reorganizar elementos com base no tamanho da tela.';
  container.appendChild(responsiveP);

  const responsiveImgDiv = document.createElement('div');
  responsiveImgDiv.className = 'div-images';

  const responsiveImg = document.createElement('img');
  responsiveImg.src = './images/example6.png';
  responsiveImg.className = 'example-images img-fluid py-0';
  responsiveImgDiv.appendChild(responsiveImg);

  container.appendChild(responsiveImgDiv);

  const docP = document.createElement('p');
  docP.className = 'py-2';
  docP.textContent =
    'Para saber mais sobre o HTML5 e o Bootstrap, consulte a documentação oficial em: ';

  const html5Link = document.createElement('a');
  html5Link.href = 'https://developer.mozilla.org/pt-BR/docs/Web/HTML';
  html5Link.target = '_blank';
  html5Link.textContent = 'HTML5';
  docP.appendChild(html5Link);

  docP.appendChild(document.createTextNode(' e '));

  const bootstrapLink = document.createElement('a');
  bootstrapLink.href =
    'https://getbootstrap.com/docs/5.0/getting-started/introduction/';
  bootstrapLink.target = '_blank';
  bootstrapLink.textContent = 'Bootstrap';
  docP.appendChild(bootstrapLink);

  container.appendChild(docP);

  const downloadLink = document.createElement('a');
  downloadLink.href =
    'https://github.com/raphss/repo/raw/main/Seminario Bootstrap.pdf';
  downloadLink.download = '';
  downloadLink.className = 'btn-links';

  const downloadDiv = document.createElement('div');
  downloadDiv.className = 'div-button';

  const downloadButton = document.createElement('button');
  downloadButton.className = 'btn btn-light my-3';
  downloadButton.textContent = 'Baixar Documento';
  downloadDiv.appendChild(downloadButton);

  downloadLink.appendChild(downloadDiv);

  container.appendChild(downloadLink);

  return container;
}

function component() {
  const nav = navbar();
  const container = createDOMElements();
  const footer = createFooter();

  return {
    nav,
    container,
    footer,
  };
}

const elements = component();
document.body.prepend(elements.nav);
document.body.appendChild(elements.container);
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
  } else if (navLinks[i].id === 'contact-page') {
    navLinks[i].addEventListener('click', function () {
      window.location.href = './contact.html';
    });
  }
}

const navLinkHome = document.getElementById('home-page');
navLinkHome.classList.add('active');

function removeActiveClass(navLinks) {
  for (let j = 0; j < navLinks.length; j++) {
    navLinks[j].classList.remove('active');
  }
}
