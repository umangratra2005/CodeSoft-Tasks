document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const rail = document.getElementById('navRail');

  if (navToggle && rail) {
    navToggle.addEventListener('click', () => {
      const isOpen = rail.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    rail.querySelectorAll('.rail__link').forEach(link => {
      link.addEventListener('click', () => {
        rail.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Active link on scroll ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const railLinks = document.querySelectorAll('.rail__link');

  const setActive = (id) => {
    railLinks.forEach(link => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
    });
  };

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
  }

  /* ---------- Typing effect for role tagline ---------- */
  const typeTarget = document.getElementById('typeTarget');
  const roles = ['learning by building.', 'exploring machine learning.', 'always up for a challenge.'];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typeTarget && !prefersReducedMotion) {
    let roleIndex = 0, charIndex = 0, deleting = false;

    const tick = () => {
      const current = roles[roleIndex];
      charIndex += deleting ? -1 : 1;
      typeTarget.textContent = current.slice(0, charIndex);

      let delay = deleting ? 40 : 70;

      if (!deleting && charIndex === current.length) {
        delay = 1400;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 300;
      }
      setTimeout(tick, delay);
    };
    tick();
  } else if (typeTarget) {
    typeTarget.textContent = roles[0];
  }

  /* ---------- Animate skill bars when visible ---------- */
  const skillFills = document.querySelectorAll('.skill__fill');
  if ('IntersectionObserver' in window && skillFills.length) {
    const skillObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = el.style.width;
          el.style.width = '0%';
          requestAnimationFrame(() => { el.style.width = target; });
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.4 });

    skillFills.forEach(fill => skillObserver.observe(fill));
  }

  /* ---------- Contact form (front-end only demo) ---------- */
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  if (form && note) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      note.textContent = 'Thanks — this demo form isn\u2019t wired to a server yet. Connect it to your email service or a form endpoint to go live.';
      form.reset();
    });
  }

});
