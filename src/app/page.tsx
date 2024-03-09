/** @format */

import Hero from "@/components/Hero";
import React from "react";

// const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function page() {
  return (
    <main >
      <Hero />
    </main>
  );
}
