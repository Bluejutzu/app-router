/** @format */
"use client";

// UserInfoCard.tsx

import { useState } from "react";
import { redirect } from "next/navigation";

interface UserInfo {
  id: string;
  email: string;
  username: string;
  profile: string;
  isAuthed: boolean;
}

export default function UserInfoCard({ userData }: { userData: UserInfo }) {
  const router = redirect
  const [editingUsername, setEditingUsername] = useState(false);
  const [newUsername, setNewUsername] = useState(userData.username);

  const handleUsernameChange = async () => {
    try {
      const response = await fetch("/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userData.id, newUsername }),
      });

      if (response.ok) {
        // Redirect to dashboard or reload page
        router("/user/dashboard")
      } else {
        console.error("Failed to update username");
      }
    } catch (error) {
      console.error("Error updating username:", error);
    }
  };

  return (
    <div className='bg-white rounded-lg shadow-md p-6'>
      <div className='text-center mt-4'>
        {editingUsername ? (
          <input
            type='text'
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            onBlur={() => {
              setEditingUsername(false);
              handleUsernameChange();
            }}
            autoFocus
          />
        ) : (
          <p
            className='text-lg font-semibold text-gray-800 cursor-pointer'
            onClick={() => setEditingUsername(true)}>
            {userData.username}
          </p>
        )}
        <p className='text-sm text-gray-600'>{userData.email}</p>
        <p className='text-xs text-gray-400 mt-2'>ID: {userData.id}</p>
      </div>
    </div>
  );
}
