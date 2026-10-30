// Upgrade older header buttons before attaching the generic information dialogs.
document.querySelectorAll('.site-header .header-login, .site-header [data-title="Login"]').forEach(control => {
  const link = document.createElement('a');
  link.className = 'header-login';
  link.href = 'login.html';
  link.textContent = 'Login';
  control.replaceWith(link);
});

const dialog = document.querySelector('#info-dialog');
function showInfo(title, message) {
  document.querySelector('#dialog-title').textContent = title;
  document.querySelector('#dialog-message').textContent = message;
  dialog.showModal();
}
document.querySelectorAll('[data-title]').forEach(button => {
  button.addEventListener('click', () => showInfo(button.dataset.title, button.dataset.message));
});
document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
document.querySelectorAll('.subscribe').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    showInfo('Thanks for subscribing', 'Your email has been accepted for this demo. No mailing list service is connected.');
    form.reset();
  });
});
document.querySelector('#site-search').addEventListener('keydown', event => {
  if (event.key !== 'Enter') return;
  const query = event.target.value.trim().toLowerCase();
  if (!query) return;
  const target = [...document.querySelectorAll('main h2, main h3')].find(node => node.textContent.toLowerCase().includes(query));
  if (target) {
    target.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center'});
  } else {
    showInfo('Search', 'No matching section was found. Try financial, services, business or insights.');
  }
});
