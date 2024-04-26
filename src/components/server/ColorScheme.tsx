/** @format */
"use client";

import React from "react";
import { useLocalStorage } from "@mantine/hooks";
import { Blob, Button } from "@/components";
import { Moon, Sun } from "lucide-react";

const ColorScheme = () => {
  const [value, setValue] = useLocalStorage({
    key: "color-scheme",
    defaultValue: "dark-mode",
  });

  const toggleValue = () => {
    setValue((current) =>
      current === "dark-mode" ? "light-mode" : "dark-mode"
    );
  };

  // Determine the class to apply based on the current color mode
  const colorModeClass = value === "dark-mode" ? "dark-mode" : "light-mode";

  return (
    <div className={`${colorModeClass} h-full`}>
      <div className='flex justify-center items-center h-screen'>
        <Button
          size={"lg"}
          variant={"ghost"}
          onClick={toggleValue}
          className='hover:text-black text-xl font-bold focus:outline-none z-50'>
          {/* {value.replace("-mode", "").charAt(0).toUpperCase() +
            value.slice(1).toLowerCase()} -- This would return Dark-mode || Light-mode*/}
          {colorModeClass === "light-mode" ? <Sun /> : <Moon />}
        </Button>
      </div>
      <>
      <Blob/>
      </>
    </div>
  );
};

export default ColorScheme;
