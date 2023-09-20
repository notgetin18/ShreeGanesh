"use client";
import React, { useState } from "react";
import * as qr from "qrcode";
import axios from "axios";
import QRCodeModal from "./QRCodeModal";
import CheckoutPage from "./checkout";
import { ProductDetailProps } from "@/types";
import Link from "next/link";

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [showComponent, setShowComponent] = useState(false);
  const [qrCodeData, setQrCodeData] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const generateQRCode = async (base64Data: string) => {
    try {
      const qrCodeImageUrl = await qr.toDataURL(base64Data);
      return qrCodeImageUrl;
    } catch (error) {
      console.error("Error generating QR code:", error);
      return null;
    }
  };

  const handlePayNow = async (data: any) => {
    const PaymentData = {
      txnid: `BDG${Math.floor(Math.random() * 100000000)}`,
      amount: product.price,
      productinfo: product.title,
      customerId: `USER${Math.floor(Math.random() * 100000000)}`,
      email: "iaryato@gmail.com",
      phone: "7703997101",
      data: data,
    };

    try {
      const payinitiateResponse = await axios.post(
        "http://localhost:3001/payment/create-payment",
        PaymentData
      );
      if (!payinitiateResponse.data.isError) {
        setQrCodeData(payinitiateResponse.data.data.data.payload.qrcode);
        openModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        <div>
          {isModalOpen && (
            <QRCodeModal qrCodeData={qrCodeData} onClose={closeModal} />
          )}
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
              {/* <button onClick={() => setShowComponent(true)}>
                Check Out
              </button> */}
              <Link
                href={{
                  pathname: "/Paymentmethods",
                  query: { object: JSON.stringify(product) },
                }}
                // href="/Paymentmethods"
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
        {/* {showComponent && (
          <div className="w-full md:w-1/2 md:pl-8">
            <CheckoutPage productDetail={product} />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProductDetail;
