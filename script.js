// Funcions del prototip: cerca d'entrades i missatge de demostració del formulari.
const searchInput = document.querySelector("#search-input");
const cards = [...document.querySelectorAll(".archive-card")];
const emptyState = document.querySelector("#empty-state");
const form = document.querySelector("#subscribe-form");
const formMessage = document.querySelector("#form-message");

searchInput?.addEventListener("input", () => {
  const query = searchInput.value.trim().toLocaleLowerCase("ca");
  let visible = 0;
  cards.forEach(card => {
    const haystack = `${card.innerText} ${card.dataset.search || ""}`.toLocaleLowerCase("ca");
    const matches = haystack.includes(query);
    card.hidden = !matches;
    if (matches) visible++;
  });
  emptyState.hidden = visible > 0;
});

form?.addEventListener("submit", () => {
  formMessage.textContent = "Et redirigirem a Simple Newsletter per gestionar la subscripció. Revisa el correu per confirmar-la.";
});

document.querySelector("#year").textContent = new Date().getFullYear();
