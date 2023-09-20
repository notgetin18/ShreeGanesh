"use client";
import { ProductDetail } from "@/components";
import React, { useEffect, useState } from "react";
import { products } from "@/constants";
const ProductDetailPage = (params: any) => {
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    if (params.params.id) {
      const selectedProduct = products.find(
        (item) => item.id === Number(params.params.id)
      );

      if (selectedProduct) {
        setProduct(selectedProduct);
      } else {
      }
    }
  }, [params.params.id]);

  return (
    <>{product ? <ProductDetail product={product} /> : <div>Loading...</div>}</>
  );
};

export default ProductDetailPage;
