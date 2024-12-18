document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("div[id]");

  // Observer to detect which section is currently visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          // Apply dark mode for specific sections
          if (sectionId === "about" || sectionId === "contact" || sectionId === "contribute") {
            navbar.classList.add("dark-mode");
          } else {
            navbar.classList.remove("dark-mode");
          }
        }
      });
    },
    { threshold: 0.9 } // Trigger when 50% of the section is visible
  );

  // Observe each section
  sections.forEach((section) => {
    observer.observe(section);
  });
});
