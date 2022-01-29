export default class Section {
  constructor({ items, renderer }, containerElement) {
    this._items = items;
    this._renderer = renderer;
    this._containerElement = containerElement;
  }

  render(sorted = false) {
    // Рендер товаров
    if (sorted) {
      this._itemsSorted.forEach((item) => {
        this._renderer(item);
      });
    } else {
      this._items.forEach((item) => {
        this._renderer(item);
      });
    }
  }

  sortByProperty(property, type) {
    // Сортировка товаров
    let isSorted = false;

    while (this._containerElement.firstChild) {
      // очищаем DOM
      this._containerElement.removeChild(this._containerElement.lastChild);
    }
    if (type === 'byPriceIncrease') {
      // по возрастанию
      this._itemsSorted = [...this._items].sort((a, b) => a[property] - b[property]);
      isSorted = true;
    }
    if (type === 'byPriceDecrease') {
      // по убыванию
      this._itemsSorted = [...this._items].sort((a, b) => b[property] - a[property]);
      isSorted = true;
    }
    this.render(isSorted); // рендерим новое положение товаров
  }

  addItem(data, element) {
    // Добавление товара
    this._items.unshift(data);
    element.classList.add('new-product');
    this._containerElement.prepend(element);
  }

  deleteItem({
    name, desc, image, price,
  }) {
    // Удаление товара
    this._items
      .splice(this._items
        .findIndex( // находим нужный индекс
          (item) => { // удаляем товар при совпадении всех свойств
            if (
              item.name === name
              && item.desc === desc
              && item.image === image
              && item.price === price) {
              return true;
            }
            return false;
          },
        ), 1); // удаляем только первое совпдаение
  }
}
