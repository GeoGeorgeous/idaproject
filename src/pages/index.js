import './index.css';
import Section from '../components/Section';
import Product from '../components/Product';
import productsContainer from '../utils/elements';

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
