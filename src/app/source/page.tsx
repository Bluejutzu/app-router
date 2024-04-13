/** @format */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import axios from "axios";
import { NavigationMenuDemo } from "@/components/ui/navbartest";

const Page = () => {
  /* const [deployedVersion, setDeployedVersion] = useState("");
  const fetchDeploymentStatus = async () => {
    try {
      const response = await axios.get("/api/auth/deployment-status");
      const state = await response.data.state.toString();
      console.log("test", state);
      setDeployedVersion("lmao"+ state);
    } catch (error: any) {
      // Handle error
      console.error("Error fetching deployment status:", error.message);
    }
  };

  useEffect(() => {

    fetchDeploymentStatus();

    // Schedule fetchDeploymentStatus to be called every 10 minutes
    const interval = setInterval(fetchDeploymentStatus, 10 * 60 * 1000);

    // Clear interval when component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once on mount
*/
  return (
    <div className='flex flex-col h-screen justify-center items-center content-center bg-gradient-to-r from-purple-700/60 via-purple-600 to-pink-500 relative'>
      <div className='flex flex-col mb-5 sm:flex-row sm:justify-center sm:items-center gap-5 text-white text-2xl font-extrabold'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold mx-auto mb-2 '>Source Page</h2>
          <dl className='text-base font-semibold -mt-1'>
            <code>Just some random stuff </code>
          </dl>
          <div className='-mb-4 mt-4 mx-16 sm:-mb-2'>
            <NavigationMenuDemo />
          </div>
          <hr className='border-gray-300 w-3/4 mx-auto my-5 sm:w-full sm:my-10' />
          <dl className='font-semibold text-lg mt-1 -mb-6 text-white select-none'>
            Deployed Project Version: N/A
          </dl>
        </div>
      </div>

      <Link
        target='_blank'
        href='https://youtube.com/@Hyperplexed'
        className={` ${buttonVariants({
          variant: "ghost",
        })} absolute text-white text-base font-extrabold bottom-5 left-5 outline outline-white/60 hover:underline`}>
        Inspiration
      </Link>
    </div>
  );
};

export default Page;
