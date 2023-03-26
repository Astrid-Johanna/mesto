import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(selector, handleFormSubmit){
    super(selector);
    //колбек сабмита формы
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputsList = Array.from(this._form.querySelectorAll('.popup__input'));
  }
  //собирает данные всех полей формы
  _getInputValues() {
    //создаю константу с пустым объектом записываеться в res.
    const res = {};

    this._inputsList.forEach((input) => {
      res[input.name] = input.value;
    });
    return res;
  }

  _handleSubmit(evt) {
    this._handleFormSubmit(evt, this._getInputValues());
  }

  //Метод setEventListeners класса PopupWithForm должен добавлять обработчик сабмита формы.
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleSubmit.bind(this));
  }

  //при закрытии попапа форма должна ещё и сбрасываться.
  close() {
    super.close();
    this._form.reset();
  }
}
//Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
