/** @format */
"use client";

import React from "react";
import { Navbar } from "@/components";

export default function page() {
  const currentPath = window.location.href
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
