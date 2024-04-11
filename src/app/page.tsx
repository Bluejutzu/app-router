/** @format */

import { Hero, Navbar } from "@/components";
import React from "react";
import { env } from "@/lib/utils";

export default function page() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}