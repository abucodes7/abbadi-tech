// Site-wide micro-interactions, scroll reveals, animated number counters, and back-to-top

function initScrollReveals() {
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale'
  );

  if (!revealElements.length) return;

  // If user prefers reduced motion, reveal all immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealElements.forEach(el => observer.observe(el));
}

function initAnimatedCounters() {
  const counterElements = document.querySelectorAll<HTMLElement>('[data-counter]');
  if (!counterElements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    counterElements.forEach(el => {
      const target = el.dataset.counter || '0';
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      el.textContent = `${prefix}${target}${suffix}`;
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          obs.unobserve(el);

          const target = parseInt(el.dataset.counter || '0', 10);
          const suffix = el.dataset.suffix || '';
          const prefix = el.dataset.prefix || '';
          const duration = parseInt(el.dataset.duration || '1600', 10);

          if (isNaN(target)) return;

          const startTimestamp = performance.now();
          const startVal = 0;

          function step(now: number) {
            const elapsed = now - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(startVal + (target - startVal) * easeOut);

            el.textContent = `${prefix}${current}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              el.textContent = `${prefix}${target}${suffix}`;
            }
          }

          requestAnimationFrame(step);
        }
      });
    },
    { threshold: 0.2 }
  );

  counterElements.forEach(el => observer.observe(el));
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY > 350) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    },
    { passive: true }
  );

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Interactive 3D tilt / subtle glare on marked cards
function initCardGlare() {
  const interactiveCards = document.querySelectorAll<HTMLElement>('.card-interactive, .service-box, .why-card');

  interactiveCards.forEach(card => {
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// Auto-run on DOM ready and after Astro view transitions
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveals();
  initAnimatedCounters();
  initHeaderScroll();
  initBackToTop();
  initCardGlare();
});
