import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards} from './constants.js';
import {popupProfile, popupCard, popupBigImg, closePopup, checkPopup, setEventListenersForOpen, findPopupAddEventListener} from './popups.js';
// Находим форму в DOM
const formElementProfile = popupProfile.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_job');
// Выберите элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const placeForCards = document.querySelector('.group__elements');
const formElementCard = popupCard.querySelector('.popup__form');
const placeNameInput = popupCard.querySelector('.popup__input_type_place');
const imgLinkInput = popupCard.querySelector('.popup__input_type_link');

export const images = popupBigImg.querySelector('.popup__img');
export const subtitleImages = popupBigImg.querySelector('.popup__subtitle');
const templateSelector = '#card';

export function fillProfileInput() {
// в value записываем то, что лежи на странице и показываем в полях ввода.
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
fillProfileInput();

function renderCard(cardDescription) {
  const newCard = new Card(cardDescription, templateSelector);
  const cardElement = newCard.createCard();

  addCard(cardElement);
}

function addCard(cardElement) {
  placeForCards.prepend(cardElement);
}


initialCards.forEach(renderCard);

// handle - обрабатывать
function handleFormSubmitProfile (evt) {
  //отмена настроики HTML отправление формы
  evt.preventDefault();

  // Получите значение полей jobInput и nameInput из свойства value
  const name = nameInput.value;
  const job = jobInput.value;

  // Вставьте новые значения с помощью textContent
  profileName.textContent = name;
  profileJob.textContent =  job;
  //вызываем функцию чтобы форма закрылвсь после нажатия сохранить.
  closePopup(popupProfile);
}

function handleFormSubmitCard (evt) {
  evt.preventDefault();

  const placeName = placeNameInput.value;
  const imgLink = imgLinkInput.value;
    
  renderCard({
    name: placeName,
    link: imgLink
  });
  closePopup(popupCard);
    
  formElementCard.reset();
}

formElementProfile.addEventListener('submit', handleFormSubmitProfile);

formElementCard.addEventListener('submit', handleFormSubmitCard);

setEventListenersForOpen();
checkPopup();
findPopupAddEventListener()

const formValidatorParams = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__form-submit',
  inactiveButtonClass: 'popup__form-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const validatorAddingCard = new FormValidator(formValidatorParams, formElementCard);

validatorAddingCard.enableValidation();

const validatorEditingProfile = new FormValidator(formValidatorParams, formElementProfile);

validatorEditingProfile.enableValidation();


 