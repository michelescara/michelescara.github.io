// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Don't animate hero section on load
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.style.opacity = '1';
    heroSection.style.transform = 'translateY(0)';
}

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Typing effect for hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    // Extract the text parts
    const beforeHighlight = "Hi, I'm ";
    const highlightText = "Michele Scaramuzzino";
    const fullText = beforeHighlight + highlightText;

    // Clear the title
    heroTitle.innerHTML = '';
    heroTitle.style.opacity = '1';

    let charIndex = 0;
    const typingSpeed = 50;

    function typeText() {
        if (charIndex < fullText.length) {
            const currentText = fullText.slice(0, charIndex + 1);

            // Check if we've reached the highlight part
            if (charIndex < beforeHighlight.length) {
                // Still typing the first part
                heroTitle.innerHTML = currentText;
            } else {
                // Typing the highlighted part
                const highlightPart = currentText.slice(beforeHighlight.length);
                heroTitle.innerHTML = beforeHighlight + '<span class="highlight">' + highlightPart + '</span>';
            }

            charIndex++;
            setTimeout(typeText, typingSpeed);
        }
    }

    // Enable typing effect
    setTimeout(typeText, 500);
}

// Project cards and Skill cards hover effects are handled in CSS


// Log welcome message to console
console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
console.log('%cIf you\'re looking here, you\'re probably a developer! 🚀', 'font-size: 14px; color: #6b7280;');
console.log('%cFeel free to reach out!', 'font-size: 14px; color: #6b7280;');
