/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MantineProvider, createTheme } from "@mantine/core";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar, NavbarLO } from "@/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  let isAuthed: boolean;

  if (!user) {
    isAuthed = false;
    console.log(isAuthed);
  } else {
    isAuthed = true;
    console.log(isAuthed);
  }

  return (
    <html lang='en'>
      <body className={`${inter.className} dark-mode `}>
        {/* Wrap children with MantineProvider */}
        <MantineProvider theme={theme}>{children}</MantineProvider>
        {isAuthed ? <NavbarLO /> : <Navbar />}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
