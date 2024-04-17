/** @format */
"use client";
// page.tsx
import React from "react";
import { MenuBox, ScreenBox } from "@/components";
import { useMouse } from "@mantine/hooks";

const Page = () => {
  const { x, y } = useMouse();
  return (
    <>
      <div className='bg-gradient-to-r from-purple-700/60 via-purple-600 to-pink-500 h-screen flex justify-center items-center'>
        <div className='text-white flex flex-col items-center'>
          <MenuBox />
          <ScreenBox />
        </div>
      </div>
    </>
  );
};

export default Page;
