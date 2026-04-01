import { useCart } from '../context/CartContext';
import '../styles/ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useCart();   // ✅ get function from context

  return (
    <div className="product-card">
      
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
        />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <p>${product.price}</p>

        {/* ✅ ADD TO CART BUTTON */}
        <button 
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;