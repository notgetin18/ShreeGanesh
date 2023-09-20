"use client";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md sm:w-full md:w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 text-center">
              <Link href="/home">Login</Link>
            </div>
          </form>
        </form>
      </div>
    </div>
  );
};

export default Login;
