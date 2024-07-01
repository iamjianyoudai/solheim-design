import Link from "next/link";
import React from "react";
import { navContent } from "./navContent";

interface NavigationProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ language, setLanguage }) => {
  return (
    <>
      <nav className="hidden lg:flex gap-8 text-black dark:text-white font-semibold">
        {navContent.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="dark:hover:text-gray-300 linkUnderlineHover"
          >
            {item.label[language as keyof typeof item.label]}
          </Link>
        ))}
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
