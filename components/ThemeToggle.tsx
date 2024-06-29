// components/ThemeToggle.tsx

const ThemeToggle = () => {
  // This function toggles the 'dark' class on the HTML element
  const toggleTheme = () => {
    const html = window.document.documentElement;
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggle;
