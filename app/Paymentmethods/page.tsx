"use client";
import React, { useEffect, useState } from "react";
import { ProductDetailProps } from "@/types";
import * as qr from "qrcode";
import axios from "axios";
import Link from "next/link";
import { QRCodeModal } from "@/components";
import { useSearchParams } from "next/navigation";

const PaymentButtons = () => {
  const searchParams = useSearchParams();
  const productDetailsGot = searchParams.get("object");
  const product = JSON.parse(productDetailsGot);
  const [WD, setWD] = useState({
    winWidht: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    setWD({
      winWidht: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [WD]);

  console.log("product", product);
  const [qrCodeData, setQrCodeData] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

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

  return (
    <div className="flex flex-col md:flex-col gap-4">
      <div className="w-full md:w-[150px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 text-center">
        <Link href="/Payment">Pay Now</Link>
      </div>
      <button
        className="w-full md:w-[150px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        onClick={() => {
          // handlePayNowClick("upi");
        }}
      >
        Pay UPI
      </button>
      <button
        className="w-full md:w-[150px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        onClick={() => {
          // handlePayNowClick("netbanking");
        }}
      >
        Pay Netbanking
      </button>
      <button
        className="w-full mb-10 md:w-[150px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        onClick={() => {
          // handlePayNowClick("qr");
        }}
      >
        Pay QR
      </button>
      <h2 className="text-3xl text-black">
        {WD.winWidht > 776 ? "NOW DESKTOP" : " ON MOBILE"}
      </h2>
    </div>
  );
};

export default PaymentButtons;
