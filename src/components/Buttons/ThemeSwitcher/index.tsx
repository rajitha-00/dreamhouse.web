"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };
  const [fixedHeader, setFixedHeader] = React.useState<boolean>(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <button
      onClick={toggleTheme}
      className={
        fixedHeader
          ? "inline-flex items-center flex-none font-[500]  border-[1px] rounded-[3px] px-2 py-2 text-md font-poppins hover:text-[#49C0B6] bg-white text-DreamhouseColor border-transparent  hover:bg-[#d8d9e256]"
          : "inline-flex items-center flex-none font-[500]  border-[1px] rounded-[3px] px-2 py-2 text-md font-poppins hover:text-DreamhouseColor bg-DreamhouseColor  text-white border-transparent  hover:bg-[#d8d9e256]"
      }
    >
      <SunIcon
        className={`h-[20px] w-[20px] rotate-0 scale-100 transition-all ${
          isDarkMode ? "dark:-rotate-90 dark:scale-0" : ""
        }`}
      />
      <MoonIcon
        className={`absolute h-[20px] w-[20px] rotate-90 scale-0 transition-all ${
          isDarkMode ? "dark:rotate-0 dark:scale-100" : ""
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
