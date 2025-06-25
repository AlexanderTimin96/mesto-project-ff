import "../pages/index.css";
import { initialCards } from "../pages/cards.js";
import { addCard } from "../components/card.js";
import {
  openModal,
  closeModal,
  closePopupBackDropClick,
} from "../components/modal.js";

const container = document.querySelector(".content");
const cardsContainer = container.querySelector(".places__list");

const addNewCardButton = container.querySelector(".profile__add-button");
const modalNewCard = document.querySelector(".popup_type_new-card");
const formNewCardElement = document.forms["new-place"];
const newCardNameinput = formNewCardElement.querySelector(
  ".popup__input_type_card-name"
);
const newCardUrlInput = formNewCardElement.querySelector(
  ".popup__input_type_url"
);

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

const closeModalButtonArray = document.querySelectorAll(".popup__close");

initialCards.forEach((cardData) => {
  const card = addCard(cardData);
  cardsContainer.append(card);
});

addNewCardButton.addEventListener("click", () => {
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
  closeModal(modalNewCard);
}

editProfileButton.addEventListener("click", () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openModal(modalEditProfile);
  modalEditProfile.classList.add("popup_is-animated");
});

closeModalButtonArray.forEach((closeButton) => {
  const parentModal = closeButton.closest(".popup");
  parentModal.addEventListener("mousedown", closePopupBackDropClick);
  parentModal.classList.add("popup_is-animated");
  closeButton.addEventListener("click", () => {
    closeModal(parentModal);
  });
});
