"use client";
import useDarkMode from "@/components/useDarkMode";
import { useEffect, useState } from "react";
import { CiDark, CiMenuBurger } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();
  const [language, setLanguage] = useState("no");
  const [mounted, setMounted] = useState(false);

  const flagIcons = {
    no: "🇳🇴",
    en: "🇬🇧",
    zh: "🇨🇳",
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Render nothing on the server
  }

  return (
    <header
      role="banner"
      className="lg:py-6 absolute w-full z-10"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {" "}
        {/* Added padding here */}
        <div className="flex items-center justify-start w-full">
          {" "}
          {/* Removed padding from here */}
          <Navigation language={language} setLanguage={setLanguage} />
        </div>
        <div className="flex items-center">
          {" "}
          {/* Separate container for language and dark mode controls */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="ml-4 bg-[#f3f5f8] dark:bg-[#333333] dark:text-white text-black lang-select"
          >
            <option value="no">{flagIcons.no} Norsk</option>
            <option value="en">{flagIcons.en} English</option>
            <option value="zh">{flagIcons.zh} 中文</option>
          </select>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-black dark:text-white ml-4"
          >
            {darkMode ? (
              <MdOutlineLightMode className="h-5 w-5" />
            ) : (
              <CiDark className="h-5 w-5" />
            )}
          </button>
          <button
            className="lg:hidden text-black dark:text-white font-semibold ml-4"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <CiMenuBurger className="h-6 w-6" />
          </button>
        </div>
      </div>
      <MobileNavigation isOpen={toggleMenu} language={language} />
    </header>
  );
};

export default Header;
