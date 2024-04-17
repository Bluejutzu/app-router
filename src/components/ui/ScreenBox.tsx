/** @format */
"use client";

import React from "react";
import { Text, Code } from "@mantine/core";
import { useMouse } from "@mantine/hooks";


const ScreenBox = () => {
  const { x, y } = useMouse();

  return (
    <div className='mt-10 relative'>
      
      <Text className='text-white' ta='center'>
        Mouse coordinates on screen: <Code>{`{ x: ${x}, y: ${y} }`}</Code>
      </Text>
    </div>
  );
};

export default ScreenBox;
