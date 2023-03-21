import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {initialCards} from '../utils/constants.js';
import {
  popupProfile, 
  popupCard, 
  popupBigImg, 
  setEventListenersForOpen, 
  popupForProfile, 
  popupForCard, 
  popupForImg
} from '../components/popups.js';
import Section from '../components/Section.js';
// Находим форму в DOM
const formElementProfile = popupProfile.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_job');
// Выберите элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
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

const createCard = (cardData) => {
  const newCard = new Card(cardData, templateSelector); 
  return newCard.createCard();
}

const cardSection = new Section({items: initialCards, renderer: createCard}, '.group__elements');



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
  popupForProfile.close();
}

function handleFormSubmitCard (evt) {
  evt.preventDefault();

  const placeName = placeNameInput.value;
  const imgLink = imgLinkInput.value;
    
  cardSection.addItem(createCard({
    name: placeName,
    link: imgLink
  }));
  popupForCard.close();
    
  formElementCard.reset();
}

formElementProfile.addEventListener('submit', handleFormSubmitProfile);

formElementCard.addEventListener('submit', handleFormSubmitCard);

setEventListenersForOpen();
popupForCard.setEventListeners();
popupForProfile.setEventListeners();
popupForImg.setEventListeners();

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


 