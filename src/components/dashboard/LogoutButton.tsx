"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);

    await signOut({
      callbackUrl: "/login",
    });
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="
        flex
        items-center
        justify-center
        gap-2
        rounded-2xl
        bg-gradient-to-r
        from-rose-600
        via-pink-600
        to-fuchsia-600
        px-6
        py-3
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        active:scale-95
        disabled:cursor-not-allowed
        disabled:opacity-70
      "
    >
      {loading ? (
        <>
          ⏳
          Logging out...
        </>
      ) : (
        <>
          🚪
          Logout
        </>
      )}
    </button>
  );
}