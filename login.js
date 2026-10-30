const password = document.querySelector('#password');
const toggle = document.querySelector('#password-toggle');
toggle.addEventListener('click', () => {
  const show = password.type === 'password';
  password.type = show ? 'text' : 'password';
  toggle.setAttribute('aria-pressed', String(show));
  toggle.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
});
document.querySelector('#login-form').addEventListener('submit', event => {
  event.preventDefault();
  if (!event.target.reportValidity()) return;
  sessionStorage.setItem('stackly.loginIdentity', document.querySelector('#identity').value.trim());
  window.location.assign('dashboard.html');
});
const info = document.querySelector('#login-info');
document.querySelectorAll('[data-action]').forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    document.querySelector('#info-title').textContent = action;
    document.querySelector('#info-message').textContent = action === 'Forgot password?' ? 'Password recovery is not connected yet.' : `${action} sign in is not connected yet.`;
    info.showModal();
  });
});
document.querySelector('#close-info').addEventListener('click', () => info.close());
