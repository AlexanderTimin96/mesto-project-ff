import { openModal } from "./modal.js";

/**
 * Добавление новой карточки
 *
 * @param cardData объект с данными карточки (ссылка на картинку и описание)
 * @returns новая карточка с фото
 */
export function addCard(cardData) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");

  cardImage.src = cardData.link;
  cardElement.querySelector(".card__title").alt = cardData.name;
  cardElement.querySelector(".card__title").textContent = cardData.name;

  const cardModal = document.querySelector(".popup_type_image");
  cardImage.addEventListener("click", () => {
    const img = cardModal.querySelector(".popup__image");
    const caption = cardModal.querySelector(".popup__caption");
    img.src = cardData.link;
    img.alt = cardData.name;
    caption.textContent = cardData.name;
    openModal(cardModal);
  });

  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    if (likeButton.classList.contains("card__like-button_is-active")) {
      likeButton.classList.remove("card__like-button_is-active");
    } else {
      likeButton.classList.add("card__like-button_is-active");
    }
  });

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    cardElement.remove();;
  });

  return cardElement;
}
