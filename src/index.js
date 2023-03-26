import './index.css'; // добавьте импорт главного файла стилей
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import {initialCards} from './utils/constants.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';

const buttonOpenProfileEdit = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_for_profile');
const buttonOpenPopupCard = document.querySelector('.profile__addbutton');
const popupCard = document.querySelector('.popup_for_card');

const userInfo = new UserInfo ({selectorName: '.profile__name', selectorJob: '.profile__job'});

const popupForProfile = new PopupWithForm ('.popup_for_profile',handleFormSubmitProfile);
const popupForImg = new PopupWithImage('.popup_for_img');
const popupForCard = new PopupWithForm ('.popup_for_card', handleFormSubmitCard);
const formElementProfile = popupProfile.querySelector('.popup__form');
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_job');
// Выберите элементы, куда должны быть вставлены значения полей
const formElementCard = popupCard.querySelector('.popup__form');

const templateSelector = '#card';

const createCard = (cardData) => {
  const newCard = new Card(cardData, templateSelector, (link, name) => {
    popupForImg.open(link, name);
  }); 
  return newCard.createCard();
}

const cardSection = new Section({items: initialCards, renderer: createCard}, '.group__elements');

function fillProfileInput() {
  const {name, job} = userInfo.getUserInfo();
 // в value записываем то, что лежи на странице и показываем в полях ввода.
  nameInput.value = name;
  jobInput.value = job;
}
fillProfileInput();

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

// handle - обрабатывать
function handleFormSubmitProfile (evt, {name, job}) {
  //отмена настроики HTML отправление формы
  evt.preventDefault();

  //Получите значение полей jobInput и nameInput из свойства value
  //Вставьте новые значения с помощью textContent
  userInfo.setUserInfo({
    name,
    job
  });
  
  //вызываем функцию чтобы форма закрылвсь после нажатия сохранить.
  popupForProfile.close();
}

function handleFormSubmitCard (evt, {name, link}) {
  evt.preventDefault();
 
  cardSection.addItem(createCard({
    name,
    link
  }));
  popupForCard.close();
}
 
buttonOpenProfileEdit.addEventListener('click', () => {
  popupForProfile.open();
  fillProfileInput();
});

buttonOpenPopupCard.addEventListener('click', () => {
  popupForCard.open(); 
});