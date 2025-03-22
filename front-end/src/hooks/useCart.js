import { useState, useEffect } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('weddingPlannerCart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(parsedCart);
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
      }
    }
  }, []);
  
  // Update localStorage and calculate total whenever cart changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('weddingPlannerCart', JSON.stringify(cartItems));
      
      // Calculate total
      const total = cartItems.reduce((sum, item) => sum + item.price, 0);
      setCartTotal(total);
    } else {
      localStorage.removeItem('weddingPlannerCart');
      setCartTotal(0);
    }
  }, [cartItems]);
  

  const addToCart = (item) => {
    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(
      cartItem => cartItem.id === item.id && cartItem.type === item.type
    );
    
    if (existingItemIndex >= 0) {
      // If item exists, replace it (for packages, this means updating the selected package)
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex] = item;
      setCartItems(updatedCart);
    } else {
      // Otherwise add as new item
      setCartItems(prevItems => [...prevItems, item]);
    }
  };
  
  /**
   * Remove an item from the cart
   * @param {string} itemId - The ID of the item to remove
   * @param {string} itemType - The type of the item (e.g., 'package', 'service')
   */
  const removeFromCart = (itemId, itemType) => {
    setCartItems(prevItems => 
      prevItems.filter(item => !(item.id === itemId && item.type === itemType))
    );
  };
  
  /**
   * Clear all items from the cart
   */
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('weddingPlannerCart');
  };
  
  /**
   * Get the number of items in the cart
   * @returns {number} The number of items in the cart
   */
  const getCartCount = () => {
    return cartItems.length;
  };
  
  return {
    cartItems,
    cartTotal,
    addToCart,
    removeFromCart,
    clearCart,
    getCartCount
  };
};

export default useCart;