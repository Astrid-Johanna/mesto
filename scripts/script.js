let editButton = document.querySelector('.profile__editbutton');
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
let formElement = document.querySelector('.form');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__form-input-name');
let jobInput = document.querySelector('.popup__form-input-jop');


function handleFormSubmit (evt) {
    evt.preventDefault();

    // Получите значение полей jobInput и nameInput из свойства value
    nameInput.value;
    jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    let name = document.querySelector('.profile__name');
    let job = document.querySelector('.profile__job');

    // Вставьте новые значения с помощью textContent
    name.textContent = "";
    job.textContent =  "";
    //вызываем функцию чтобы форма закрылвсь после нажатия сохранить.
    closePopup()
}

formElement.addEventListener('submit', handleFormSubmit);
