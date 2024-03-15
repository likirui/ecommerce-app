import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

// Submenu Component
const Submenu = ({ isOpen, toggle }) => {
 if (!isOpen) return null;

 return (
    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Submenu Item 1</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Submenu Item 2</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Submenu Item 3</a>
      </div>
    </div>
 );
};

const Header = () => {
 // header state
 const [isActive, setIsActive] = useState(false);
 const { isOpen, setIsOpen } = useContext(SidebarContext);
 const { itemAmount } = useContext(CartContext);
 // state for submenu visibility
 const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

 // event listener
 useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
 });

 return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="w-[40px]">
            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>eShop</span>
          </div>
        </Link>

        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
          {/* Submenu */}
          <Submenu isOpen={isSubmenuOpen} toggle={() => setIsSubmenuOpen(!isSubmenuOpen)} />
        </div>
      </div>
    </header>
 );
};

export default Header;