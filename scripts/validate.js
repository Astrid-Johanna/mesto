function enableValidation (params) {
  const forms = document.querySelectorAll(params.formSelector);
  const formsList = Array.from(forms);

  formsList.forEach(function(form) {
    const inputs = form.querySelectorAll(params.inputSelector);
    const inputsList = Array.from(inputs);

    // Invalid - не валидная 
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
    

    inputsList.forEach(function(input) {
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
      input.addEventListener('input', function() {
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

        const formInvalid = inputsList.some(function(input) {
          return !input.validity.valid;
        });
    
        if(formInvalid) {
          submitButton.classList.add(params.inactiveButtonClass);
          submitButton.setAttribute('disabled', true);
          
        }else{
          submitButton.classList.remove(params.inactiveButtonClass);
          submitButton.removeAttribute('disabled');
        }
      });



    });
  });
  
}
