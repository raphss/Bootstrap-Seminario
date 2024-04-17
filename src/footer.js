const footer = document.createElement('div');
footer.classList.add('footer');

const copy = document.createElement('p');
copy.innerHTML = `Copyright &copy; ${new Date().getFullYear()} Seminário Bootstrap`;

footer.appendChild(copy);

function createFooter() {
  return footer;
}

export default createFooter;
