// Live coordinate HUD — tracks cursor position, canvas-tool style
(function () {
  const hudX = document.getElementById('hudX');
  const hudY = document.getElementById('hudY');
  if (!hudX || !hudY) return;

  let ticking = false;
  window.addEventListener('mousemove', (e) => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      hudX.textContent = String(e.clientX).padStart(3, '0');
      hudY.textContent = String(e.clientY).padStart(3, '0');
      ticking = false;
    });
  });
})();

// Left ruler scroll marker — shows current scroll depth
(function () {
  const marker = document.getElementById('rulerMarker');
  if (!marker) return;

  function updateMarker() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? scrollTop / docHeight : 0;
    const rulerHeight = window.innerHeight;
    marker.style.top = `${pct * (rulerHeight - 3)}px`;
  }

  window.addEventListener('scroll', () => requestAnimationFrame(updateMarker));
  window.addEventListener('resize', updateMarker);
  updateMarker();
})();

// Frame reveal on scroll
(function () {
  const frames = document.querySelectorAll('.frame');
  if (!frames.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    frames.forEach((f) => f.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  frames.forEach((f) => observer.observe(f));
})();
