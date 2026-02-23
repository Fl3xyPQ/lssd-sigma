// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        if (navLink) {
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLink.style.color = 'var(--gold)';
            } else {
                navLink.style.color = '';
            }
        }
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        btn.textContent = '✅ Zpráva odeslána!';
        btn.style.background = 'linear-gradient(135deg, #2E7D32, #4CAF50)';
        btn.disabled = true;
        setTimeout(() => {
            contactForm.reset();
            btn.textContent = '📨 Odeslat zprávu';
            btn.style.background = '';
            btn.disabled = false;
        }, 3000);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(201,168,76,0.2)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});