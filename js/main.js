// Typewriter
const text = 'Juntos hacemos la diferencia';
const el = document.getElementById('typewriter');
let i = 0;
function type() {
  if (i < text.length) {
    el.textContent += text[i++];
    setTimeout(type, 70);
  }
}
type();

// FAQ acordeón
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('nav-overlay');
if (hamburger) {
  function cerrarMenu() {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
    if (overlay) overlay.classList.toggle('open');
    document.body.classList.toggle('menu-open', isOpen);
  });
  if (overlay) overlay.addEventListener('click', cerrarMenu);
  navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', cerrarMenu));
}
