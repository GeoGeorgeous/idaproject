import './index.css';
import Section from '../components/Section';
import Product from '../components/Product';
import {
  productsContainer, formElement, submitButton, inputSelector, errorClass,
} from '../utils/elements';
import defaultProducts from '../utils/defaultProducts';
import FormValidator from '../components/FormValidator';

// Создание экземпляра секции и дефолтных товаров
const productsSection = new Section(
  {
    items: defaultProducts,
    renderer: (data) => {
      const product = new Product(
        data,
        '#product',
      );
      productsContainer.append(product.generateProductMarkUp());
    },
  },
  productsContainer,
);

// Рендер дефолных товаров
productsSection.render();

// Функция возвращает объект с ключами и значениями выбранной формы
const getInputValues = (selectedForm) => {
  const form = new FormData(selectedForm);
  const formValues = {};
  /* eslint-disable-next-line */
  for (const [key, value] of form.entries()) {
    formValues[key] = value;
  }
  return formValues;
};

// Обработчик сабмита формы
const handleSubmit = (evt) => {
  evt.preventDefault();
  const newProduct = new Product(
    getInputValues(formElement),
    '#product',
  );
  productsSection.addItem(newProduct.generateProductMarkUp());
  formElement.removeEventListener('submit', handleSubmit);
  formElement.reset();
};

// Добавление слушателя на кнопку сабмита
formElement.addEventListener('submit', handleSubmit);

const formValidator = new FormValidator(
  submitButton,
  inputSelector,
  errorClass,
  formElement,
);
formValidator.enableValidation();
