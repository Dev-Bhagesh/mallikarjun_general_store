import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar flex justify-between items-center w-full px-6 py-3 bg-[#F5E6CA]">

      {/* Logo */}
      <div className="logo text-xl font-bold">
        MGS
      </div>

      {/* Navigation */}
      {/* <ul className="hidden md:flex gap-8 font-medium">
        <li><a href="#home" className="hover:text-orange-500">Home</a></li>
        <li><a href="#products" className="hover:text-orange-500">Products</a></li>
        <li><a href="#about" className="hover:text-orange-500">About Us</a></li>
        <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
      </ul> */}

      <div className="search p-0.5">
        <input className="border mx-auto rounded p-0.5" type="text" placeholder="Enter Product"/>
        <button className="mx-auto border rounded p-0.5">Go</button>
      </div>

      {/* Mobile Menu Icon */}
      {/* <div className="md:hidden text-2xl cursor-pointer">
        ☰
      </div> */}

    </div>
  );
};

export default Navbar;