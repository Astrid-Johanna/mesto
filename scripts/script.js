let editButton = document.querySelector('.profile__editbutton');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');

let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__nameinput');
let jobInput = document.querySelector('.form__jopinput');

function openPopup() {
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}

popupClose.addEventListener('click', closePopup);

function handleFormSubmit (evt) {
    evt.preventDefault();
    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

formElement.addEventListener('submit', handleFormSubmit);
