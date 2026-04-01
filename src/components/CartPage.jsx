import { useCart } from '../context/CartContext';

function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <div>
      <h1>Cart</h1>

      {cart.map(item => (
        <div key={item.id}>
          {item.name}

          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
          {item.quantity}
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>

          <button onClick={() => removeFromCart(item.id)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default CartPage;