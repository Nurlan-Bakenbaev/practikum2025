"use client";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

const Page = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    try {
      const res = await axios.post(
        //change it to real URL
        "https://api.example.com/login",
        {
          email: loginData.email,
          password: loginData.password,
        }
      );
      if (res.data && res.data.error) {
        toast.error(res.data.error);
      } else {
        toast.success("Login successful!");
        // Можно добавить редирект здесь
      }
    } catch (error) {
      toast.error(
        "Something went wrong: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              onChange={handleChange}
              value={loginData.email}
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              value={loginData.password}
              onChange={handleChange}
              id="password"
              name="password"
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-right">
          <Link
            href="/forgot-password"
            className="text-blue-600 hover:underline text-sm"
          >
            Forgot password?
          </Link>
        </div>
      </motion.div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Page;
