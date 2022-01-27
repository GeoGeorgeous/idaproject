export default class Product {

  constructor(data, templateSelector, handleCardClick) {
    this._productName = data.name
    this._productDesc = data.desc
    this._productImage = data.image
    this._productPrice = data.price
    this._templateSelector = templateSelector;
    // this._handleCardClick = handleCardClick;
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
    this._productPrice = `${new Intl.NumberFormat('ru-RU').format(this._productPrice)} руб.`
  }

  // _setEventListeners() {
  //   // Получаем разметку кнопок лайка и корзины
  //   this._likeButton = this._productElement.querySelector('.card__like-button');
  //   this._deleteButton = this._productElement.querySelector('.card__delete-button');

  //   // Добаляем слушатель на кнопку лайка:
  //   this._likeButton.addEventListener('click', () => {
  //     this._likeCard();
  //   })

  //   // Добавляем слушатель на кнопку корзины:
  //   this._deleteButton.addEventListener('click', () => {
  //     this._removeCard();
  //   })

  //   // Добавляем слушатель lightbox:
  //   this._cardImageElement.addEventListener('click', this._handleCardClick)
  // }

  generateProductMarkUp() {
    // получаем разметку пустого товара из template
    this._cloneTemplate();
    this._formatPrice();
    // Находим элементы товара:
    this._productNameElement = this._productElement.querySelector('.product__title');
    this._productDescElement = this._productElement.querySelector('.product__desc');
    this._productImageElement = this._productElement.querySelector('.product__image');
    this._productPriceElement = this._productElement.querySelector('.product__price');

    // Подставляем данные в пустой товар:
    this._productImageElement.src = this._productImage;
    this._productImageElement.alt = this._productName;
    this._productNameElement.textContent = this._productName;
    this._productDescElement.textContent = this._productDesc;
    this._productPriceElement.textContent = this._productPrice;

    // Навешиваем слушателей событий:
    // this._setEventListeners();

    // Возваращем готовую верстку товара
    return this._productElement;
  }

  // _likeCard() {
  //   // Ставит лайк
  //   this._likeButton.classList.toggle('card__like-button_active');
  // }

  // _removeCard() {
  //   // Удаляет карточку
  //   this._productElement.remove();
  //   this._productElement = null;
  // }
}
