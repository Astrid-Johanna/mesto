import {fillProfileInput} from './script.js';
const buttonOpenProfileEdit = document.querySelector('.profile__edit-button');
export const popupProfile = document.querySelector('.popup_for_profile');

const buttonOpenPopupCard = document.querySelector('.profile__addbutton');
export const popupCard = document.querySelector('.popup_for_card');

export const popupBigImg = document.querySelector('.popup_for_img');

const popups = document.querySelectorAll('.popup');

const popupsList = Array.from(popups);

const closeButtons = document.querySelectorAll('.popup__close');

export function checkPopup() {
  popupsList.forEach(function(popup) {
    popup.addEventListener('click', function(evt) {
      if(evt.target === popup) {
        closePopup(popup); 
      }
    });
  });
}

export function handleEsc(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);  
  }
}
// popup - HTML элемент  
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEsc);
}

//popup - HTML элемент 
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEsc);
}

export function setEventListenersForOpen() {
  buttonOpenProfileEdit.addEventListener('click', function() {
    openPopup(popupProfile);
    fillProfileInput(); 
  });

  buttonOpenPopupCard.addEventListener('click', function() {
    openPopup(popupCard); 
  });
};

export function findPopupAddEventListener() {
  closeButtons.forEach((button) => {
    // находим 1 раз ближайший к крестику попап 
    const popup = button.closest('.popup');
    // устанавливаем обработчик закрытия на крестик
    button.addEventListener('click', () => closePopup(popup));
  });
}
