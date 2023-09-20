import React from "react";
import { ProductCardProps } from "@/types";
import Link from "next/link";

const ProductCard = ({ imageSrc, title, price, id }: ProductCardProps) => {
    console.log("ProductCard", id)
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img src={imageSrc} alt={title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">₹{price}</p>
        <Link
          href={`/ProductId/${id}`}
          className="block mt-4 bg-blue-500 text-white rounded-md text-center py-2 hover:bg-blue-600 transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
