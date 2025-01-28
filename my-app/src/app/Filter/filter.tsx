// pages/index.js

import React from 'react';
import Image from 'next/image';

const Home = () => {
  const products = [
    {
      name: 'Gradient Graphic T-shirt',
      price: 145,
      rating: 4.5,
      image: '/Frame 33 (2).png',
    },
    {
      name: 'Polo with Tipping Details',
      price: 180,
      rating: 4.5,
      image: '/Frame 34 (2).png',
    },
    {
      name: 'Black Striped T-shirt',
      price: 120,
      rating: 4.0,
      image: '/Frame 38 (3).png',
    },
    {
      name: 'Skinny Fit Jeans',
      price: 240,
      rating: 4.0,
      sale: 260,
      image: '/picture 3.jpg',
    },
    {
      name: 'Checkered Shirt',
      price: 180,
      rating: 4.5,
      image: '/picture2.png',
    },
    {
      name: 'Sleeve Striped T-shirt',
      price: 130,
      rating: 4.0,
      sale: 160,
      image: '/picture.jpg',
    },
    {
      name: 'Vertical Striped Shirt',
      price: 212,
      rating: 4.5,
      sale: 232,
      image: '/pic1.png',
    },
    {
      name: 'Courage Graphic T-shirt',
      price: 145,
      rating: 3.5,
      image: '/pic2.png',
    },
    {
      name: 'Loose Fit Bermuda Shorts',
      price: 80,
      rating: 4.0,
      image: '/pic4.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6">Casual</h1>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Sidebar Filters */}
          <div className="bg-white p-4 rounded shadow-md w-full lg:w-[295px] lg:h-auto">
            <h2 className="font-semibold mb-4">Filters</h2>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Category</h3>
              <ul className="space-y-2">
                {['T-shirts', 'Shirts', 'Shorts', 'Jeans'].map((item) => (
                  <li key={item}>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="text-indigo-600" />
                      <span>{item}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Price</h3>
              <input type="range" className="w-full" min="50" max="200" />
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Colors</h3>
              <div className="flex space-x-2">
                {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-black'].map((color, index) => (
                  <button
                    key={index}
                    className={`h-6 w-6 rounded-full border ${color}`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    className="px-3 py-1 border rounded text-sm hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Dress Style */}
            <div>
              <h3 className="font-medium mb-2">Dress Style</h3>
              <ul className="space-y-2">
                {['Casual', 'Formal', 'Party', 'Gym'].map((style) => (
                  <li key={style}>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="dressStyle" className="text-indigo-600" />
                      <span>{style}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
              Apply Filter
            </button>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div key={index} className="bg-white p-4 rounded shadow hover:shadow-lg">
                  {/* Product Image */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="rounded mb-4"
                  />
                  {/* Product Details */}
                  <h3 className="font-semibold">{product.name}</h3>
                  <div className="flex items-center space-x-2 my-2">
                    <span className="font-medium text-lg">${product.price}</span>
                    {product.sale && (
                      <span className="text-sm line-through text-gray-500">
                        ${product.sale}
                      </span>
                    )}
                  </div>
                  {/* Rating */}
                  <div className="text-sm text-yellow-500">
                    {'★'.repeat(Math.floor(product.rating))}{' '}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
