import './index.css';
import Section from '../components/Section';
import Product from '../components/Product';
import { productsContainer, formElement, submitButton } from '../utils/elements';

import defaultProducts from '../utils/defaultProducts';


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

productsSection.render();

submitButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const form = new FormData(formElement);
  const formValues = {};
  /* eslint-disable-next-line */
  for (const [key, value] of form.entries()) {
    formValues[key] = value;
  }
  console.log(formValues);
  const newProduct = new Product(
    formValues,
    '#product',
  );
  productsSection.addItem(newProduct.generateProductMarkUp())
});
