"use client";
import { useDarkMode } from "@/app/context/ThemeProvider";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

import { Button } from "@/components/ui/button";
const ThemeButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    // Button to togggle dark mode
    <Button variant="outline" onClick={toggleDarkMode} className=" text-lg">
      {darkMode ? <MdLightMode /> : <MdDarkMode />}
    </Button>
  );
};

export default ThemeButton;
