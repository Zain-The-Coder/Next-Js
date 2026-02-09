import React, { useState } from "react";
import Button from "./Button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-[#609af4] to-[#5c71f0] shadow-md px-5 py-4 md:px-10 md:py-5 flex items-center justify-between">
      
      <h1 className="text-2xl md:text-3xl font-bold">BLOGI</h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-10 font-bold">
        <li className="list-none hover:underline cursor-pointer">Features</li>
        <li className="list-none hover:underline cursor-pointer">Pricing</li>
        <li className="list-none hover:underline cursor-pointer">Contacts</li>
      </nav>

      {/* Desktop Buttons */}
      <nav className="hidden md:flex gap-6">
        <Button text="Login" />
        <Button text="Sign Up" />
      </nav>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {/* Simple hamburger lines */}
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full md:hidden flex flex-col items-center py-4 gap-4 z-50">
          <li className="list-none hover:underline cursor-pointer">Features</li>
          <li className="list-none hover:underline cursor-pointer">Pricing</li>
          <li className="list-none hover:underline cursor-pointer">Contacts</li>
          <div className="flex gap-4 mt-2">
            <Button text="Login" />
            <Button text="Sign Up" />
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
