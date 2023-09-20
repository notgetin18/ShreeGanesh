'use client'
import React from "react";

const CheckoutPage = (productDetail : any) => {
    console.log("CheckoutPage", productDetail)
  return (
    <>
      <div className="flex flex-col md:flex-col gap-4">
        <div className="w-full md:w-[150px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 text-center"></div>
        <button
          className="w-full md:w-[150px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          onClick={() => {
            //   handlePayNowClick("upi");
          }}
        >
          Pay UPI
        </button>
        <button
          className="w-full md:w-[150px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          onClick={() => {
            //   handlePayNowClick("netbanking");
          }}
        >
          Pay Netbanking
        </button>
        <button
          className="w-full mb-10 md:w-[150px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          onClick={() => {
            //   handlePayNowClick("qr");
          }}
        >
          Pay QR
        </button>
      </div>
    </>
  );
};

export default CheckoutPage;
