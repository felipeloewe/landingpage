/**
 * Tiny motion helpers — no framework, no build step.
 * Entrance stagger is CSS-driven once `.js-ready` is set.
 * Scroll reveals use IntersectionObserver when available.
 */
(function () {
  var root = document.documentElement;
  root.classList.add("js-ready");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var reveals = document.querySelectorAll(".reveal");
  if (!reveals.length || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.15 }
  );

  reveals.forEach(function (el) {
    observer.observe(el);
  });
})();
