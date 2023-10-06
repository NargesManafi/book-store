import { useState } from 'react';

function useShoppingCart() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (book) => {
    const updatedCart = [...cart, book];
    setCart(updatedCart);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return {
    cart,
    isCartOpen,
    addToCart,
    toggleCart,
    closeCart,
  };
}

export default useShoppingCart;
