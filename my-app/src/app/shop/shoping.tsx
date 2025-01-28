'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const Cart = () => {
  const router=useRouter();
  const [selectedColor, setSelectedColor] = useState('brown');
  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);

  const colors = ['brown', 'green', 'navy'];
  const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

  const handleColorChange = (color: React.SetStateAction<string>) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size: React.SetStateAction<string>) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (type: string) => {
    if (type === 'increase') {
      setQuantity((prev) => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-evenly mt-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
      {/* Left Images */}
      <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-3 w-full md:w-auto">
        <div className="w-1/3 md:w-full">
          <Image
            src="/image 1 (1).png"
            className="w-full h-auto"
            width={100}
            height={150}
            alt="Product 1"
          />
        </div>
        <div className="w-1/3 md:w-full">
          <Image
            src="/image 1 (1).png"
            className="w-full h-auto"
            width={100}
            height={150}
            alt="Product 2"
          />
        </div>
        <div className="w-1/3 md:w-full">
          <Image
            src="/image 6 (1).png"
            className="w-full h-auto"
            width={100}
            height={150}
            alt="Product 3"
          />
        </div>
      </div>

      {/* Main Image */}
      <div className="w-full md:w-[444px] h-auto mb-6 md:mb-0 ml-2 mt-2">
        <Image
          src="/image 1 (1).png"
          className="w-full h-auto"
          width={444}
          height={500}
          alt="Main Product"
        />
      </div>

      {/* Right Details */}
      <div className="w-full md:w-auto">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 ml-2">ONE LIFE GRAPHIC T-SHIRT</h1>
        <div className="flex items-center mb-4">
          <span className="text-yellow-400 text-base sm:text-lg mr-2 ml-2">★★★★☆</span>
          <span className="text-gray-500 text-sm sm:text-base ml-5">4.5/5</span>
        </div>
        <div className="text-base sm:text-lg font-semibold mb-2 ml-2">
          <span className="text-red-600 mr-2 ml-2">$260</span>
          <span className="text-gray-500 line-through ml-2">$300</span>
          <span className="text-green-600 text-sm sm:text-base ml-2">-40%</span>
        </div>
        <p className="text-gray-700 text-sm sm:text-base mb-4 ml-2">
          This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
        </p>

        {/* Color Selection */}
        <div className="mb-4 ml-2">
          <h3 className="font-semibold text-sm sm:text-base mb-2 ml-2">Select Colors</h3>
          <div className="flex space-x-4">
            {colors.map((color) => (
              <div
                key={color}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === color ? 'border-black' : 'border-gray-300'
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
              ></div>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-4">
          <h3 className="font-semibold text-sm sm:text-base mb-2 ml-2">Choose Size</h3>
          <div className="flex space-x-2 ml-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-3 py-1 sm:px-4 sm:py-2 border ${
                  selectedSize === size ? 'bg-black text-white' : 'bg-gray-200 text-black'
                }`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Control */}
        <div className="mb-4">
          <h3 className="font-semibold text-sm sm:text-base mb-2 ml-2">Quantity</h3>
          <div className="flex items-center space-x-4 ml-2">
            <button
              className="px-2 sm:px-3 py-1 border bg-gray-200"
              onClick={() => handleQuantityChange('decrease')}
            >
              -
            </button>
            <span className="text-base sm:text-lg">{quantity}</span>
            <button
              className="px-2 sm:px-3 py-1 border bg-gray-200"
              onClick={() => handleQuantityChange('increase')}
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div>
          <button onClick={()=>router.push ('/cart') } className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-bold rounded ml-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;