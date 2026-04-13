var btn = document.getElementById('hamburger');
var menu = document.getElementById('mobileMenu');
var overlay = document.getElementById('menuOverlay');

function toggleMenu() {
  btn.classList.toggle('open');
  menu.classList.toggle('open');
  overlay.classList.toggle('open');
}

btn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);