"use client";

import { useState } from "react";

type UserType = {
  sessionId: number;
  name: string;
};

export default function StateWithTs() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<UserType | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      sessionId: Math.floor(Math.random() * 1000),
      name: username,
    });
  };
  return (
    <>
      {user ? (
        `${user.name} logged in`
      ) : (
        <form className="w-[100%] h-screen flex flex-col justify-center items-center gap-5">
          <input
            type="text"
            placeholder="Username"
            className="w-[300px] py-2 px-2 border rounded-lg"
            onChange={handleChange}
          />
          <button
            className="bg-blue-400 w-[300px] text-white py-2 rounded-lg"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      )}
    </>
  );
}
