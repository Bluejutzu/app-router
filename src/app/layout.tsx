/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MantineProvider, createTheme } from "@mantine/core";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Expermintel Webpage created via Reactjs, NextJs and deployed with vercel",
};

// Define your Mantine theme
const theme = createTheme({
  /** Put your Mantine theme overrides here */
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-gray-900 `}>
        {/* Wrap children with MantineProvider */}
        <MantineProvider theme={theme}>{children}</MantineProvider>
        <Analytics />
      </body>
    </html>
  );
}
