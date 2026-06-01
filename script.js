/* ============================================
   SCRIPT.JS - INTERACTIVE FUNCTIONALITY
   ============================================ */

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initSmoothScrolling();
    initNavigation();
    initHamburgerMenu();
});

/* ============================================
   THEME TOGGLE (DARK/LIGHT MODE)
   ============================================ */
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateThemeIcon(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            localStorage.setItem('theme', '');
            updateThemeIcon('dark');
        } else {
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            updateThemeIcon('light');
        }
    });
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (theme === 'light-mode') {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
}

/* ============================================
   SMOOTH SCROLLING TO SECTIONS
   ============================================ */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Close mobile menu if open
                const navMenu = document.getElementById('navMenu');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }

                // Scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update active link
                updateActiveNavLink(link);
            }
        });
    });
}

/* ============================================
   ACTIVE NAVIGATION HIGHLIGHT ON SCROLL
   ============================================ */
function initNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

/* ============================================
   MOBILE MENU TOGGLE
   ============================================ */
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

/* ============================================
   OPTIONAL: SKILL BAR ANIMATION ON SCROLL
   ============================================ */
window.addEventListener('scroll', () => {
    const skillFills = document.querySelectorAll('.skill-fill');
    
    skillFills.forEach(fill => {
        const rect = fill.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !fill.classList.contains('animated')) {
            fill.classList.add('animated');
            // CSS animation will handle the width change via the inline style already set
        }
    });
});

/* ============================================
   DOWNLOAD RESUME FALLBACK
   ============================================ */
document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // If the file doesn't exist or is a placeholder, show an alert
        if (href.includes('YOUR_RESUME_LINK_HERE') || href.includes('Dheeraj_Resume.pdf')) {
            console.log('Resume file path:', href);
            // The browser will handle the download or file access
        }
    });
});

/* ============================================
   CONSOLE WELCOME MESSAGE (FUN EASTER EGG)
   ============================================ */
console.log('%cWelcome, Player! 🎮', 'font-size: 20px; color: #00d9ff; font-weight: bold; text-shadow: 0 0 10px #00d9ff;');
console.log('%cYou\'ve entered Dheerajkumar\'s Portfolio', 'font-size: 14px; color: #00ff41;');
console.log('%cFeel free to explore and check out the code!', 'font-size: 12px; color: #ff006e;');
console.log('%c✓ Theme Toggle ✓ Smooth Navigation ✓ Responsive Design', 'font-size: 11px; color: #a8b3d6;');
