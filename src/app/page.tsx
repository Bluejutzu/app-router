/** @format */

import { Hero, Navbar } from "@/components";
import React from "react";

// const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const loading = async () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
};

export default loading;
