import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const storedDarkMode = localStorage.getItem("darkMode");
      if (storedDarkMode !== null) {
        return storedDarkMode === "true";
      }
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDarkMode;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      root.classList.toggle("dark", darkMode);
      localStorage.setItem("darkMode", darkMode.toString());
    }
  }, [darkMode]);

  return [darkMode, setDarkMode] as const;
};

export default useDarkMode;
// // useDarkMode.ts
// import { useEffect, useState } from "react";

// const useDarkMode = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedDarkMode = localStorage.getItem("darkMode") === "true";
//       const prefersDarkMode = window.matchMedia(
//         "(prefers-color-scheme: dark)"
//       ).matches;
//       setDarkMode(storedDarkMode || prefersDarkMode);
//     }
//   }, []);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const root = window.document.documentElement;
//       root.classList.toggle("dark", darkMode);
//       localStorage.setItem("darkMode", darkMode.toString());
//     }
//   }, [darkMode]);

//   return [darkMode, setDarkMode] as const;
// };

// export default useDarkMode;
