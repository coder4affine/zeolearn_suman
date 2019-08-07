/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const about = ({ loadItems, items }) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    loadItems();
  }, []);

  const removeFromCart = item => {
    const updatedCard = cartItems.filter(x => x.id !== item.id);
    setCartItems(updatedCard);
  };

  const updateQuantity = (item, quantity) => {
    if (item.quantity + quantity === 0) {
      removeFromCart(item);
    } else {
      const index = cartItems.findIndex(x => x.id === item.id);
      const updatedCart = [
        ...cartItems.slice(0, index),
        { ...item, quantity: item.quantity + quantity },
        ...cartItems.slice(index + 1),
      ];
      setCartItems(updatedCart);
    }
  };

  return (
    <div>
      {items &&
        items.map(item => (
          <div key={item.id}>
            <span>{item.ItemName}</span>
            <span>{item.itemPrice}</span>
            <button
              type="button"
              onClick={() => setCartItems([...cartItems, { ...item, quantity: 1 }])}
            >
              Add To Cart
            </button>
          </div>
        ))}
      <h1>Your Cart Items</h1>
      <div>
        {cartItems &&
          cartItems.map(cartItem => (
            <div key={cartItem.id}>
              <span>{cartItem.ItemName}</span>
              <span>{cartItem.itemPrice * cartItem.quantity}</span>

              <button type="button" onClick={() => removeFromCart(cartItem)}>
                Remove From Cart
              </button>
              <button type="button" onClick={() => updateQuantity(cartItem, 1)}>
                +
              </button>
              <span>{cartItem.quantity}</span>
              <button type="button" onClick={() => updateQuantity(cartItem, -1)}>
                _
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

about.propTypes = {
  loadItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default about;
