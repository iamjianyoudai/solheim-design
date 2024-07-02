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

  const flagIcons = {
    no: "🇳🇴",
    en: "🇬🇧",
    zh: "🇨🇳",
  };

  return (
    <header
      role="banner"
      className="py-4 absolute w-full z-10"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <div className="text-black dark:text-white font-bold mr-8">Logo</div>
          <Navigation language={language} setLanguage={setLanguage} />
        </div>
        <div className="flex items-center">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="appearance-none bg-[#f3f5f8] dark:bg-[#333333] dark:text-white text-black"
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
              <MdOutlineLightMode className="h-6 w-6" />
            ) : (
              <CiDark className="h-6 w-6" />
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

// import useDarkMode from "@/components/useDarkMode";
// import { useState } from "react";
// import { CiDark, CiMenuBurger } from "react-icons/ci";
// import { MdOutlineLightMode } from "react-icons/md";
// import MobileNavigation from "./MobileNavigation";
// import Navigation from "./Navigation";

// export const Header = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [darkMode, setDarkMode] = useDarkMode();
//   const [language, setLanguage] = useState("no");

//   return (
//     <header
//       role="banner"
//       className="py-4 absolute w-full z-10"
//       style={{ backgroundColor: "var(--color-bg-primary)" }}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
//         <div className="text-black dark:text-white font-bold">Logo</div>
//         <Navigation language={language} setLanguage={setLanguage} />
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="text-black dark:text-white ml-4"
//         >
//           {darkMode ? (
//             <MdOutlineLightMode className="h-6 w-6" />
//           ) : (
//             <CiDark className="h-6 w-6" />
//           )}
//         </button>
//         <button
//           className="lg:hidden text-black dark:text-white font-semibold"
//           onClick={() => setToggleMenu(!toggleMenu)}
//         >
//           <CiMenuBurger className="h-6 w-6" />
//         </button>
//       </div>
//       <MobileNavigation isOpen={toggleMenu} language={language} />
//     </header>
//   );
// };

// export default Header;
