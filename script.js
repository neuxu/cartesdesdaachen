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

form?.addEventListener("submit", event => {
  event.preventDefault();
  formMessage.textContent = "Aquest formulari és una maqueta: abans de publicar el blog, cal connectar-lo a un servei de subscripcions per guardar l'adreça i enviar els correus.";
});

document.querySelector("#year").textContent = new Date().getFullYear();
