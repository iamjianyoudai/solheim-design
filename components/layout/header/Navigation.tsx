import React from "react";

interface NavigationProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ language, setLanguage }) => {
  return (
    <>
      <nav className="hidden lg:flex gap-8 text-black dark:text-white font-semibold">
        <a href="#" className="hover:text-gray-400 dark:hover:text-gray-300">
          {language === "no" ? "Hjem" : language === "en" ? "Home" : "主页"}
        </a>
        <a href="#" className="hover:text-gray-400 dark:hover:text-gray-300">
          {language === "no"
            ? "om oss"
            : language === "en"
            ? "about us"
            : "关于我们"}
        </a>
        <a href="#" className="hover:text-gray-400 dark:hover:text-gray-300">
          {language === "no" ? "design" : language === "en" ? "design" : "设计"}
        </a>
        <a href="#" className="hover:text-gray-400 dark:hover:text-gray-300">
          {language === "no"
            ? "prosjekter"
            : language === "en"
            ? "projects"
            : "案例"}
        </a>
      </nav>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="ml-4 bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-md p-2"
      >
        <option value="no">Norsk</option>
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
    </>
  );
};

export default Navigation;
