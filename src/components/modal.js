/**
 * Открытие модалки
 */
export function openModal(modalElement) {
  modalElement.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupEsc);
}

/**
 * Закрытие модалки
 */
export function closeModal(modalElement) {
  modalElement.classList.remove("popup_is-opened");
}

/**
 * Закрытие модалки по нажатию "Escape"
 */
export function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    closeModal(popup);
  }
}

/**
 * Закрытие модалки по нажатию на оверплай
 */
export function closePopupBackDropClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
}