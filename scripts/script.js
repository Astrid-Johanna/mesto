let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');



function openPopup() {
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}

popupClose.addEventListener('click', closePopup);

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__form-input-name');
let jobInput = document.querySelector('.popup__form-input-jop');


function handleFormSubmit (evt) {
    evt.preventDefault();

    // Получите значение полей jobInput и nameInput из свойства value
    const Name = nameInput.value;
    const Job = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    const profileName = document.querySelector('.profile__name');
    const profilejob = document.querySelector('.profile__job');

    // Вставьте новые значения с помощью textContent
    profileName.textContent = Name;
    profilejob.textContent =  Job;
    //вызываем функцию чтобы форма закрылвсь после нажатия сохранить.
    closePopup()
}

formElement.addEventListener('submit', handleFormSubmit);
