// Site-wide micro-interactions: scroll reveals, counters, header state,
// subtle parallax and back-to-top. Kept dependency-free for performance.

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function initScrollReveals() {
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-img, .reveal-group'
  );

  if (!revealElements.length) return;

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
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
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
  );

  revealElements.forEach(el => observer.observe(el));
}

function initAnimatedCounters() {
  const counterElements = document.querySelectorAll<HTMLElement>('[data-counter]');
  if (!counterElements.length) return;

  const setFinal = (el: HTMLElement) => {
    const target = el.dataset.counter || '0';
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    el.textContent = `${prefix}${target}${suffix}`;
  };

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    counterElements.forEach(setFinal);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        obs.unobserve(el);

        const target = parseInt(el.dataset.counter || '0', 10);
        if (isNaN(target)) return;

        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const duration = parseInt(el.dataset.duration || '1600', 10);
        const start = performance.now();

        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          el.textContent = `${prefix}${Math.floor(target * easeOut)}${suffix}`;
          if (progress < 1) requestAnimationFrame(step);
          else setFinal(el);
        };

        requestAnimationFrame(step);
      });
    },
    { threshold: 0.2 }
  );

  counterElements.forEach(el => observer.observe(el));
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let ticking = false;
  const update = () => {
    header.classList.toggle('header-scrolled', window.scrollY > 24);
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      btn.classList.toggle('show', window.scrollY > 420);
      ticking = false;
    });
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  });
}

// Gentle parallax on selected imagery. Transform-only, rAF throttled.
function initParallax() {
  const layers = document.querySelectorAll<HTMLElement>('[data-parallax]');
  if (!layers.length || prefersReducedMotion()) return;

  let ticking = false;
  const update = () => {
    const vh = window.innerHeight;
    layers.forEach(layer => {
      const rect = layer.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > vh + 200) return;
      const speed = parseFloat(layer.dataset.parallax || '0.08');
      const offset = (rect.top + rect.height / 2 - vh / 2) * speed;
      layer.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    });
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });

  update();
}

// Mobile drawer: lock scroll and close on backdrop click / Escape.
function initMobileDrawer() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');
  const closeBtn = document.getElementById('mobile-close-btn');
  if (!menuBtn || !drawer) return;

  const setOpen = (open: boolean) => {
    drawer.classList.toggle('open', open);
    overlay?.classList.toggle('open', open);
    menuBtn.classList.toggle('active', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    document.body.style.overflow = open ? 'hidden' : '';
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
  };

  menuBtn.addEventListener('click', () => setOpen(!drawer.classList.contains('open')));
  closeBtn?.addEventListener('click', () => setOpen(false));
  overlay?.addEventListener('click', () => setOpen(false));
  drawer.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) setOpen(false);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveals();
  initAnimatedCounters();
  initHeaderScroll();
  initBackToTop();
  initParallax();
  initMobileDrawer();
});
