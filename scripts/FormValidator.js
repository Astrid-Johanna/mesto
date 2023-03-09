export class FormValidator {
  constructor(params, inpat) {
   this._inpat = inpat;
   this._params = params; 
  }
  
  function enableValidation (params) {
    const forms = document.querySelectorAll(params.formSelector);
    const formsList = Array.from(forms);
  
    formsList.forEach(function(form) {
      const inputs = form.querySelectorAll(params.inputSelector);
      const inputsList = Array.from(inputs);
    
      _checkformAndInputInvalid(params, inputsList, form, true);
    
      form.addEventListener('reset', function() { // собыите `reset` происходит когда вызывается `reset` у формы
        setTimeout(function() {  // добавим таймаут, чтобы `checkformInvalid` вызвался уже после сохранения формы
          _checkformAndInputInvalid(params, inputsList, form, false);
        },0);
      }) 
    }); 
  }
  
  function _checkformAndInputInvalid(params, inputsList, form, needInputEventLisener) { 
    _checkformInvalid(params, inputsList, form);
      
    inputsList.forEach(function(input) {
      _checkInputInvalid (params, input, form);
      //if проверяет на true или false
      if(needInputEventLisener === true) {   
        input.addEventListener('input', function() {
          _checkInputInvalid (params, input, form);
          _checkformInvalid(params, inputsList, form);
        });
      }  
    });
  }  
  //проверяет форму на волидацию инпутов и изменяет состояние кнопки сохранить 
  function _checkformInvalid(params, inputsList, form) {
    const formInvalid = inputsList.some(function(input) {
      return !input.validity.valid;
    });
  
    const submitButton = form.querySelector(params.submitButtonSelector);
  
    if(formInvalid) {
      submitButton.classList.add(params.inactiveButtonClass);
      submitButton.setAttribute('disabled', true);
      
    }else{
      submitButton.classList.remove(params.inactiveButtonClass);
      submitButton.removeAttribute('disabled');
    }
  }
  
  //функция проверяет конкретный инпут на валидность
  function _checkInputInvalid (params, input, form) {
    if(!input.validity.valid) {
      input.classList.add(params.inputErrorClass);
      const inputError = form.querySelector('.' + input.id +'-error');
  
      inputError.textContent = input.validationMessage;
      inputError.classList.add(params.errorClass);
    }else{
      input.classList.remove(params.inputErrorClass);
      const inputError = form.querySelector('.' + input.id +'-error');
  
      inputError.textContent = '';
      inputError.classList.remove(params.errorClass);
    }
  }
}
// function enableValidation (params) {
//   const forms = document.querySelectorAll(params.formSelector);
//   const formsList = Array.from(forms);

//   formsList.forEach(function(form) {
//     const inputs = form.querySelectorAll(params.inputSelector);
//     const inputsList = Array.from(inputs);
  
//     checkformAndInputInvalid(params, inputsList, form, true);
  
//     form.addEventListener('reset', function() { // собыите `reset` происходит когда вызывается `reset` у формы
//       setTimeout(function() {  // добавим таймаут, чтобы `checkformInvalid` вызвался уже после сохранения формы
//         checkformAndInputInvalid(params, inputsList, form, false);
//       },0);
//     }) 
//   }); 
// }

// function checkformAndInputInvalid(params, inputsList, form, needInputEventLisener) { 
//   checkformInvalid(params, inputsList, form);
    
//   inputsList.forEach(function(input) {
//     checkInputInvalid (params, input, form);
//     //if проверяет на true или false
//     if(needInputEventLisener === true) {   
//       input.addEventListener('input', function() {
//         checkInputInvalid (params, input, form);
//         checkformInvalid(params, inputsList, form);
//       });
//     }  
//   });
// }  
// //проверяет форму на волидацию инпутов и изменяет состояние кнопки сохранить 
// function checkformInvalid(params, inputsList, form) {
//   const formInvalid = inputsList.some(function(input) {
//     return !input.validity.valid;
//   });

//   const submitButton = form.querySelector(params.submitButtonSelector);

//   if(formInvalid) {
//     submitButton.classList.add(params.inactiveButtonClass);
//     submitButton.setAttribute('disabled', true);
    
//   }else{
//     submitButton.classList.remove(params.inactiveButtonClass);
//     submitButton.removeAttribute('disabled');
//   }
// }

// //функция проверяет конкретный инпут на валидность
// function checkInputInvalid (params, input, form) {
//   if(!input.validity.valid) {
//     input.classList.add(params.inputErrorClass);
//     const inputError = form.querySelector('.' + input.id +'-error');

//     inputError.textContent = input.validationMessage;
//     inputError.classList.add(params.errorClass);
//   }else{
//     input.classList.remove(params.inputErrorClass);
//     const inputError = form.querySelector('.' + input.id +'-error');

//     inputError.textContent = '';
//     inputError.classList.remove(params.errorClass);
//   }
// }
