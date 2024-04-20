/** @format */
"use client"

import React from "react";
import { useMouse } from "@mantine/hooks";

interface BlobProps {
  ClientX?: number;
  ClientY?: number;
  ref?: any;
}

const Blob: React.FC<BlobProps> = ({ ClientX, ClientY }) => {
  const {x, y} = useMouse()
  ClientX = x - 115;
  ClientY = y - 120;
  return (
    <div className='absolute top-0 left-0 blur-3xl '>
      <div
        className=' z-0 absolute bg-gradient-to-r from-purple-700/60 via-purple-600 to-pink-500 w-[300px] h-[300px] rounded-full blur-3xl transition animate-spin-slow   '
        style={{
          left: `${ClientX}px`,
          top: `${ClientY}px`,
        }}></div>
    </div>
  );
};

export default Blob;
