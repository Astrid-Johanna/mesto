const buttonOpenProfileEdit = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_for_profile');
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close');

// Находим форму в DOM
const formElementProfile = popupProfile.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_job');

// находим форму в DOM по name ??? почему ломаеться добавила s
// const formProfile = document.forms.popupformProfile;
// const nameForm = formProfile.elements.name;
// const jobForm = formProfile.elements.job;





// Выберите элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const templateCard = document.querySelector('#group__element').content;
const placeForCards = document.querySelector('.group__elements');

const buttonOpenPopupCard = document.querySelector('.profile__addbutton');

const popupCard = document.querySelector('.popup_for_card');
const buttonClosePopupCard = popupCard.querySelector('.popup__close');
const formElementCard = popupCard.querySelector('.popup__form');
const placeNameInput = popupCard.querySelector('.popup__input_type_place');
const imgLinkInput = popupCard.querySelector('.popup__input_type_link');

const popupBigImg = document.querySelector('.popup_for_img');
const popupCloseBigImg = popupBigImg.querySelector('.popup__close');

function fillProfileInput () {
// в value записываем то, что лежи на странице и показываем в полях ввода.
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
fillProfileInput();


// popup - HTML элемент  
function openPopup(popup) {
  popup.classList.add('popup_opened'); 
}

//cardDescription - это объект со свойствами link, name
// функция возвращает html элемент
function createCard(cardDescription) {
  const copyTemplateCard = templateCard.querySelector('.group__element').cloneNode(true);
  const imgForCopyTemplateCard = copyTemplateCard.querySelector('.group__img');
  const placeForCopyTemplateCard = copyTemplateCard.querySelector('.group__place');

  imgForCopyTemplateCard.src = cardDescription.link;
  imgForCopyTemplateCard.alt = cardDescription.name;
  placeForCopyTemplateCard.textContent = cardDescription.name;
  
  const likeForCopyTemplateCard = copyTemplateCard.querySelector('.group__heart');

  likeForCopyTemplateCard.addEventListener('click', function() {
    likeForCopyTemplateCard.classList.toggle('group__heart_active');
  });

  imgForCopyTemplateCard.addEventListener('click', function() {
    openPopup(popupBigImg);
    popupBigImg.querySelector('.popup__img').src = cardDescription.link;
    popupBigImg.querySelector('.popup__img').alt = cardDescription.name;
    popupBigImg.querySelector('.popup__subtitle').textContent = cardDescription.name;
  }); 

  copyTemplateCard.querySelector('.group_delete').addEventListener('click', function() {
    copyTemplateCard.remove();
  });
  return copyTemplateCard;
}

function renderCard(cardDescription) {
  const newCard = createCard(cardDescription);
  placeForCards.prepend(newCard);
}

initialCards.forEach(renderCard);

//popup - HTML элемент 
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

// handle - обрабатывать
function handleFormSubmitProfile (evt) {
    //отмена настроики HTML отправление формы
    evt.preventDefault();

    // Получите значение полей jobInput и nameInput из свойства value
    const name = nameInput.value;
    //const name = nameForm.value;
    const job = jobInput.value;
    // const job = jobForm.value;


    // Вставьте новые значения с помощью textContent
    profileName.textContent = name;
    profileJob.textContent =  job;
    //вызываем функцию чтобы форма закрылвсь после нажатия сохранить.
    closePopup(popupProfile);
}

function handleFormSubmitCard (evt) {
    evt.preventDefault();

    const placeName = placeNameInput.value;
    const imgLink = imgLinkInput.value;
    
    renderCard({
      name: placeName,
      link: imgLink
    });
    closePopup(popupCard);
    
    formElementCard.reset();

}
 buttonClosePopupProfile.addEventListener('click', function () {
    closePopup(popupProfile);
});

const buttonAddProfile = document.querySelector('.popup__form-submit');

//состояние кнопки отправить данные профайла
// function setSubmitButtonState (isFormValid) {
//   if (isFormValid) {
//     buttonAddProfile.removeAttribute('disabled'); //??
//     buttonAddProfile.classList.remove('popup__form-submit_btn_disabled');
//   } else {
//   buttonAddProfile.setAttribute('disabled', true);
//   buttonAddProfile.classList.add('popup__form-submit_btn_disabled');
//   }
// }

formElementProfile.addEventListener('submit', handleFormSubmitProfile);
// или 
//formProfile.addEventListener('submit', handleFormSubmitProfile);

// formProfile.addEventListener('input', function (evt) {
//   const isValid = nameForm.value.length > 0 && jobForm.value.length > 0;
//   setSubmitButtonState (isFormValid);
// });

buttonOpenProfileEdit.addEventListener('click', function() {
    openPopup(popupProfile); 
});

buttonOpenPopupCard.addEventListener('click', function() {
    openPopup(popupCard); 
});

buttonClosePopupCard.addEventListener('click', function () {
  closePopup(popupCard);
});

formElementCard.addEventListener('submit', handleFormSubmitCard);

popupCloseBigImg.addEventListener('click',function () {
  closePopup(popupBigImg);
});

enableValidation ();
