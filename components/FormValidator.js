export default class FormValidator {
  constructor(params, form) {
   this._form = form;
   this._params = params; 
  }
  
  enableValidation () {
    const inputs = this._form.querySelectorAll(this._params.inputSelector);
    // Array.from - делаем массив
    this._inputsList = Array.from(inputs);
  
    this._checkformAndInputInvalid();
  
    this._form.addEventListener('reset',() => { // собыите `reset` происходит когда вызывается `reset` у формы
      setTimeout(() => {  // добавим таймаут, чтобы `checkformInvalid` вызвался уже после сохранения формы
        this._toggleButtonState();
      },0);
    }) 
   
  }
  
  _checkformAndInputInvalid() { 
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
  
    const submitButton = this._form.querySelector(this._params.submitButtonSelector);
  
    if(formInvalid) {
      submitButton.classList.add(this._params.inactiveButtonClass);
      submitButton.setAttribute('disabled', true);
      
    }else{
      submitButton.classList.remove(this._params.inactiveButtonClass);
      submitButton.removeAttribute('disabled');
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
