/** @format */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import axios from "axios";
const jwt = require("jsonwebtoken");

const Page = () => {
  /*  const [deployedVersion, setDeployedVersion] = useState<string | null>(null);

   useEffect(() => {
    // Define a function to fetch deployment status
    const fetchDeploymentStatus = async () => {
      try {
        // Fetch JWT token from Next.js API route
        const response = await axios.get<{ token: string }>(
          "/api/auth/generate-token"
        );
        const jwtToken = await response.data.token;
        const auth_token = await jwt.decode(jwtToken);

        // Make authenticated request to Vercel API using JWT token
        const deploymentResponse = await axios.get(
          "https://api.vercel.com/v9/projects/prj_YPQBunfEJaEXjezvWRr4Iv8VEea1",
          {
            headers: {
              Authorization: `Bearer undefined`,
              "Content-Type": "application/json",
            },
          }
        );
        const depStatus = await deploymentResponse.data.latestDeployments[0]
          .readyState;
        // Handle response
        setDeployedVersion(depStatus);
      } catch (error: any) {
        // Handle error
        console.error("Error fetching deployment status:", error.message);
      }
    };

    // Call fetchDeploymentStatus initially
    fetchDeploymentStatus();

    // Schedule fetchDeploymentStatus to be called every 10 minutes
    const interval = setInterval(fetchDeploymentStatus, 10 * 60 * 1000);

    // Clear interval when component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once on mount
;;*/

  return (
    <div className='flex flex-col h-screen justify-center items-center content-center bg-gradient-to-r from-purple-700/60 via-purple-600 to-pink-500 relative'>
      <div className='flex flex-col mb-5 sm:flex-row sm:justify-center sm:items-center gap-5 text-white text-2xl font-extrabold'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold mx-auto mb-2'>Source Page</h2>
          <dl className='text-base font-semibold -mt-1'>
            <code>Just some random stuff </code>
          </dl>
          <hr className='border-gray-300 w-3/4 mx-auto my-5 sm:w-full sm:my-10' />
          <div className='flex flex-col sm:flex-row gap-5 mb-5'>
            <Link
              target='_blank'
              href='https://github.com/Bluejutzu/app-router/'
              className='text-base font-semibold opacity-60 hover:opacity-100 hover:underline'>
              Github
            </Link>
            <Link
              href='/'
              className='text-base font-semibold opacity-60 hover:opacity-100 hover:underline'>
              Homepage
            </Link>
            <Link
              href='/source/buttonProps'
              className='text-base font-semibold opacity-60 hover:opacity-100 hover:underline'>
              Buttons
            </Link>
            <Link
              href='/api/support/submit-a-suggestion'
              className='text-base font-semibold opacity-60 hover:opacity-100 hover:underline'>
              Support
            </Link>
          </div>
          <dl className='font-semibold text-lg mt-1 -mb-6 text-white select-none'>
            Deployed Project Version: Loading...
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
