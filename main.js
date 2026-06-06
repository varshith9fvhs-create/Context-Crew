/* ═══════════════════════════════════════════════════
   CONTEXT CREW — MAIN JAVASCRIPT
   ═══════════════════════════════════════════════════ */

// ─── Nav scroll effect ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── Mobile burger menu ───
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu on nav link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ─── Intersection Observer for reveal animations ───
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── Skill bar animation ───
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(fill => {
        fill.classList.add('animated');
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const skillsBoard = document.querySelector('.skills-board');
if (skillsBoard) barObserver.observe(skillsBoard);

// ─── Add reveal classes to sections dynamically ───
function addRevealClasses() {
  const targets = [
    { selector: '.about-text', delay: 0 },
    { selector: '.about-card-stack', delay: 1 },
    { selector: '.member-card', delay: 'index' },
    { selector: '.proj-card', delay: 'index' },
    { selector: '.cert-card', delay: 'index' },
    { selector: '.tl-item', delay: 'index' },
    { selector: '.domain-card', delay: 'index' },
    { selector: '.stat', delay: 'index' },
  ];

  targets.forEach(({ selector, delay }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('reveal');
      if (delay === 'index') {
        const d = Math.min(i * 0.12, 0.4);
        el.style.transitionDelay = `${d}s`;
      } else if (delay > 0) {
        el.style.transitionDelay = `${delay * 0.15}s`;
      }
      revealObserver.observe(el);
    });
  });
}

addRevealClasses();

// ─── Active nav link on scroll ───
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinkEls.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${id}`) {
          link.style.color = 'var(--accent)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => sectionObserver.observe(section));

// ─── Contact form ───
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      formNote.textContent = '⚠ Please fill in all required fields.';
      formNote.style.color = 'var(--accent-2)';
      return;
    }

    // Simulate sending (no backend — GitHub Pages is static)
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      formNote.textContent = '✦ Message received! We\'ll get back to you soon.';
      formNote.style.color = 'var(--accent-3)';
      contactForm.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1200);
  });
}

// ─── Animated counter for stats ───
function animateCounter(el, target, duration = 1400) {
  const start = performance.now();
  const isDecimal = String(target).includes('.');
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = eased * target;
    el.textContent = isDecimal
      ? current.toFixed(1)
      : Math.floor(current).toString() + (progress < 1 ? '' : (target === 5 ? '+' : ''));
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = el.dataset.target;
  };
  requestAnimationFrame(update);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num').forEach(el => {
        const raw = el.textContent.replace(/\D/g, '');
        el.dataset.target = el.textContent;
        if (raw) animateCounter(el, parseInt(raw));
      });
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) statObserver.observe(aboutStats);

// ─── Subtle cursor glow (desktop only) ───
if (window.matchMedia('(hover: hover)').matches) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed; width: 300px; height: 300px; border-radius: 50%;
    background: radial-gradient(circle, rgba(245,197,24,0.04) 0%, transparent 70%);
    pointer-events: none; z-index: 1; transform: translate(-50%, -50%);
    transition: left 0.15s ease, top 0.15s ease;
  `;
  document.body.appendChild(glow);

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    glow.style.left = mouseX + 'px';
    glow.style.top = mouseY + 'px';
  });
}

// ─── Smooth scroll polyfill for older browsers ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

console.log('%c Context Crew 🚀 ', 'background:#f5c518;color:#000;font-family:monospace;font-size:14px;padding:6px 14px;border-radius:4px;font-weight:bold;');
console.log('%c GITAM University · Hyderabad · 2024–2028 ', 'color:#6b6b80;font-family:monospace;font-size:11px;');
