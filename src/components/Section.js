export default class Section {
  constructor({items, renderer}, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector); 
  }
  //render - рисовать, renderer - рисователь.
  render() {
    return this._items.map((item) => {
      return this._renderer(item); 
    });  
  }

  addItem(domElement) {
   this._container.prepend(domElement) 
  }

}