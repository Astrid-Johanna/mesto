export default class FormValidator {
  constructor(params, form) {
   this._form = form;
   this._params = params;
   this._submitButton = this._form.querySelector(this._params.submitButtonSelector); 
  }
  
  enableValidation () {
    const inputs = this._form.querySelectorAll(this._params.inputSelector);
    // Array.from - делаем массив
    this._inputsList = Array.from(inputs);
  
    this._setEventListeners();
  
    this._form.addEventListener('reset',() => { // собыите `reset` происходит когда вызывается `reset` у формы
      setTimeout(() => {  // добавим таймаут, чтобы `checkformInvalid` вызвался уже после сохранения формы
        this._toggleButtonState();
      },0);
    }) 
   
  }
  
  _setEventListeners() { 
    this._toggleButtonState();
      
    this._inputsList.forEach((input) => { 
      input.addEventListener('input',() => {
        this._checkInputInvalid (input);
        this._toggleButtonState();
      }); 
    });
  }  
  //проверяет форму на волидацию инпутов и изменяет состояние кнопки сохранить 
  _toggleButtonState() {
    const formInvalid = this._inputsList.some((input) => {
      return !input.validity.valid;
    });
  
    if(formInvalid) {
      this._submitButton.classList.add(this._params.inactiveButtonClass);
      this._submitButton.setAttribute('disabled', true);
    }else{
      this._submitButton.classList.remove(this._params.inactiveButtonClass);
      this._submitButton.removeAttribute('disabled');
    }
  }
  
  //функция проверяет конкретный инпут на валидность
  _checkInputInvalid(input) {
    if(!input.validity.valid) {
      input.classList.add(this._params.inputErrorClass);
      const inputError = this._form.querySelector('.' + input.id +'-error');
  
      inputError.textContent = input.validationMessage;
      inputError.classList.add(this._params.errorClass);
    }else{
      input.classList.remove(this._params.inputErrorClass);
      const inputError = this._form.querySelector('.' + input.id +'-error');
  
      inputError.textContent = '';
      inputError.classList.remove(this._params.errorClass);
    }
  }
}
