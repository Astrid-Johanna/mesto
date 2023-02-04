const buttonOpenProfileEdit = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_for_profile');
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close');

// Находим форму в DOM
const formElementProfile = popupProfile.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_jop');

// Выберите элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector('.profile__name');
const profilejob = document.querySelector('.profile__job');

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
    const job = jobInput.value;


    // Вставьте новые значения с помощью textContent
    profileName.textContent = name;
    profilejob.textContent =  job;
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

formElementProfile.addEventListener('submit', handleFormSubmitProfile);

buttonOpenProfileEdit.addEventListener('click', function() {
    openPopup(popupProfile);
     // в value записываем то, что лежи на странице и показываем в полях ввода.
     nameInput.value = profileName.textContent;
     jobInput.value = profilejob.textContent;
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
