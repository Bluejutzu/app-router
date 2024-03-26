/** @format */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { delay } from "@/lib/utils";

interface UserInfo {
  id: string;
  email: string;
  username: string;
  profile: Object;
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
    } else {
      const data = {
        oldUser: userData.username,
        newUsername: newUsername,
        id: userData.id,
      };
      const api = `/api/users/updateUsername/`;

      fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          return response.json();
        })
        .then((data) => {
          console.log("Response:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      setEditingUsername(false);
      setSuccessMessage("Username updated successfully");
      await delay(3000);
      setSuccessMessage("");
    }
  }

  return (
    <div className='bg-gradient-to-l hover:from-[#252a3f] hover:to-[#423555]  rounded-lg shadow-md p-6'>
      <div className='text-cente  mt-4'>
        {successMessage && (
          <p className=' text-green-500 -mt-3 pb-2'>{successMessage}</p>
        )}
        {editingUsername ? (
          <>
            <input
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
              src={`${userData.profile}`}
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
