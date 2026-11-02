/**
 * Site config — override per domain (see sites/<domain>/config.js).
 * Keep the kit core product-agnostic; overlays seed products and CTA flags.
 *
 * products[].label: max two words (shown uppercase in the strip)
 * showFreeCta: false hides / disables the FREE button when the product has no free tier
 */
window.LANDING_CONFIG = {
  showFreeCta: true,
  freeCtaHref: "#get-started",
  freeCtaLabel: "Start FREE",
  plansHref: "#plans",
  plansLabel: "Plans",
  products: [
    {
      label: "Shop Kit",
      href: "#product-shop",
      logo: "assets/products/mark-shop.svg",
    },
    {
      label: "Ops Hub",
      href: "#product-ops",
      logo: "assets/products/mark-ops.svg",
    },
  ],
};
