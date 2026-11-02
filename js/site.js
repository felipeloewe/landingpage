/**
 * Applies LANDING_CONFIG: product strip + Plans / FREE CTAs.
 * Runs after config.js; no build step.
 */
(function () {
  var config = window.LANDING_CONFIG || {};
  var products = Array.isArray(config.products) ? config.products : [];

  function wordCount(label) {
    return String(label || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;
  }

  function fillProductStrip(root) {
    if (!root) return;
    root.replaceChildren();

    if (!products.length) {
      root.hidden = true;
      return;
    }

    root.hidden = false;
    products.forEach(function (item) {
      if (!item || !item.href || !item.label) return;
      if (wordCount(item.label) > 2) {
        console.warn(
          "[landing] product label exceeds 2 words and was skipped:",
          item.label
        );
        return;
      }

      var link = document.createElement("a");
      link.className = "product-strip__item";
      link.href = item.href;
      link.title = item.label;

      if (item.logo) {
        var img = document.createElement("img");
        img.src = item.logo;
        img.alt = "";
        img.width = 28;
        img.height = 28;
        img.decoding = "async";
        link.appendChild(img);
      }

      var caption = document.createElement("span");
      caption.className = "product-strip__label";
      caption.textContent = String(item.label).trim();
      link.appendChild(caption);

      root.appendChild(link);
    });

    if (!root.childElementCount) {
      root.hidden = true;
    }
  }

  function applyCtaFlags() {
    var showFree = config.showFreeCta !== false;
    var freeButtons = document.querySelectorAll("[data-cta='free']");
    freeButtons.forEach(function (el) {
      if (showFree) {
        el.hidden = false;
        el.removeAttribute("aria-disabled");
        if (config.freeCtaHref) el.setAttribute("href", config.freeCtaHref);
        if (config.freeCtaLabel) el.textContent = config.freeCtaLabel;
      } else {
        el.hidden = true;
        el.setAttribute("aria-disabled", "true");
        /* Keep in DOM for overlays that flip showFreeCta later; also comment-friendly in HTML. */
      }
    });

    document.querySelectorAll("[data-cta='plans']").forEach(function (el) {
      if (config.plansHref) el.setAttribute("href", config.plansHref);
      if (config.plansLabel) el.textContent = config.plansLabel;
    });
  }

  fillProductStrip(document.querySelector("[data-product-strip]"));
  applyCtaFlags();
})();
