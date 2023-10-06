import { useState } from 'react';

function useCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    const updatedCart = [...cart, book];
    setCart(updatedCart);
  };

  return {
    cart,
    addToCart,
  };
}

export default useCart;
