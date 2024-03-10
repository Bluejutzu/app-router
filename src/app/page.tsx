/** @format */

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
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
