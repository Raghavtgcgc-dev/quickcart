import { useParams } from 'react-router-dom';
import ProductList from './ProductList';
import { useCart } from '../context/CartContext';

function CategoryPage({ products }) {
  const { category } = useParams();
  const { addToCart } = useCart();

  const filtered = products.filter(p =>
    p.category === category
  );

  return (
    <div>
      <h2>{category}</h2>

      <ProductList 
        products={filtered}
        onAddToCart={addToCart}
      />
    </div>
  );
}

export default CategoryPage;