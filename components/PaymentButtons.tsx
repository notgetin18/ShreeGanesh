import React from "react";

const PaymentButtons = ({ handlePayNow }: any) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <button
        className="w-full md:w-[150px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        onClick={() => {
          handlePayNow("card");
        }}
      >
        Pay Card
      </button>
      <button
        className="w-full md:w-[150px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        onClick={() => {
          handlePayNow("upi");
        }}
      >
        Pay UPI
      </button>
      <button
        className="w-full md:w-[150px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        onClick={() => {
          handlePayNow("netbanking");
        }}
      >
        Pay Netbanking
      </button>
      <button
        className="w-full md:w-[150px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        onClick={() => {
          handlePayNow("qr");
        }}
      >
        Pay QR
      </button>
    </div>
  );
};

export default PaymentButtons;
