import { FaShoppingCart, FaTimes, FaUser } from 'react-icons/fa';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const ShoppingCart = ({
  cartItemsCount,
  cartItems,
  totalPrice,
  addToCart,
}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPurchaseCompleted, setIsPurchaseCompleted] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleCompletePurchase = () => {
    setIsPurchaseCompleted(true);
  };

  const handleIncrementQuantity = (item) => {
    const updatedItem = { ...item };
    updatedItem.quantity += 1;
    addToCart(updatedItem);
  };

  const handleDecrementQuantity = (item) => {
    if (item.quantity > 1) {
      const updatedItem = { ...item };
      updatedItem.quantity -= 1;
      addToCart(updatedItem);
    }
  };

  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <div className="col-12">
          <div style={{ position: 'absolute', top: '20px', left: '50px', display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '30px', fontSize: '32px', backgroundColor: 'green', padding: '5px', borderRadius: '50%', color: 'white', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Link to="/login">
                <FaUser style={{ color: 'white' }} />
              </Link>
            </div>
            <div style={{ marginRight: '10px', fontSize: '32px' }}>
              <FaShoppingCart className="text-success" style={{ cursor: 'pointer' }} onClick={toggleCart} />
            </div>
            <div>{cartItemsCount}</div>
          </div>
          {isCartOpen && (
            <div className="bg-light p-2 position-absolute overflow-auto" style={{ top: '0', left: '0', width: '400px', maxHeight: '500px', zIndex: '5' }}>
              <h4>
                سبد خرید
                <FaTimes className="text-danger" style={{ cursor: 'pointer' }} onClick={closeCart} />
              </h4>
              {cartItems.length > 0 ? (
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index}>
                      <div><img src={item.image} alt={item.title} style={{ width: '50px', height: '50px' }} /></div>
                      <div><span>{item.title}</span></div>
                      <div>
                        <span>{item.price} ریال</span>
                        <button onClick={() => handleIncrementQuantity(item)}>+</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleDecrementQuantity(item)}>-</button>
                        <div><span>{item.price * item.quantity} ریال</span></div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>سبد خرید خالی است.</p>
              )}
              {isPurchaseCompleted ? (
                <div>
                  <p>سفارش شما با موفقیت ثبت شد!</p>
                  <p>مجموع قیمت: {totalPrice} ریال</p>
                  <button className="btn btn-success" onClick={handleCompletePurchase}>ادامه خرید</button>
                </div>
              ) : (
                <div>
                  <button className="btn btn-success" onClick={handleCompletePurchase}>تکمیل خرید</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
