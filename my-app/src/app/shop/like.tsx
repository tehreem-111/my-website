import Image from "next/image";
import React from "react";
interface Iproducts{
title:string,
  price:string,
  id:number,
  rating?:string,
  old_price?:string,
  img_url:string
}


let products = [
  {
    name: "T-shirt with Tape Details",
    id:1,
    rating: "4.5/5",
    price: "$120",
    image: "/picture 4.png", // Replace with your image path
  },
  {
    name: "Skinny Fit Jeans",
    id:2,
    rating: "3.5/5",
    price: "$240",
    originalPrice: "$260",
    discount: "20%",
    image: "/picture 3.jpg", // Replace with your image path
  },
  {
    name: "Checkered Shirt",
    id:3,
    rating: "4.5/5",
    price: "$180",
    image: "/picture2.png", // Replace with your image path
  },
  {
    name: "Sleeve Striped T-shirt",
    id:4,
    rating: "4.5/5",
    price: "$130",
    originalPrice: "$160",
    discount: "20%",
    image: "/picture.jpg", // Replace with your image path
  },
];

const Like= () =>{
  return (
    <div className="max-w-5xl mx-auto p-5 bg-white" >
      <h1 className="text-center text-3xl font-extrabold mb-5" >You Might Also Like</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((product, index) => (
          <div className="w-48 border-gray-300 rounded-lg p-4 text-center bg-gray transition-transform transform-hover:scale-105" key={index}>
            <Image src={product.image}
            alt={product.name}
            width={295}
            height={298}
            />

            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-yellow-500 text-sm my-2">⭐ {product.rating}</p>
            <p className="text-lg font-bold">
              {product.price}{" "}
              {product.originalPrice && (
                <span className="line-through text-gray-500 ml-2">{product.originalPrice}</span>
              )}
              {product.discount && (
                <span className="text-red-500 ml-2">({product.discount} off)</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Like;
