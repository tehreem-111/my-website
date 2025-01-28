// components/DressStyle.js
import React from "react";
const DressStyle= () =>{

    const categories = [
      {
        name: "Casual",
        image: "/image.14.png",
      },
      {
        name: "Formal",
        image: "/image.12.png",
      },
      {
        name: "Party",
        image: "/image.11.png",
      },
      {
        name: "Gym",
        image: "/image.13.png",
      },
    ];
  
    return (
      <div className="bg-gray-50 py-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  export default DressStyle;