// MobileNavigation.tsx
import React from "react";

interface MobileNavigationProps {
  isOpen: boolean;
  language: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  language,
}) => {
  return (
    <div
      className={`lg:hidden ${
        isOpen ? "block" : "hidden"
      } bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-4`}
    >
      <nav className="flex flex-col items-start gap-4">
        <a
          href="#"
          className="w-full hover:bg-gray-200 dark:hover:bg-gray-600 p-2"
        >
          {language === "no" ? "Hjem" : language === "en" ? "Home" : "主页"}
        </a>
        <a
          href="#"
          className="w-full hover:bg-gray-200 dark:hover:bg-gray-600 p-2"
        >
          {language === "no"
            ? "Fordeler"
            : language === "en"
            ? "Benefits"
            : "好处"}
        </a>
        <a
          href="#"
          className="w-full hover:bg-gray-200 dark:hover:bg-gray-600 p-2"
        >
          {language === "no"
            ? "Våre klasser"
            : language === "en"
            ? "Our Classes"
            : "我们的课程"}
        </a>
        <a
          href="#"
          className="w-full hover:bg-gray-200 dark:hover:bg-gray-600 p-2"
        >
          {language === "no"
            ? "Kontakt oss"
            : language === "en"
            ? "Contact Us"
            : "联系我们"}
        </a>
      </nav>
    </div>
  );
};

export default MobileNavigation;
