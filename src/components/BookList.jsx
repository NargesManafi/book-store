import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useEffect, useState } from 'react';

import ShoppingCart from './header/ShoppingCart';
import Slider from 'react-slick';
import data from '../data/data.json';
import useShoppingCart from '../Hook/useShoppingCart';
import useSliderSettings from '../Hook/useSliderSettings';

const BookList = () => {
  const { addToCart } = useShoppingCart();
  const { sliderSettings } = useSliderSettings();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [addedItem, setAddedItem] = useState(null);
  useEffect(() => {
    if (addedItem) {
      // تایم‌اوت برای بستن پیام پس از 5 ثانیه
      const timer = setTimeout(() => {
        setAddedItem(null);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [addedItem]);

  const handleAddToCart = (book) => {
    // Check if the book is already in the cart
    const existingCartItemIndex = cartItems.findIndex((item) => item.id === book.id);

    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      const newCartItem = { ...book, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }

    setTotalPrice(totalPrice + book.price);
    setTotalItems(totalItems + 1);
    setAddedItem(book); // تنظیم محصول اضافه شده به سبد خرید
  };

  return (
    <div className="container">
      {data.map((list) => (
        <div key={list.list_name}>
          <div className="d-flex justify-content-end align-items-center mb-3">
            <p className="text-secondary text-right">{list.list_name}</p>
            <hr className="flex-grow-1" />
          </div>
          <Slider {...sliderSettings} className="rtl-slider">
            {list.books.map((book) => (
              <div key={book.title} className="mb-4">
                <div className="card" style={{ width: '200px', height: '300px', margin: '0 10px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)' }}>
                  <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    <img
                      src={book.image}
                      className="card-img-top"
                      alt={book.title}
                      style={{ width: 'auto', height: '50%', objectFit: 'cover' }}
                    />
                    <div className="card-body mt-2">
                      <h5 className="card-title text-secondary rtl small">{book.title}</h5>
                      <p className="card-text small">{book.price} <span className='text-secondary'>ریال</span></p>
                      <button className="btn btn-secondary" onClick={() => handleAddToCart(book)}>افزودن به سبد خرید</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}
      {addedItem && (
  <div className="alert alert-success alert-dismissible fade show fixed-top mb-4 d-flex align-items-center">
    <img
      src={addedItem.image}
      alt={addedItem.title}
      style={{ width: '50px', height: '50px', marginRight: '60px', marginLeft: '10px' }}
    />
    <span style={{ marginRight: '60px' }}>{addedItem.title} به سبد خرید اضافه شد.</span>
    <p className="mb-0 ml-2" style={{ marginRight: '60px' }}>مجموع قیمت: {totalPrice} ریال</p>
    <button
    style={{ marginRight: '60px' }}
      type="button"
      className="close mr-4"
      data-dismiss="alert"
      aria-label="بستن"
      onClick={() => setAddedItem(null)}
    >
      <span  aria-hidden="true">&times;</span>
    </button>
  </div>
)}


      <ShoppingCart
        cartItemsCount={totalItems}
        cartItems={cartItems}
        totalItems={totalItems}
        totalPrice={totalPrice}
        addToCart={handleAddToCart}
      />
    </div>
  );
}

export default BookList;