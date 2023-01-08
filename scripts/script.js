let editButton = document.querySelector('.profile__editbutton');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');

// function openPopup() {
//     popup.classList.add('popup_opened');
// }

// editButton.addEventListener('click', openPopup);

// function closePopup() {
//     popup.classList.remove('popup_opened');
// }

// popupClose.addEventListener('click', closePopup);

function togglePopup() {
    popup.classList.toggle('popup_opened');
}

editButton.addEventListener('click', togglePopup);
popupClose.addEventListener('click', togglePopup);
