import React, { useState } from "react";
import Button from "./Button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-5 py-4 md:px-10 md:py-5 flex items-center justify-between">
      
      <h1 className="text-2xl md:text-3xl font-bold">BLOGI</h1>

      <nav className="hidden md:flex gap-10 font-bold">
        <li className="list-none hover:underline cursor-pointer">Features</li>
        <li className="list-none hover:underline cursor-pointer">Pricing</li>
        <li className="list-none hover:underline cursor-pointer">Contacts</li>
      </nav>

      <nav className="hidden md:flex gap-6">
        <Button text="Login" />
        <Button text="Sign Up" />
      </nav>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}  className="focus:outline-none">
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>

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
