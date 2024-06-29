// Header.tsx
import useDarkMode from "@/components/useDarkMode";
import { useState } from "react";
import { CiDark, CiMenuBurger } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();
  const [language, setLanguage] = useState("no");

  return (
    <header
      role="banner"
      className="py-5 absolute w-full z-10"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className="text-black dark:text-white font-bold">Logo</div>
        <Navigation language={language} setLanguage={setLanguage} />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-black dark:text-white ml-4"
        >
          {darkMode ? (
            <MdOutlineLightMode className="h-6 w-6" />
          ) : (
            <CiDark className="h-6 w-6" />
          )}
        </button>
        <button
          className="lg:hidden text-black dark:text-white font-semibold"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <CiMenuBurger className="h-6 w-6" />
        </button>
      </div>
      <MobileNavigation isOpen={toggleMenu} language={language} />
    </header>
  );
};

export default Header;
