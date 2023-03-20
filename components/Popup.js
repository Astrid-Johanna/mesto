export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this); 
  }

  open() {
   this._popup.classList.add('popup_opened');
   document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
        this.close();  
      }
    
  }

  setEventListeners() {
    const popupsList = Array.from(this._popup);

    popupsList.forEach((popup) => {
      popup.addEventListener('click', (evt) => {
        if(evt.target === popup) {
          this.close(popup); 
        }  
      });
    });
    const closeButtons = document.querySelectorAll('.popup__close');
    
    closeButtons.forEach((button) => {
      // находим 1 раз ближайший к крестику попап 
      const popup = button.closest('.popup');
      // устанавливаем обработчик закрытия на крестик
      button.addEventListener('click', () => this.close(popup));
    });
  }
}