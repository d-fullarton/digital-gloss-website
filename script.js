// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Cursor-tracked shine on the hero and service cards
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  document.querySelectorAll('[data-shine]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mx', `${x}%`);
      el.style.setProperty('--my', `${y}%`);
    });
  });
}

// Quote modal
const quoteOverlay = document.getElementById('quoteOverlay');
const quoteClose = document.getElementById('quoteClose');
const quoteForm = document.getElementById('quoteForm');
let quoteTrigger = null;

function openQuoteModal(trigger) {
  quoteTrigger = trigger || null;
  quoteOverlay.hidden = false;
  document.body.style.overflow = 'hidden';
  const firstField = document.getElementById('qFirstName');
  if (firstField) firstField.focus();
}

function closeQuoteModal() {
  quoteOverlay.hidden = true;
  document.body.style.overflow = '';
  if (quoteTrigger) quoteTrigger.focus();
}

document.querySelectorAll('.js-open-quote').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    openQuoteModal(el);
  });
});

quoteClose.addEventListener('click', closeQuoteModal);
quoteOverlay.addEventListener('click', (e) => {
  if (e.target === quoteOverlay) closeQuoteModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !quoteOverlay.hidden) closeQuoteModal();
});

quoteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(quoteForm);
  const firstName = data.get('firstName') || '';
  const lastName = data.get('lastName') || '';
  const website = data.get('website') || '';
  const email = data.get('email') || '';
  const countryCode = data.get('countryCode') || '';
  const phone = data.get('phone') || '';
  const interests = data.getAll('interest');

  const lines = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Website: ${website || 'n/a'}`,
    `Phone: ${phone ? `${countryCode} ${phone}` : 'n/a'}`,
    '',
    "What's feeling most behind right now?",
    interests.length ? interests.map((i) => `- ${i}`).join('\n') : '- (none selected)',
  ];

  const subject = `New project inquiry from ${firstName} ${lastName}`.trim();
  const body = lines.join('\n');
  const mailto = `mailto:inquires@digitalgloss.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
});

// Scroll reveal
const revealTargets = document.querySelectorAll('.glass-card, .process-list li, .statement-text, .contact-inner');
revealTargets.forEach((el) => el.classList.add('reveal'));

if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}
