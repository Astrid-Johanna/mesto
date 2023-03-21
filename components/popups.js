import {fillProfileInput} from '../pages/index.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
const buttonOpenProfileEdit = document.querySelector('.profile__edit-button');
export const popupProfile = document.querySelector('.popup_for_profile');

const buttonOpenPopupCard = document.querySelector('.profile__addbutton');
export const popupCard = document.querySelector('.popup_for_card');

export const popupBigImg = document.querySelector('.popup_for_img');

export const popupForProfile = new Popup('.popup_for_profile');
export const popupForImg = new PopupWithImage('.popup_for_img');
export const popupForCard = new Popup('.popup_for_card');

export function setEventListenersForOpen() {
  buttonOpenProfileEdit.addEventListener('click', function() {
    popupForProfile.open();
    fillProfileInput(); 
  });

  buttonOpenPopupCard.addEventListener('click', function() {
    popupForCard.open(); 
  });
};


