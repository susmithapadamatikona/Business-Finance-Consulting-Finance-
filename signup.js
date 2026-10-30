const form = document.querySelector('#signup-form');
const password = document.querySelector('#password');
const confirmation = document.querySelector('#confirm-password');
document.querySelectorAll('.password-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const input = document.getElementById(button.dataset.target);
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    button.setAttribute('aria-pressed', String(show));
    button.setAttribute('aria-label', `${show ? 'Hide' : 'Show'} ${input === password ? 'password' : 'confirm password'}`);
  });
});
function checkPasswords() {
  confirmation.setCustomValidity(confirmation.value && confirmation.value !== password.value ? 'Passwords do not match.' : '');
}
password.addEventListener('input', checkPasswords);
confirmation.addEventListener('input', checkPasswords);
form.addEventListener('submit', event => {
  event.preventDefault();
  checkPasswords();
  if (!form.reportValidity()) return;
  const status = document.querySelector('#form-status');
  status.textContent = 'Account registration is not connected yet. No account has been created or personal details saved.';
  status.hidden = false;
});
const info = document.querySelector('#account-info');
document.querySelectorAll('[data-info]').forEach(button => {
  button.addEventListener('click', () => {
    const title = button.dataset.info;
    document.querySelector('#info-title').textContent = title;
    document.querySelector('#info-message').textContent = title === 'Sign In' ? 'Sign in is not connected yet.' : `${title} content has not been provided yet.`;
    info.showModal();
  });
});
document.querySelector('#close-info').addEventListener('click', () => info.close());
