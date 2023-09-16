// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div>This is Footer</div>
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Your Company Name
      </div>
    </footer>
  );
};

export default Footer;
