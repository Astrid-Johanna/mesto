import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._images = this._popup.querySelector('.popup__img');
    this._subtitleImages = this._popup.querySelector('.popup__subtitle');
  }
  open(link, name) {
   this._images.src = link;
   this._images.alt = name;
   this._subtitleImages.textContent = name;
   super.open();
  }
}