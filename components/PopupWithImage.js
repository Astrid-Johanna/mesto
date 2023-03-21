import Popup from "./Popup.js";
import {images, subtitleImages} from '../pages/index.js';

export default class PopupWithImage extends Popup {
  

  open(link, name) {
   images.src = link;
   images.alt = name;
   subtitleImages.textContent = name;
   super.open();
  }

}