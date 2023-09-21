"use client";
import React, { useState } from "react";
import { ProductDetailProps } from "@/types";
import Link from "next/link";

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const handleCancel = () => {};

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Product Details
      </h1>
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src={product.imageSrc}
            alt={product.title}
            className="w-full max-w-lg mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
          <p className="text-gray-600 text-lg mb-4">Price: ₹{product.price}</p>
          <p className="text-gray-700 text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            justo eu lorem bibendum rhoncus.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-[150px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 text-center">
              <Link
                href={{
                  pathname: "/Paymentmethods",
                  query: { object: JSON.stringify(product) },
                }}
              >
                Check Out
              </Link>
            </div>
            <button
              className="w-full md:w-[150px] py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
