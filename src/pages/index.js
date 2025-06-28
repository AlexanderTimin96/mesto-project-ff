import "../pages/index.css";
import { initialCards } from "../pages/cards.js";
import { addCard } from "../components/card.js";
import {
  openModal,
  closeModal,
  closePopupBackDropClick,
} from "../components/modal.js";
import { clearValidation, enableValidation } from "../components/validation.js";

/**
 * Константы контейнера
 */
const container = document.querySelector(".content");
const cardsContainer = container.querySelector(".places__list");

/**
 * Карточки
 */
const addNewCardButton = container.querySelector(".profile__add-button");
const modalNewCard = document.querySelector(".popup_type_new-card");
const formNewCardElement = document.forms["new-place"];
const newCardNameinput = formNewCardElement.querySelector(
  ".popup__input_type_card-name"
);
const newCardUrlInput = formNewCardElement.querySelector(
  ".popup__input_type_url"
);

initialCards.forEach((cardData) => {
  const card = addCard(cardData);
  cardsContainer.append(card);
});

addNewCardButton.addEventListener("click", () => {
  clearValidation(modalNewCard, validationConfig);
  openModal(modalNewCard);
  modalNewCard.classList.add("popup_is-animated");
  formNewCardElement.addEventListener("submit", handleFormSubmitPlace);
});

function handleFormSubmitPlace(evt) {
  evt.preventDefault();
  const cardData = {
    name: newCardNameinput.value,
    link: newCardUrlInput.value,
  };
  const result = addCard(cardData);
  cardsContainer.prepend(result);
  formNewCardElement.reset();
  closeModal(modalNewCard);
}

/**
 * Профиль
 */
const editProfileButton = container.querySelector(".profile__edit-button");
const nameProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__description");
const formElementForProfile = document.forms["edit-profile"];
const nameInput = formElementForProfile.querySelector(
  ".popup__input_type_name"
);
const jobInput = formElementForProfile.querySelector(
  ".popup__input_type_description"
);
const modalEditProfile = document.querySelector(".popup_type_edit");

editProfileButton.addEventListener("click", () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  clearValidation(modalEditProfile, validationConfig);
  openModal(modalEditProfile);
  modalEditProfile.classList.add("popup_is-animated");
});

/**
 * Модальки (общее)
 */
const closeModalButtonArray = document.querySelectorAll(".popup__close");

closeModalButtonArray.forEach((closeButton) => {
  const parentModal = closeButton.closest(".popup");
  parentModal.addEventListener("mousedown", closePopupBackDropClick);
  parentModal.classList.add("popup_is-animated");
  closeButton.addEventListener("click", () => {
    closeModal(parentModal);
  });
});

/**
 * Валидация
 */
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(validationConfig);
