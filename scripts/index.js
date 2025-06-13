const container = document.querySelector(".content");
const cardsContainer = container.querySelector(".places__list");

initialCards.forEach((cardData) => {
  const card = addCard(cardData);
  cardsContainer.append(card);
});

function addCard(cardData) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);

  cardElement.querySelector(".card__image").src = cardData.link;
  cardElement.querySelector(".card__title").alt = cardData.name;
  cardElement.querySelector(".card__title").textContent = cardData.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    deleteCardItem(cardElement);
  });

  return cardElement;
}

function deleteCardItem(cardElement) {
  cardElement.remove();
}
