// Находим форму в DOM
const formElementProfile = popupProfile.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_job');
// Выберите элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const templateCard = document.querySelector('#group__element').content;
const placeForCards = document.querySelector('.group__elements');
const formElementCard = popupCard.querySelector('.popup__form');
const placeNameInput = popupCard.querySelector('.popup__input_type_place');
const imgLinkInput = popupCard.querySelector('.popup__input_type_link');


function fillProfileInput () {
// в value записываем то, что лежи на странице и показываем в полях ввода.
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
fillProfileInput();

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

// handle - обрабатывать
function handleFormSubmitProfile (evt) {
    //отмена настроики HTML отправление формы
    evt.preventDefault();

    // Получите значение полей jobInput и nameInput из свойства value
    const name = nameInput.value;
    const job = jobInput.value;

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

const buttonAddProfile = document.querySelector('.popup__form-submit');

formElementProfile.addEventListener('submit', handleFormSubmitProfile);

formElementCard.addEventListener('submit', handleFormSubmitCard);

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__form-submit',
  inactiveButtonClass: 'popup__form-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

