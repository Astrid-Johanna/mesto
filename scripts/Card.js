import {images, subtitleImages} from './script.js';
import {popupBigImg, openPopup} from './popups.js';

export class Card {
  constructor (data, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;  
  }

  _getTemplate() {
    const cardElement = document 
    .querySelector(this._templateSelector)
    .content
    .querySelector('.group__element')
    .cloneNode(true);
    
    return cardElement
  }

  createCard() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    const imgForCopyTemplateCard = this._element.querySelector('.group__img');
    const placeForCopyTemplateCard = this._element.querySelector('.group__place');
    // Добавим данные
    imgForCopyTemplateCard.src = this._link;
    placeForCopyTemplateCard.textContent = this._name;
    imgForCopyTemplateCard.alt = this._name;
  
    this._setEventListeners(imgForCopyTemplateCard);
    // Вернём элемент наружу
    return this._element;
  }
  
  _like(likeForCopyTemplateCard) {
    likeForCopyTemplateCard.classList.toggle('group__heart_active');
  }

  _openPopupBigImg() {
    openPopup(popupBigImg); 
    images.src = this._link;
    images.alt = this._name;
    subtitleImages.textContent = this._name;
  }

  _delete() {
    this._element.remove();
  }

  _setEventListeners(imgForCopyTemplateCard) {
    const likeForCopyTemplateCard = this._element.querySelector('.group__heart');
    likeForCopyTemplateCard.addEventListener('click', () => {
      this._like(likeForCopyTemplateCard);
    });
     
    imgForCopyTemplateCard.addEventListener('click', () => {
      this._openPopupBigImg();
    }); 
    
    this._element.querySelector('.group_delete').addEventListener('click', () => {
      this._delete();
    });
  } 
}