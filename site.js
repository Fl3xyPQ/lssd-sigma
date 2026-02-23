
// Smooth anchor navigation + mobile menu close
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;

  const href = a.getAttribute('href');
  if (!href || href === '#') return;

  const id = href.slice(1);
  const target = document.getElementById(id);
  if (!target) return; // if missing, don't break default behavior

  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // close hamburger menu if your CSS toggles an "open" class
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

// Optional: hamburger toggle (only if not already implemented elsewhere)
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
}