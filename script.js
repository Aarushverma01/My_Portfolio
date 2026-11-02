/**
 * AARUSH VERMA - PORTFOLIO JAVASCRIPT
 * Plain vanilla JS: No build steps, no external dependencies.
 * Handles:
 *  - Dark / Light Theme switching with system preference detection and localStorage persistence
 *  - Mobile navigation drawer toggle with ARIA accessibility
 *  - Smooth scroll reveal animations via IntersectionObserver (respecting prefers-reduced-motion)
 *  - Active section indicator in sticky navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initScrollReveal();
  initActiveNavOnScroll();
});

/* ==========================================================================
   1. DARK / LIGHT THEME TOGGLE
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Retrieve current active theme
  function getCurrentTheme() {
    return root.getAttribute('data-theme') || 'dark';
  }

  // Set theme, update localStorage and button aria-label
  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );
    }
  }

  // Toggle theme between dark and light
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = getCurrentTheme();
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  // Listen to OS system preference changes if user hasn't explicitly set a preference
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

/* ==========================================================================
   2. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!mobileToggleBtn || !navMenu) return;

  function toggleMenu(isOpen) {
    const shouldOpen = typeof isOpen === 'boolean' ? isOpen : !navMenu.classList.contains('is-open');
    navMenu.classList.toggle('is-open', shouldOpen);
    mobileToggleBtn.classList.toggle('is-active', shouldOpen);
    mobileToggleBtn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
  }

  mobileToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when a navigation item is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('is-open') && !navMenu.contains(e.target) && !mobileToggleBtn.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      toggleMenu(false);
      mobileToggleBtn.focus();
    }
  });
}

/* ==========================================================================
   3. SCROLL REVEAL ANIMATIONS (Intersection Observer)
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // If user prefers reduced motion or IntersectionObserver is unsupported, reveal all immediately
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target); // Reveal only once for calm performance
      }
    });
  }, observerOptions);

  reveals.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   4. ACTIVE NAVIGATION LINK ON SCROLL
   ========================================================================== */
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  function updateActiveLink() {
    const scrollPos = window.scrollY + 120; // Offset for sticky navbar

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}

