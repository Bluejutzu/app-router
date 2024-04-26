/** @format */
"use client";

import React from "react";
import { useMouse, useWindowScroll } from "@mantine/hooks";

interface BlobProps {
  ClientX?: number;
  ClientY?: number;
  ref?: any;
}

const Blob: React.FC<BlobProps> = ({ ClientX, ClientY }) => {
  const [scroll] = useWindowScroll();
  const { x, y } = useMouse();

  ClientX = x - 115 + scroll.x;
  ClientY = y - 120 + scroll.y;

  return (
    <div className=' absolute top-0 left-0 blur-[100px] '>
      <div
        className=' absolute bg-gradient-to-r from-purple-600/60 via-purple-600 to-pink-400 w-[300px] h-[350px] rounded-full transition animate-spin-slow'
        style={{
          left: `${ClientX}px`,
          top: `${ClientY}px`,
        }}></div>
    </div>
  );
};

export default Blob;
