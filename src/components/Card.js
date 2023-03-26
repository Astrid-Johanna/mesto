export default class Card {
  constructor (data, templateSelector, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector; 
    this._handleCardClick = handleCardClick; 
  }

  _getTemplate() {
    const cardElement = document 
    .querySelector(this._templateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    
    return cardElement
  }

  createCard() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    this._imgForCopyTemplateCard = this._element.querySelector('.card__img');
    const placeForCopyTemplateCard = this._element.querySelector('.card__place');
    // Добавим данные
    this._imgForCopyTemplateCard.src = this._link;
    placeForCopyTemplateCard.textContent = this._name;
    this._imgForCopyTemplateCard.alt = this._name;
  
    this._setEventListeners();
    // Вернём элемент наружу
    return this._element;
  }
  
  _like() {
    this._likeForCopyTemplateCard.classList.toggle('card__heart_active');
  }

  _imgForCopyTemplateCardHandelClick() {
    this._handleCardClick(this._link, this._name);
  }


  _delete() {
    this._element.remove();
  }

  _setEventListeners() {
    this._likeForCopyTemplateCard = this._element.querySelector('.card__heart');
    this._likeForCopyTemplateCard.addEventListener('click', () => {
     this._like();
    });
     
    this._imgForCopyTemplateCard.addEventListener('click', () => {
      this._imgForCopyTemplateCardHandelClick();
    }); 
    
    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._delete();
    });
  } 
}