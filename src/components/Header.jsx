import React from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="h-[4.5rem] flex">
      <div className="mx-auto">
        <h1 className="text-headerText text-center text-2xl md:text-4xl pt-4 font-serif font-bold">
          Feedback App
        </h1>
      </div>
      <button onClick={toggleTheme} className="text-black p-4">
        {theme === "dark" ? (
          <BsBrightnessHigh className="fill-headerText" />
        ) : (
          <FaMoon />
        )}
      </button>
    </header>
  );
};

export default Header;
