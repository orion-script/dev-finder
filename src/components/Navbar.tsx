import React from 'react'
import { useState, useEffect } from "react";
import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";

const Navbar: React.FC = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    
      useEffect(() => {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        if(typeof localStorage !== 'undefined') {
          localStorage.setItem("theme", theme || "");
        }
      }, [theme]);
    
      const lightAndDarkMode = (e) => {
        e.preventDefault();
        if (typeof localStorage !== 'undefined' &&
          localStorage.theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      };

  return (
    
    <nav className="w-4/5 md:w-2/4 m-auto flex justify-between dark:text-white text-black text-lg pt-5 md:pt-20">
      <h2 className="font-bold">devfinder</h2>

      <figure className="flex items-center cursor-pointer"
        onClick={lightAndDarkMode}>
        <figcaption className="mr-3">{theme === "dark" ? "Light" : "Dark"}</figcaption>
        <img
          src={theme === "dark" ? Sun : Moon}
          alt="moon icon"
          height={20}
          className="fill-blue-500"
        />
      </figure>
    </nav>
  )
}

export default Navbar