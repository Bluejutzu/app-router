/** @format */
"use client";

import React from "react";
import { Navbar } from "@/components";
import { usePathname } from "next/navigation";

export default function page() {
  const currentPath = usePathname();

  return (
    <div>
      <Navbar />
      <div className='text-white flex flex-col h-screen'>
        <div className='flex-grow flex items-center lg:justify-center lg:ml-10 sm:justify-center select-auto'>
          Current Path: {currentPath}
        </div>
      </div>
    </div>
  );
}
