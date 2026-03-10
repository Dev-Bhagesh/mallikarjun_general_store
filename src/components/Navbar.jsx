"use client"
import { useState } from "react";
import React from "react";
import Link from "next/link";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="Navbar flex justify-between items-center w-full px-6 py-3 bg-[#F5E6CA]">

      {/* Logo */}
      <div className="logo text-xl font-bold">
        MGS
      </div>

      <div className="search p-0.5">
        <input className="border mx-auto rounded p-0.5" type="text" placeholder="Enter Product"/>
        <button className="mx-auto border rounded p-0.5">Go</button>
      </div>

      {/* Navigation */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
        <li><Link href="/products" className="hover:text-orange-500">Products</Link></li>
        <li><Link href="/about" className="hover:text-orange-500">About Us</Link></li>
        <li><Link href="/contact" className="hover:text-orange-500">Contact</Link></li>
      </ul>


      {/* Mobile Menu Icon */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-5 w-40 md:hidden">
          <ul className="flex flex-col gap-4 font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      )}

    </div>
  );
};

export default Navbar;