/** @format */

import { Blob, Hero, Navbar } from "@/components";
import React from "react";
import { delay } from "@/lib/utils";

export default function page() {
  delay(1000);
  return (
    <>
      <main className='z-10'>
        {/*<Navbar />*/}
        <Hero />
      </main>
    </>
  );
}
