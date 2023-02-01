const editButtonProfile = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_for_profile');
const popupCloseProfile = popupProfile.querySelector('.popup__close');

// Находим форму в DOM
const formElementProfile = popupProfile.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_jop');

// Выберите элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector('.profile__name');
const profilejob = document.querySelector('.profile__job');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const templateCard = document.querySelector('#group__element').content;
const placeForCards = document.querySelector('.group__elements');

const addButtonCard = document.querySelector('.profile__addbutton');

const popupCard = document.querySelector('.popup_for_card');
const popupCloseCard = popupCard.querySelector('.popup__close');
const formElementCard = popupCard.querySelector('.popup__form');
const placeNameInput = popupCard.querySelector('.popup__input_type_place');
const imgLinkInput = popupCard.querySelector('.popup__input_type_link');

const popupBigImg = document.querySelector('.popup_for_img');
const popupCloseBigImg = popupBigImg.querySelector('.popup__close');

function BigImg (card) {
  popupBigImg.querySelector('.popup__img').src = card.link;
  popupBigImg.querySelector('.popup__subtitle').textContent = card.name;
}

//card - это объект со свойствами link, name
function renderCard(card) {
  const copytemplateCard = templateCard.querySelector('.group__element').cloneNode(true);
  copytemplateCard.querySelector('.group__img').src = card.link;
  copytemplateCard.querySelector('.group__place').textContent = card.name;
  placeForCards.prepend(copytemplateCard);

  placeForCards.querySelector('.group__heart').addEventListener('click', function(evt) {
    evt.target.classList.toggle('group__heart_active');
  });
  placeForCards.querySelector('.group__img').addEventListener('click', function() {
    openPopup(popupBigImg);
  }); 
}

initialCards.forEach(renderCard);

// popup - HTML элемент  
function openPopup(popup) {
    popup.classList.add('popup_opened'); 
}


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

}

popupCloseProfile.addEventListener('click', function () {
    closePopup(popupProfile);
});

formElementProfile.addEventListener('submit', handleFormSubmitProfile);

editButtonProfile.addEventListener('click', function() {
    openPopup(popupProfile);
     // в value записываем то, что лежи на странице и показываем в полях ввода.
     nameInput.value = profileName.textContent;
     jobInput.value = profilejob.textContent;
});

addButtonCard.addEventListener('click', function() {
    openPopup(popupCard); 
});

popupCloseCard.addEventListener('click', function () {
  closePopup(popupCard);
});

formElementCard.addEventListener('submit', handleFormSubmitCard);

popupCloseBigImg.addEventListener('click',function () {
  closePopup(popupBigImg);
});
