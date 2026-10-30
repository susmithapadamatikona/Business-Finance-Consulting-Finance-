document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  showInfo('Message delivery is not connected', 'Please call +91 98765 43210 or email info@finexora.com to reach the team. Your form has not been sent.');
});
document.querySelector('.faq-all').addEventListener('click', event => {
  const items = [...document.querySelectorAll('.quick-help details')];
  const expand = items.some(item => !item.open);
  items.forEach(item => { item.open = expand; });
  event.currentTarget.textContent = expand ? 'Close All FAQs \u2191' : 'View All FAQs \u2192';
});
