/**
 * booklet.cl overlay config — Repositoria + example sibling products.
 * Deploy: copy to document-root `js/config.js` (replaces the generic config).
 *
 * Free tier: tipo (b) filial small plan is free → showFreeCta: true.
 * Set showFreeCta: false (or comment the FREE button in HTML) if a product has no free tier.
 */
window.LANDING_CONFIG = {
  showFreeCta: true,
  freeCtaHref: "https://repositoria.booklet.cl/",
  freeCtaLabel: "Inicia FREE",
  plansHref: "#planes",
  plansLabel: "Planes",
  products: [
    {
      label: "ECOMMERCE",
      href: "#producto-ecommerce",
      logo: "assets/products/mark-shop.svg",
    },
    {
      label: "ERP",
      href: "#producto-erp",
      logo: "assets/products/mark-ops.svg",
    },
  ],
};
