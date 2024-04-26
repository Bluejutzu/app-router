/** @format */
"use client";
// page.tsx
import React from "react";
import { Blob, MenuBox, ScreenBox } from "@/components";
import { useMouse } from "@mantine/hooks";
import Link from "next/link";

const Page = () => {
  const { x, y } = useMouse();
  return (
    <>
      <div className='bg-gradient-to-r from-purple-700/60 via-purple-600 to-pink-500 h-screen flex justify-center items-center'>
        <div className='text-white flex flex-col items-center z-10'>
          <MenuBox />
          <ScreenBox />
          <Link
            href='/source/useMouse/blob'
            className='hover:text-blue-600 duration-300 text-2xl font-bold'>
            Check out the blob
          </Link>
        </div>
        <Blob ClientX={x} ClientY={y} />
      </div>
    </>
  );
};

export default Page;
