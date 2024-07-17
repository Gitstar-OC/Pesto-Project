import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MdOutlineWbSunny } from "react-icons/md";
// import { BsMoonStars } from "react-icons/bs";
import { useState, useEffect } from "react";
import { FiMoon } from "react-icons/fi";

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.add(storedTheme);
  }, []);

  useEffect(() => {
    const toggleThemeKey = (e) => {
      const activeElement = document.activeElement;
      const isInputFocused = activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable;

      if (!isInputFocused && (e.key === "t" || e.key === "T")) {
        e.preventDefault();
        toggleTheme();
      }
    };

    document.addEventListener("keydown", toggleThemeKey);
    return () => document.removeEventListener("keydown", toggleThemeKey);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div onClick={toggleTheme} className={`NavIcon ${theme}`}>
              {theme === "light" ? (
                <MdOutlineWbSunny className="NavIcon" />
              ) : (
                <FiMoon className="NavIcon" />
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Change Theme (T)</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default Theme;
