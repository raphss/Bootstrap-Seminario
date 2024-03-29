import './style.css';
import * as bootstrap from 'bootstrap';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
} else {
  console.log('Looks like we are in production mode!');
}

function component() {
  const element = document.createElement('div');

  return element;
}

document.body.appendChild(component());
