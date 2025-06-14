import "../pages/index.css";
import { initialCards } from "../pages/cards.js";
import { addCard } from "../components/card.js";
import { openModal, closeModal } from "../components/modal.js";

const container = document.querySelector(".content");
const cardsContainer = container.querySelector(".places__list");

const addNewCardButton = container.querySelector(".profile__add-button");
const modalNewCard = document.querySelector(".popup_type_new-card");

const editProfileButton = container.querySelector(".profile__edit-button");
const modalEditProfile = document.querySelector(".popup_type_edit");

const closeModalButtonArray = document.querySelectorAll(".popup__close");

addNewCardButton.addEventListener("click", () => {
  openModal(modalNewCard);
});

editProfileButton.addEventListener("click", () => {
  openModal(modalEditProfile);
});

closeModalButtonArray.forEach((closeButton) => {
  const parentModal = closeButton.closest(".popup")
  closeButton.addEventListener("click", () => {
    closeModal(parentModal);
  });
});

initialCards.forEach((cardData) => {
  const card = addCard(cardData);
  cardsContainer.append(card);
});
