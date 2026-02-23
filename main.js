
// Navbar mobile toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close after clicking a link (useful on mobile)
  navLinks.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a) navLinks.classList.remove('active');
  });
}