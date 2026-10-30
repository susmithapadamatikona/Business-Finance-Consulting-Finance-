const views = [...document.querySelectorAll('.dashboard-view')];
const navigation = [...document.querySelectorAll('.sidebar nav a')];
const accountIdentity = document.querySelector('#account-identity');
let loginIdentity = '';
try { loginIdentity = sessionStorage.getItem('stackly.loginIdentity') || ''; } catch {}
if (loginIdentity) {
  accountIdentity.textContent = loginIdentity;
  accountIdentity.hidden = false;
}

function showView(moveFocus = false) {
  const requested = location.hash.slice(1) || 'overview';
  const active = views.find(view => view.id === requested) || views[0];
  views.forEach(view => { view.hidden = view !== active; });
  navigation.forEach(link => {
    if (link.hash === `#${active.id}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  const label = navigation.find(link => link.hash === `#${active.id}`).textContent;
  document.title = `${label} | Stackly Dashboard`;
  if (moveFocus) {
    const heading = active.querySelector('h1');
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
}

window.addEventListener('hashchange', () => showView(true));
showView();
