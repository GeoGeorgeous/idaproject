export default class Product {
  constructor(data, templateSelector) {
    this._productName = data.name;
    this._productDesc = data.desc;
    this._productImage = data.image;
    this._productPrice = data.price;
    this._templateSelector = templateSelector;
  }

  _cloneTemplate() {
    // Клонирует template и записывает пустой клон в this._productElement:
    this._productElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.product')
      .cloneNode(true);
  }

  _formatPrice() {
    // Форматирование цены
    this._productPrice = `${new Intl.NumberFormat('ru-RU').format(this._productPrice)} руб.`;
  }

  _setEventListeners() {
    // Установка слушателей

    // Получаем разметку кнопку корзины
    this._deleteButton = this._productElement.querySelector('.product__delete-button');

    // Добавляем слушатель на кнопку корзины:
    this._deleteButton.addEventListener('click', () => {
      this._removeProduct();
    });
  }

  generateProductMarkUp() {
    // Генерация html разметки с товаром

    // получаем разметку пустого товара из template
    this._cloneTemplate();
    this._formatPrice();

    // Находим элементы товара:
    this._productNameElement = this._productElement.querySelector('.product__title');
    this._productDescElement = this._productElement.querySelector('.product__desc');
    this._productImageElement = this._productElement.querySelector('.product__image');
    this._productPriceElement = this._productElement.querySelector('.product__price');

    // Подставляем данные в разметку:
    this._productImageElement.src = this._productImage;
    this._productImageElement.alt = this._productName;
    this._productNameElement.textContent = this._productName;
    this._productDescElement.textContent = this._productDesc;
    this._productPriceElement.textContent = this._productPrice;

    // Навешиваем слушателей событий:
    this._setEventListeners();

    // Возваращем готовую верстку товара
    return this._productElement;
  }

  _removeProduct() {
    // Удаление товара

    this._productElement.classList.add('remove-animation'); // анимация удаления
    const deleteElement = () => { // удаляем элемент после анимации
      this._productElement.remove();
      this._productElement = null;
    };
    setTimeout(deleteElement, 420);
  }
}
