"use strict";

const projectCards = [...document.querySelectorAll(".project-card")];
const filterButtons = [...document.querySelectorAll(".filter-button")];
const searchInput = document.querySelector("#project-search");
const emptyState = document.querySelector("#empty-state");
let activeFilter = "todos";

function updateProjects() {
  const query = searchInput.value.trim().toLocaleLowerCase("es");
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const matchesStudent = activeFilter === "todos" || card.dataset.student === activeFilter;
    const matchesSearch = `${card.dataset.student} ${card.dataset.search}`
      .toLocaleLowerCase("es")
      .includes(query);
    const isVisible = matchesStudent && matchesSearch;

    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  emptyState.hidden = visibleCount !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    updateProjects();
  });
});

searchInput.addEventListener("input", updateProjects);

document.querySelectorAll("[data-student-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const student = link.dataset.studentLink;
    const filterButton = filterButtons.find((button) => button.dataset.filter === student);
    filterButton?.click();
  });
});

document.addEventListener("keydown", (event) => {
  const isTyping = ["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName);
  if (event.key === "/" && !isTyping) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    searchInput.blur();
    updateProjects();
  }
});
