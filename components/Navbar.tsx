import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="text-white text-2xl font-bold">
            My Website
          </a>
          <ul className="flex space-x-4">
            <Link
              href="/home"
              className="flex space-x-4 text-white hover:text-blue-300"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="flex space-x-4 text-white hover:text-blue-300"
            >
              About
            </Link>
            <Link
              href="/Home"
              className="flex space-x-4 text-white hover:text-blue-300"
            >
              who are we
            </Link>
            <Link
              href="/Home"
              className="flex space-x-4 text-white hover:text-blue-300"
            >
              what we do
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
