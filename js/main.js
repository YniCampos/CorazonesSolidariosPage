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
