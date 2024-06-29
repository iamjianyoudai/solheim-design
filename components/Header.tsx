import { useEffect, useState } from "react";
import { CiDark, CiMenuBurger } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("no"); // Default to Norwegian

  // Set initial dark mode state on client-side
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(storedDarkMode || prefersDarkMode);

    const root = window.document.documentElement;
    root.classList.toggle("dark", storedDarkMode || prefersDarkMode);
  }, []);

  // Sync dark mode state with localStorage and HTML root class
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // Handle language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <header
      role="banner"
      className="py-5 absolute w-full z-10"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-black dark:text-white font-bold">Logo</div>
        {/* Primary navigation (hidden on small screens) */}
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
            {language === "no"
              ? "design"
              : language === "en"
              ? "design"
              : "设计"}
          </a>
          <a href="#" className="hover:text-gray-400 dark:hover:text-gray-300">
            {language === "no"
              ? "prosjekter"
              : language === "en"
              ? "projects"
              : "案例"}
          </a>
        </nav>
        {/* Language selection */}
        <select
          value={language}
          onChange={handleLanguageChange}
          className=" bg-white dark:bg-[--color-bg-primary] text-black dark:text-white "
        >
          <option value="no">Norsk</option>
          <option value="en">English</option>
          <option value="zh">中文</option>
        </select>
        {/* Toggle dark/light mode */}
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
        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-black dark:text-white font-semibold"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <CiMenuBurger className="h-6 w-6" />
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      <div
        className={`${
          toggleMenu ? "block" : "hidden"
        } lg:hidden bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-4`}
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
    </header>
  );
};

export default Header;

// import { useEffect, useState } from "react";
// import { CiDark, CiMenuBurger } from "react-icons/ci";
// import { MdOutlineLightMode } from "react-icons/md";

// export const Header = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   // Set initial dark mode state on client-side
//   useEffect(() => {
//     const storedDarkMode = localStorage.getItem("darkMode") === "true";
//     const prefersDarkMode = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;
//     setDarkMode(storedDarkMode || prefersDarkMode);

//     const root = window.document.documentElement;
//     root.classList.toggle("dark", storedDarkMode || prefersDarkMode);
//   }, []);

//   // Sync dark mode state with localStorage and HTML root class
//   useEffect(() => {
//     const root = window.document.documentElement;
//     root.classList.toggle("dark", darkMode);
//     localStorage.setItem("darkMode", darkMode.toString());
//   }, [darkMode]);

//   return (
//     <header
//       role="banner"
//       className="py-5 absolute w-full z-10"
//       style={{ backgroundColor: "var(--color-bg-primary)" }}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
//         {/* Logo */}
//         <div className="text-black dark:text-white font-bold">Logo</div>
//         {/* Primary navigation (hidden on small screens) */}
//         <nav className="hidden lg:flex gap-8 text-black dark:text-white font-semibold">
//           <a href="#" className="hover:text-gray-400 dark:hover:text-gray-300">
//             Home
//           </a>
//           <a href="#" className="hover:text-gray-400 dark:hover:text-gray-300">
//             Benefits
//           </a>
//           <a href="#" className="hover:text-gray-400 dark:hover:text-gray-300">
//             Our Classes
//           </a>
//           <a href="#" className="hover:text-gray-400 dark:hover:text-gray-300">
//             Contact Us
//           </a>
//         </nav>
//         {/* Toggle dark/light mode */}
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
//         {/* Mobile menu toggle */}
//         <button
//           className="lg:hidden text-black dark:text-white font-semibold"
//           onClick={() => setToggleMenu(!toggleMenu)}
//         >
//           <CiMenuBurger className="h-6 w-6" />
//         </button>
//       </div>
//       {/* Mobile Navigation Menu */}
//       <div
//         className={`${
//           toggleMenu ? "block" : "hidden"
//         } lg:hidden bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-4`}
//       >
//         <nav className="flex flex-col items-start gap-4">
//           <a
//             href="#"
//             className="w-full hover:bg-gray-200 dark:hover:bg-gray-600 p-2"
//           >
//             Home
//           </a>
//           <a
//             href="#"
//             className="w-full hover:bg-gray-200 dark:hover:bg-gray-600 p-2"
//           >
//             Benefits
//           </a>
//           <a
//             href="#"
//             className="w-full hover:bg-gray-200 dark:hover:bg-gray-600 p-2"
//           >
//             Our Classes
//           </a>
//           <a
//             href="#"
//             className="w-full hover:bg-gray-200 dark:hover:bg-gray-600 p-2"
//           >
//             Contact Us
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
