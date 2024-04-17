/** @format */
"use client";

import React from "react";
import { Text, Code } from "@mantine/core";
import { useMouse } from "@mantine/hooks";

const MenuBox = () => {
  const { ref, x, y } = useMouse();

  return (
    <div className='flex items-center justify-center'>
      <div
        ref={ref}
        className='w-48 h-28 bg-blue-300 rounded-xl mr-4'
        style={{ marginTop: "10vh" }}
      />
      <Text className='text-white absolute mt-56' ta='center'>
        Mouse coordinates in menu: <Code>{`{ x: ${x}, y: ${y} }`}</Code>
      </Text>
    </div>
  );
};

export default MenuBox;
