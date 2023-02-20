function enableValidation (params) {
  const forms = document.querySelectorAll(params.formSelector);
  const formsList = Array.from(forms);

  formsList.forEach(function(form) {
    const inputs = form.querySelectorAll(params.inputSelector);
    const inputsList = Array.from(inputs);
  
    checkformInvalid(params, inputsList, form);
    
    inputsList.forEach(function(input) {
      checkInputInvalid (params, input, form);
      
      input.addEventListener('input', function() {
        checkInputInvalid (params, input, form);
        checkformInvalid(params, inputsList, form);
      });
    });
    form.addEventListener('reset', function() { // собыите `reset` происходит когда вызывается `reset` у формы
      setTimeout(function() {  // добавим таймаут, чтобы `checkformInvalid` вызвался уже после сохранения формы
       checkformInvalid(params, inputsList, form);
       inputsList.forEach(function(input) {
        checkInputInvalid (params, input, form);
       });
       checkInputInvalid (params, input, form);
      }, 0);
    }) 
  }); 
}

//проверяет форму на волидацию инпутов и изменяет состояние кнопки сохранить 
function checkformInvalid(params, inputsList, form) {
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
function checkInputInvalid (params, input, form) {
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
