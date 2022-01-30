/* eslint-disable */
import './index.css';
import Section from '../components/Section';
import Product from '../components/Product';
import {
  productsContainer,
  formElement,
  submitButton,
  inputSelector,
  errorClass,
  sortButton,
  notificationsSelector,
} from '../utils/elements';
import Notification from '../components/Notification';
import defaultProducts from '../utils/defaultProducts';
import FormValidator from '../components/FormValidator';

const notify = new Notification(notificationsSelector);

// Создание экземпляра секции и дефолтных товаров
const productsSection = new Section(
  {
    items: defaultProducts,
    renderer: (data) => {
      const product = new Product(
        data,
        '#product',
        (selectedProduct) => {
          notify.popup('Товар успешно удалён');
          productsSection.deleteItem(selectedProduct);
        },
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
  const inputData = getInputValues(formElement);
  const newProduct = new Product(
    inputData,
    '#product',
    (selectedProduct) => {
      notify.popup('Товар успешно удалён');
      productsSection.deleteItem(selectedProduct);
    },
  );
  productsSection.addItem(inputData, newProduct.generateProductMarkUp());
  // formElement.removeEventListener('submit', handleSubmit);
  formElement.reset();
  notify.popup('Товар успешно добавлен');
};

// Добавление слушателя на кнопку сабмита
formElement.addEventListener('submit', handleSubmit);

const formValidator = new FormValidator(
  submitButton,
  inputSelector,
  errorClass,
  formElement,
);

// Активация валидатора
formValidator.enableValidation();

// Обработчик сортировки
const handleSorting = () => {
  notify.popup('Отсортировано!');
  productsSection.sortByProperty(sortButton.value);
};

sortButton.addEventListener('change', handleSorting);
