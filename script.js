const searchInput = document.querySelector("#search-input");
const cards = [...document.querySelectorAll(".archive-card")];
const emptyState = document.querySelector("#empty-state");

searchInput?.addEventListener("input", () => {
  const query = searchInput.value.trim().toLocaleLowerCase("ca");
  let visible = 0;

  cards.forEach(card => {
    const haystack =
      `${card.innerText} ${card.dataset.search || ""}`.toLocaleLowerCase("ca");
    const matches = haystack.includes(query);
    card.hidden = !matches;
    if (matches) visible++;
  });
