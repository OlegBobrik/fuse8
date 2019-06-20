export default class List {
  constructor(el) {
    this._el = el;

    this._removeChild();
    this._fragment = document.createDocumentFragment();
  }

  addItem(item) {
    this._fragment.appendChild(item);
  }

  showList() {
    this._el.appendChild(this._fragment);
  }

  _removeChild() {
    const children = Array.from(this._el.children);
    children.forEach(child => this._el.removeChild(child));
  }
}