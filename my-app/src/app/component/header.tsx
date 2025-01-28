import React from "react";
import Link from "next/link";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";


const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="#"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-3xl sm:text-4xl font-extrabold">SHOP.CO</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-3">
            <a href={"/shop"} className="hover:text-gray-900">
              Shop
            </a>
            <a href="#" className="hover:text-gray-900">
              On Sale
            </a>
            <a href="#" className="hover:text-gray-900">
              New Arrivals
            </a>
            <a href="#" className="hover:text-gray-900">
              Brands
            </a>
          </nav>
          <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-center md:justify-end ml-2">
            <input
              type="text"
              placeholder="Search for products..."
              aria-label="Search products"
              className="w-full md:w-72 lg:w-96 xl:w-[400px] 2xl:w-[577px] border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex items-center ml-3 space-x-4">
        <Link href={"/cart/"}>
           <PiShoppingCartSimpleBold/>
          </Link>
          <CgProfile size={24} />
        </div>
  
        </div>
      </header>
    </div>
  );
};

export default Header;