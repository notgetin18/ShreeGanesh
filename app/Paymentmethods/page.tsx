"use client";
import React, { useEffect, useState } from "react";
import * as qr from "qrcode";
import axios from "axios";
import { QRCodeModal, Qr } from "@/components";
import { useSearchParams } from "next/navigation";
import QRCode from "qrcode";

const PaymentButtons = () => {
  const [qrData, setqrData] = useState<any>(null);
  const searchParams = useSearchParams();
  const productDetailsGot = searchParams.get("object");
  const product = JSON.parse(productDetailsGot || "{}");
  const [mode, setMode] = useState("Desktop" || "Mobile");

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
    setMode(WD.winWidht > 776 ? "DESKTOP" : "MOBILE");

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

  console.log("mode", mode);

  const handlePayNow = async () => {
    console.log("hitting --- line no --55");
    const PaymentData = {
      OrderID: `BDG${Math.floor(Math.random() * 100000000)}`,
      amount: product.price,
      //   productinfo: product.title,
      UserID: `USER${Math.floor(Math.random() * 100000000)}`,
      //   email: "iaryato@gmail.com",
      mobile: "7703997101",
      mode: `${WD.winWidht > 776 ? "DESKTOP" : "MOBILE"}`,
    };

    try {
      const payinitiateResponse = await axios.post(
        "http://localhost:3001/phonepe/make-payment",
        PaymentData
      );
      console.log("payinitiateResponse", payinitiateResponse.data.data.data);
      setqrData(
        "upi://pay?pa=9660637657@paytm&pn=AMIT&am=900.00&mam=900.00&tr=BDG1234567&tn=Payment%20for%20BDG1234567&mc=5311&mode=04&purpose=00&utm_campaign=B2B_PG&utm_medium=PGTESTPAYUAT140&utm_source=BDG1234567"
      );
      setQrCodeData(
        payinitiateResponse.data.data.data.instrumentResponse.intentUrl
      );
      QRCode.toDataURL(
        payinitiateResponse.data.data.data.instrumentResponse.intentUrl
      ).then((response) => {
        console.log("response", response);
      });
      console.log(
        "qr data",
        payinitiateResponse.data.data.data.instrumentResponse.intentUrl
      );
      openModal();
    } catch (error) {
      console.log(error);
    }
  };

  console.log("qr data", qrData);

  return (
    <div className="flex flex-col md:flex-col gap-4">
      <div className="w-full mt-10 md:w-[150px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 text-center">
        <button
          onClick={() => {
            handlePayNow();
          }}
        >
          Pay Now
        </button>
      </div>
      {/* {isModalOpen && (
        <QRCodeModal qrCodeData={qrCodeData} onClose={closeModal} />
      )} */}

      {mode === "DESKTOP" ? isModalOpen &&  <Qr qrData={qrData} />:`${qrData}` }
      {}
      <button
        className="w-full md:w-[150px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        onClick={() => {
          handlePayNow();
        }}
      >
        Pay UPI
      </button>
      <button
        className="w-full md:w-[150px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        onClick={() => {
          handlePayNow();
        }}
      >
        Pay Netbanking
      </button>
      <button
        className="w-full mb-10 md:w-[150px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        onClick={() => {
          handlePayNow();
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
