
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from './CartContext';

const CartModal = ({ isOpen, onClose }) => {
  const { cartItems, cartTotal, removeFromCart } = useCartContext();
  const navigate = useNavigate();
  
  if (!isOpen) return null;
  
  const handleContinueShopping = () => {
    onClose();
    navigate("/")
  };
  
  const handleCheckout = () => {
    navigate('/checkout');
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>
        
        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Your Cart
                </h3>
                
                {cartItems.length === 0 ? (
                  <div className="mt-4 text-gray-500">
                    Your cart is empty.
                  </div>
                ) : (
                  <>
                    <div className="mt-4 space-y-4">
                      {cartItems.map((item) => (
                        <div key={`${item.type}-${item.id}`} className="flex justify-between items-center border-b pb-3">
                          <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-500">{item.vendorName}</p>
                            <p className="text-wedding-purple font-medium">${item.price.toLocaleString()}</p>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id, item.type)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 border-t pt-4">
                      <div className="flex justify-between font-medium">
                        <span>Total:</span>
                        <span>${cartTotal.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-medium mb-2">Payment Option:</h4>
                      <div className="border rounded p-3 flex items-center justify-center">
                        <div className="flex flex-col items-center">
                          <img 
                            src="/chapa-logo.png" 
                            alt="Chapa Payment" 
                            className="h-10 object-contain"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://chapa.co/assets/images/chapa_logo.svg";
                            }}
                          />
                          <span className="text-sm font-medium mt-1">Pay with Chapa</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-4 py-3 sm:px-6  sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-wedding-purple text-base font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wedding-purple sm:ml-3 sm:w-auto sm:text-sm ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wedding-purple sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
