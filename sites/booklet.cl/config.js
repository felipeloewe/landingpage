/**
 * booklet.cl overlay — 7 vertical product slots (ECOMMERCE, ERP + placeholders).
 * Deploy: copy to document-root `js/config.js`.
 */
window.LANDING_CONFIG = {
  showFreeCta: true,
  freeCtaHref: "https://repositoria.booklet.cl/",
  freeCtaLabel: "Inicia FREE",
  plansHref: "#planes",
  plansLabel: "Planes",
  products: [
    { label: "ECOMMERCE", href: "#producto-ecommerce", logo: "assets/products/mark-1.svg" },
    { label: "ERP", href: "#producto-erp", logo: "assets/products/mark-2.svg" },
    { label: "CRM", href: "#producto-crm", logo: "assets/products/mark-3.svg" },
    { label: "HR", href: "#producto-hr", logo: "assets/products/mark-4.svg" },
    { label: "Finance", href: "#producto-finance", logo: "assets/products/mark-5.svg" },
    { label: "Mail", href: "#producto-mail", logo: "assets/products/mark-6.svg" },
    { label: "Portal", href: "#producto-portal", logo: "assets/products/mark-7.svg" },
  ],
};
