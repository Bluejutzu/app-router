/** @format */
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { delay } from "@/lib/utils";

interface UserInfo {
  id: string;
  email: string;
  username: string;
  profile: string;
  isAuthed: boolean;
}

export default function UserInfoCard({ userData }: { userData: UserInfo }) {
  const [editingUsername, setEditingUsername] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [newUsername, setNewUsername] = useState(userData.username);

  async function handleUsernameChange() {
    if (!newUsername) {
      setEditingUsername(true);
      setSuccessMessage("Username cannot be empty");
    } else if (newUsername.length < 4 || newUsername.length > 15) {
      setEditingUsername(false);
      setSuccessMessage("Username must be 4-15 characters");
    } else {
      const data = {
        oldUser: userData.username,
        newUsername: newUsername,
        id: userData.id,
        email: userData.email,
      };
      const api = `/api/users/updateUsername/`;

      try {
        const response = await fetch(api, {
          method: "POST",
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setEditingUsername(false);
        setSuccessMessage("Username updated successfully");
        await delay(3000);
        setSuccessMessage("");
      } catch (error) {
        console.error("Error:", error);
        setSuccessMessage("Error updating username");
      }
    }
  }

  return (
    <div className='bg-gradient-to-r hover:from-[#252a3f] hover:to-[#423555] rounded-lg shadow-md p-6 '>
      <div className='text-center mt-4'>
        {successMessage && (
          <p
            className={`pb-2 ${
              successMessage.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}>
            {successMessage}
          </p>
        )}
        {editingUsername ? (
          <>
            <input
              className='text-black'
              type='text'
              placeholder={userData.username}
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              autoFocus
            />
            <button
              className='ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
              onClick={handleUsernameChange}>
              Confirm
            </button>
          </>
        ) : (
          <div>
            <Image
              className='mx-auto mb-3 rounded-full'
              src={userData.profile}
              alt=''
              height={90}
              width={100}
            />
            <p
              className='text-lg font-semibold text-white cursor-pointer'
              onClick={() => setEditingUsername(true)}>
              {newUsername}
            </p>
          </div>
        )}
        <p className='text-sm text-gray-200/60'>{userData.email}</p>
        <p className='text-xs text-gray-400 mt-2'>ID: {userData.id}</p>
      </div>
    </div>
  );
}
