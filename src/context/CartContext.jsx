import { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage('cart', []);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const existing = cart.find(i => i.id === product.id);

    if (existing) {
      setCart(cart.map(i =>
        i.id === product.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(i => i.id !== id));
  };

  const updateQuantity = (id, qty) => {
    if (qty <= 0) return removeFromCart(id);

    setCart(cart.map(i =>
      i.id === id ? { ...i, quantity: qty } : i
    ));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const getTotalItems = () =>
    cart.reduce((t, i) => t + i.quantity, 0);

  const getTotalPrice = () =>
    cart.reduce((t, i) => t + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      isCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}