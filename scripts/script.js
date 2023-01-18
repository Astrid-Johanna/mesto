let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_jop');

// Выберите элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector('.profile__name');
const profilejob = document.querySelector('.profile__job');



function openPopup() {
    popup.classList.add('popup_opened');
    // в value записываем то, что лежи на странице и показываем в полях ввода.
    nameInput.value = profileName.textContent;
    jobInput.value = profilejob.textContent; 
}

editButton.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();

    // Получите значение полей jobInput и nameInput из свойства value
    const name = nameInput.value;
    const job = jobInput.value;


    // Вставьте новые значения с помощью textContent
    profileName.textContent = name;
    profilejob.textContent =  job;
    //вызываем функцию чтобы форма закрылвсь после нажатия сохранить.
    closePopup()
}

popupClose.addEventListener('click', closePopup);

formElement.addEventListener('submit', handleFormSubmit);
