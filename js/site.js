/**
 * Applies LANDING_CONFIG: product strip + Plans / FREE CTAs.
 * Product strip ships with static HTML fallbacks so it stays visible
 * even if this script or config.js fails to load.
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

  function buildItem(item) {
    var link = document.createElement("a");
    link.className = "product-strip__item";
    link.href = item.href;
    link.title = item.label;

    if (item.logo) {
      var img = document.createElement("img");
      img.src = item.logo;
      img.alt = "";
      img.width = 32;
      img.height = 32;
      img.decoding = "async";
      link.appendChild(img);
    }

    var caption = document.createElement("span");
    caption.className = "product-strip__label";
    caption.textContent = String(item.label).trim();
    link.appendChild(caption);
    return link;
  }

  function fillProductStrip(root) {
    if (!root) return;

    /* Always keep the strip visible — never hide the reserved slot. */
    root.hidden = false;
    root.removeAttribute("hidden");

    var valid = products.filter(function (item) {
      if (!item || !item.href || !item.label) return false;
      if (wordCount(item.label) > 2) {
        console.warn(
          "[landing] product label exceeds 2 words and was skipped:",
          item.label
        );
        return false;
      }
      return true;
    });

    /* Only replace static markup when config provides products. */
    if (!valid.length) return;

    root.replaceChildren();
    valid.forEach(function (item) {
      root.appendChild(buildItem(item));
    });
  }

  function applyCtaFlags() {
    var showFree = config.showFreeCta !== false;
    document.querySelectorAll("[data-cta='free']").forEach(function (el) {
      if (showFree) {
        el.hidden = false;
        el.removeAttribute("aria-disabled");
        if (config.freeCtaHref) el.setAttribute("href", config.freeCtaHref);
        if (config.freeCtaLabel) el.textContent = config.freeCtaLabel;
      } else {
        el.hidden = true;
        el.setAttribute("aria-disabled", "true");
      }
    });

    document.querySelectorAll("[data-cta='plans']").forEach(function (el) {
      if (config.plansHref) el.setAttribute("href", config.plansHref);
      if (config.plansLabel) el.textContent = config.plansLabel;
    });
  }

  document.querySelectorAll("[data-product-strip]").forEach(fillProductStrip);
  applyCtaFlags();
})();
