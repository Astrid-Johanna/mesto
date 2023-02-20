const buttonOpenProfileEdit = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_for_profile');
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close');

const buttonOpenPopupCard = document.querySelector('.profile__addbutton');
const popupCard = document.querySelector('.popup_for_card');
const buttonClosePopupCard = popupCard.querySelector('.popup__close');

const popupBigImg = document.querySelector('.popup_for_img');
const popupCloseBigImg = popupBigImg.querySelector('.popup__close');

const popups = document.querySelectorAll('.popup');
const popupsList = Array.from(popups);

popupsList.forEach(function(popup) {
 popup.addEventListener('click', function(evt) {
  if(evt.target === popup) {
   closePopup(popup); 
  }
 });
});

function handleEsc(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);  
  }
}
// popup - HTML элемент  
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEsc);
}

//popup - HTML элемент 
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEsc);
}

buttonClosePopupProfile.addEventListener('click', function () {
    closePopup(popupProfile);
});

buttonOpenProfileEdit.addEventListener('click', function() {
    openPopup(popupProfile);
    fillProfileInput(); 
});

buttonOpenPopupCard.addEventListener('click', function() {
    openPopup(popupCard); 
});

buttonClosePopupCard.addEventListener('click', function () {
    closePopup(popupCard);
});

popupCloseBigImg.addEventListener('click',function () {
    closePopup(popupBigImg);
});

