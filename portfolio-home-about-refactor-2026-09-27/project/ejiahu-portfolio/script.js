const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 720);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const animatedItems = document.querySelectorAll(
  [
    ".hero-copy",
    ".hero-visual",
    ".contribution-section",
    ".mini-impact-card",
    ".split-heading",
    ".section-title-block",
    ".evidence-card",
    ".role-card",
    ".storyboard-grid article",
    ".system-overview article",
    ".ui-showcase-block",
    ".mechanism-card",
    ".board-strip img",
    ".closing-summary"
  ].join(", ")
);

animatedItems.forEach((item) => {
  item.classList.add("reveal-item");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

animatedItems.forEach((item) => observer.observe(item));
