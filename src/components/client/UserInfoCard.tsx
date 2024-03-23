/** @format */
"use client";

import { useState } from "react";

interface UserInfo {
  id: string;
  email: string;
  username: string;
  profile: string;
  isAuthed: boolean;
}

export default function UserInfoCard({ userData }: { userData: UserInfo }) {
  const [editingUsername, setEditingUsername] = useState(false);
  const [newUsername, setNewUsername] = useState(userData.username);
  const [successMessage, setSuccessMessage] = useState("");

  const handleUsernameChange = async () => {
    try {
      const response = await fetch(`/api/users/updateUsername/${userData.id}`, {
        // Updated endpoint URL
        // Assuming you're using a PUT request for updating
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: newUsername }), // Sending only the updated username
      });

      if (response.ok) {
        setSuccessMessage("Username updated successfully");
        // Update the username in the local state
        setNewUsername(newUsername);
        // Hide the editing field
        setEditingUsername(false);
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
        {successMessage && <p className='text-green-500'>{successMessage}</p>}
        {editingUsername ? (
          <>
            <input
              type='text'
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              autoFocus
            />
            <button
              className='ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
              onClick={() => handleUsernameChange()}>
              Confirm
            </button>
          </>
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
