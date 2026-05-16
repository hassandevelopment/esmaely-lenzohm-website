/* ─── Mobile nav ────────────────────────────────────────────────────────── */

(function () {
  const btn   = document.getElementById('nav-toggle');
  const menu  = document.getElementById('nav-menu');
  const close = document.getElementById('nav-close');
  if (!btn || !menu) return;

  const focusable = () =>
    Array.from(menu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])'));

  function openMenu() {
    menu.classList.remove('hidden');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Move focus into menu
    const first = focusable()[0];
    if (first) first.focus();
  }

  function closeMenu() {
    menu.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    btn.focus();
  }

  btn.addEventListener('click', openMenu);

  if (close) close.addEventListener('click', closeMenu);

  // ESC to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) closeMenu();
  });

  // Focus trap
  menu.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    const items = focusable();
    const first = items[0];
    const last  = items[items.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!menu.classList.contains('hidden') && !menu.contains(e.target) && e.target !== btn) {
      closeMenu();
    }
  });
})();

/* ─── Scroll-reveal ─────────────────────────────────────────────────────── */

(function () {
  // Respect prefers-reduced-motion
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach(function (el) { observer.observe(el); });
})();

/* ─── Smooth scroll for in-page jump links ──────────────────────────────── */

(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL without triggering scroll again
      history.pushState(null, '', link.getAttribute('href'));
    });
  });
})();

/* ─── Sticky header shadow ──────────────────────────────────────────────── */

(function () {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 8) {
      header.classList.add('shadow-sm');
    } else {
      header.classList.remove('shadow-sm');
    }
  }, { passive: true });
})();
