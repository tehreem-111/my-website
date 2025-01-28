import React from 'react';

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="space-y-4">
              {/* Gradient Graphic T-shirt */}
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/Frame 33 (2).png"
                    alt="Gradient Graphic T-shirt"
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-bold text-lg">Gradient Graphic T-shirt</h2>
                    <p className="text-gray-500 text-sm">Size: Large</p>
                    <p className="text-gray-500 text-sm">Color: White</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">$145</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button className="px-2 py-1 border rounded-md">-</button>
                    <span>1</span>
                    <button className="px-2 py-1 border rounded-md">+</button>
                  </div>
                </div>
              </div>

              {/* Checkered Shirt */}
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/Frame 33 (3).png"
                    alt="Checkered Shirt"
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-bold text-lg">Checkered Shirt</h2>
                    <p className="text-gray-500 text-sm">Size: Medium</p>
                    <p className="text-gray-500 text-sm">Color: Red</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">$180</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button className="px-2 py-1 border rounded-md">-</button>
                    <span>1</span>
                    <button className="px-2 py-1 border rounded-md">+</button>
                  </div>
                </div>
              </div>

              {/* Skinny Fit Jeans */}
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/Frame 33 (4).png"
                    alt="Skinny Fit Jeans"
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-bold text-lg">Skinny Fit Jeans</h2>
                    <p className="text-gray-500 text-sm">Size: Large</p>
                    <p className="text-gray-500 text-sm">Color: Blue</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">$240</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button className="px-2 py-1 border rounded-md">-</button>
                    <span>1</span>
                    <button className="px-2 py-1 border rounded-md">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full sm:w-1/3 bg-gray-50 shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500">Subtotal</p>
              <p className="font-bold">$565</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500">Discount (-20%)</p>
              <p className="text-red-500 font-bold">-$113</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500">Delivery Fee</p>
              <p className="font-bold">$15</p>
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold">$467</p>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full border rounded-md px-4 py-2 mb-4"
              />
              <button className="w-full bg-black text-white font-bold py-2 rounded-md">
                Apply
              </button>
              <button className="w-full bg-black text-white font-bold py-2 rounded-md mt-4">
                Go to Checkout →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;