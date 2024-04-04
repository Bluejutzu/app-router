/** @format */
"use client";
import React, { useEffect } from "react";

const Blob: React.FC = () => {
  useEffect(() => {
    const blob = document.getElementById("blob");

    const pointerMoveHandler = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      if (blob) {
        blob.animate([{ left: `${clientX}px`, top: `${clientY}px` }], {
          duration: 3000,
          fill: "forwards",
        });
      }
    };

    window.onpointermove = pointerMoveHandler;
    document.querySelector("h1");

    return () => {
      window.onpointermove = null;
      document.querySelector("h1");
    };
  }, []);

  return (
    <div className='relative h-screen bg-black overflow-hidden'>
      <div
        id='blob'
        className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-aquamarine to-mediumpurple rounded-full opacity-80 animate-rotate'
        style={{ width: "34vmax", height: "34vmax" }}></div>
      <div
        id='blur'
        className='absolute w-full h-full z-2 backdrop-blur-12vmax'></div>
    </div>
  );
};

export default Blob;
