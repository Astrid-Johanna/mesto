// enableValidation({
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   });

function enableValidation () {
  const forms = document.querySelectorAll('.popup__form');
  const formsList = Array.from(forms);

  formsList.forEach(function(form) {
    const inputs = form.querySelectorAll('.popup__input');
    const inputsList = Array.from(inputs);

    // Invalid - не валидная 
    const formInvalid = inputsList.some(function(input) {
      return !input.validity.valid;
    });

    const submitButton = form.querySelector('.popup__form-submit');

    if(formInvalid) {
      submitButton.classList.add('popup__form-submit_disabled');
      submitButton.setAttribute('disabled', true);
      
    }else{
      submitButton.classList.remove('popup__form-submit_disabled');
      submitButton.removeAttribute('disabled');
    }
    

    inputsList.forEach(function(input) {
      if(!input.validity.valid) {
        input.classList.add('popup__input_type_error');
        const inputError = form.querySelector('.' + input.id +'-error');

        inputError.textContent = input.validationMessage;
        inputError.classList.add('popup__error_visible');
      }else{
          input.classList.remove('popup__input_type_error');
          const inputError = form.querySelector('.' + input.id +'-error');

          inputError.textContent = '';
          inputError.classList.remove('popup__error_visible');
      }
      input.addEventListener('input', function() {
        if(!input.validity.valid) {
          input.classList.add('popup__input_type_error');
          const inputError = form.querySelector('.' + input.id +'-error');

          inputError.textContent = input.validationMessage;
          inputError.classList.add('popup__error_visible');
        }else{
            input.classList.remove('popup__input_type_error');
            const inputError = form.querySelector('.' + input.id +'-error');
  
            inputError.textContent = '';
            inputError.classList.remove('popup__error_visible');
        }

        const formInvalid = inputsList.some(function(input) {
          return !input.validity.valid;
        });
    
        if(formInvalid) {
          submitButton.classList.add('popup__form-submit_disabled');
          submitButton.setAttribute('disabled', true);
          
        }else{
          submitButton.classList.remove('popup__form-submit_disabled');
          submitButton.removeAttribute('disabled');
        }
      });



    });
  });
  
}
