import { useState, useEffect } from "react";
import Button_temp from "../Button";
import { Menu, Sun, Moon, X } from "lucide-react";
import Switch from "react-switch";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const dark = root.classList.toggle("dark");
    setIsDarkMode(dark);
  };

  const navItems = [
    "Home", 
    "About",
    "Services",
    "Skills",
    "Portfolio",
    "Leetcode_stats",
    "Projects",
    "Contact",
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/30 dark:bg-black/30 backdrop-blur-md shadow-md"
          : "bg-gradient-to-r from-[#ffd6a5] via-[#fff8f0] to-[#d0f0ff] dark:from-[#0f0f0f] dark:via-[#1a1a1a] dark:to-[#111827]"
      }`}
    >
      <div className="mx-auto px-14 md:px-4 py-10 flex items-center justify-between md:justify-around">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <span className="text-[#f5a623] text-4xl font-bold">X</span>
          <span
            className={`text-2xl font-semibold tracking-wider transition-colors duration-300 ${
              scrolled ? "text-black dark:text-white" : "text-[#2d2d2d] dark:text-white"
            }`}
          >
            ORIM
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex items-center gap-8 font-medium text-sm transition-colors duration-300 ${
            scrolled ? "text-black dark:text-white" : "text-[#212121] dark:text-white"
          }`}
        >
          {navItems.map((item) => (
            <li
              key={item}
              className=" hover:text-orange-500 cursor-pointer transition-colors "
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4 ml-4">
        <Button_temp Text="Let's Talk" fontSize="14px" />
            <Switch
                onChange={toggleTheme}
                checked={isDarkMode}
                onColor="#FFB347" // light orange
                offColor="#3c4145" // dark gray
                onHandleColor="#ffffff"
                offHandleColor="#ffffff"
                handleDiameter={22}
                uncheckedIcon={
                <div className="flex items-center justify-center h-full pl-1">
                    <Moon size={16} color="#60a5fa" />
                </div>
                }
                checkedIcon={
                <div className="flex items-center justify-center h-full pl-1">
                    <Sun size={16} color="#facc15" />
                </div>
                }
                height={28}
                width={56}
                className="theme-toggle"
            />
        </div>




        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X size={24} className="text-black dark:text-white" />
            ) : (
              <Menu size={24} className="text-black dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
{menuOpen && (
  <div
    className={`md:hidden w-full px-6 pb-4 flex flex-col items-center gap-4 text-sm font-large transition-all duration-300 ${
      scrolled
        ? "bg-white/30 dark:bg-black/30 backdrop-blur-md text-black dark:text-white"
        : "bg-white dark:bg-[#111] text-black dark:text-white"
    }`}
  >
    {navItems.map((item) => (
      <span
        key={item}
        className="w-full py-1 border-b border-gray-300 dark:border-gray-700 flex justify-center hover:bg-red-200 text-2xl font-bold"
      >
        {item}
      </span>
    ))}

    {/* Theme toggle and CTA for mobile */}
    <div className="flex items-center gap-4 mt-4 justify-around w-full">
      <Button_temp Text="Let's Talk" fontSize="14px" />
      <Switch
        onChange={toggleTheme}
        checked={isDarkMode}
        onColor="#FFB347"
        offColor="#3c4145"
        onHandleColor="#ffffff"
        offHandleColor="#ffffff"
        handleDiameter={22}
        uncheckedIcon={
          <div className="flex items-center justify-center h-full pl-1">
            <Moon size={16} color="#60a5fa" />
          </div>
        }
        checkedIcon={
          <div className="flex items-center justify-center h-full pl-1">
            <Sun size={16} color="#facc15" />
          </div>
        }
        height={28}
        width={56}
        className="theme-toggle"
      />
    </div>
  </div>
)}

    </nav>
  );
}

export default NavBar;
