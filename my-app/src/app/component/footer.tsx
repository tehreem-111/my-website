import React from 'react'
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";




const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       
        <span className="ml-1 text-3xl text-black font-extrabold">Shop.Co</span>
      </a>
      <p className="mt-2 ml-2 text-sm text-gray-500">
        We have clothes that suits your style and which you're proud to wear.From women to men
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
          Company
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">About</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Features</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Works</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Career</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
          Help
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Customer Support</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Delivery Details</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Terms & Conditions</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
          Faq
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800 mt-2">Account</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 mt-2">Manage Deliveries</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 mt-2">Orders</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 mt-2">Payments</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
          Resources
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800 mt-2">Free eBooks</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Development Tutorial</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">How to- Blog</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Youtube Playlist</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-white">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-xl text-center sm:text-left">
      Shop.co © 2000-2023, All Rights Reserved
        <a
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-gray-600 ml-1"
          target="_blank"
        >
          
        </a>
      </p>
      
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer