/** @format */

import { Blob, Hero, Navbar } from "@/components";
import React from "react";

export default function page() {
  return (
    <>
      <main className="z-10">
        <Navbar />
        <Hero />
      </main>
      <div className="z-0">
        <Blob />
      </div>
    </>
  );
}
