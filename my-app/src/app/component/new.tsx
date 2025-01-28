'use client'
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
}

let products = [
  {
    name: "T-SHIRT WITH TAPE DETAILS",
    id: 1,
    rating: "4.5/5",
    price: "$120",
    // originalPrice: "$232",
    // discount: "20%",
    image: "/picture 4.png", // Replace with your image path
  },
  {
    name: "SKINNY FIT JEANS",
    id: 2,
    rating: "3.5/5",
    price: "$240",
    originalPrice: "$260",
   discount: "20%",
    image: "/picture 3.jpg", // Replace with your image path
  },
  {
    name: "CHECKERED SHIRT",
    id: 3,
    rating: "4.5/5",
    price: "$180",
    image: "/picture2.png", // Replace with your image path
  },
  {
    name: "SLEEVE STRIPED T-SHIRT",
    id: 4,
    rating: "4.5/5",
    price: "$130",
    originalPrice: "$160",
     discount: "20%",
    image: "/picture.jpg", // Replace with your image path
  },
];

const Newarrivals = () => {
  const router=useRouter();
  return (
    <div className="max-w-6xl mx-auto p-5 bg-white">
      <h1 className="text-center text-3xl font-extrabold mb-5">NewArrivals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {products.map((product, index) => (
          <div
            className="w-full border-gray-300 rounded-lg p-4 text-center bg-gray-100 transition-transform transform hover:scale-105 hover:shadow-lg"
            key={index}
          >
            <div className="relative w-full h-72">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            <h3 className="text-lg font-medium mt-4">{product.name}</h3>
            <p className="text-yellow-500 text-sm my-2">⭐ {product.rating}</p>
            <p className="text-lg font-bold">
              {product.price}{" "}
              {product.originalPrice && (
                <span className="line-through text-gray-500 ml-2">
                  {product.originalPrice}
                </span>
              )}
              {product.discount && (
                <span className="text-red-500 ml-2">({product.discount} off)</span>
              )}
            </p>
          </div>
        ))}
      </div>
      <div className="relative flex items-center  justify-center mt-5">
       <button onClick={()=>router.push ('/Filter')} className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
          View All
        </button>
      </div>
    </div>
  );
};

export default Newarrivals;