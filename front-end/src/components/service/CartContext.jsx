import React, { createContext, useContext } from 'react';
import useCart from '../../hooks/useCart';

// Create context
const CartContext = createContext();

/**
 * Provider component that wraps app and makes cart context available
 * @param {Object} props - Component props
 */
export const CartProvider = ({ children }) => {
  const cart = useCart();
  
  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};

/**
 * Custom hook to use the cart context
 * @returns {Object} Cart context
 */
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

export default CartContext;