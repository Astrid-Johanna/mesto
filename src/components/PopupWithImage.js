import Popup from "./Popup.js";
import {images, subtitleImages} from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  open(link, name) {
   images.src = link;
   images.alt = name;
   subtitleImages.textContent = name;
   super.open();
  }
}