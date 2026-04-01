import { useCart } from '../context/CartContext';

function CartSidebar() {
  const { cart, isCartOpen, toggleCart } = useCart();

  return (
    <div style={{
      position: 'fixed',
      right: isCartOpen ? '0' : '-300px',
      width: '300px',
      height: '100%',
      background: 'white'
    }}>
      <button onClick={toggleCart}>Close</button>

      {cart.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default CartSidebar;