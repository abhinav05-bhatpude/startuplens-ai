"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      alert("Invalid email or password");
      return;
    }

    window.location.href = "/dashboard";
  }

  async function handleGoogleLogin() {
    await signIn("google", {
      callbackUrl: "/dashboard",
    });
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">

      {/* Background */}

      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-rose-600/20 blur-[140px]" />

      <div className="absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-fuchsia-600/20 blur-[140px]" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Card */}

      <div className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">

        {/* Logo */}

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 text-4xl shadow-xl">

          🚀

        </div>

        <h1 className="text-center text-4xl font-bold text-white">
          StartupLens AI
        </h1>

        <p className="mt-3 text-center leading-7 text-slate-300">
          Sign in and continue building your next
          billion-dollar startup with AI.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white placeholder:text-slate-400 outline-none transition-all focus:border-rose-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white placeholder:text-slate-400 outline-none transition-all focus:border-rose-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:opacity-60"
          >
            {loading
              ? "Signing In..."
              : "🚀 Sign In"}
          </button>

        </form>

        <div className="my-8 flex items-center">

          <div className="h-px flex-1 bg-white/10" />

          <span className="mx-4 text-sm text-slate-400">
            OR
          </span>

          <div className="h-px flex-1 bg-white/10" />

        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full rounded-2xl border border-white/10 bg-white/10 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/20"
        >
          🌐 Continue with Google
        </button>

        <p className="mt-8 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-rose-400 hover:text-rose-300"
          >
            Register
          </Link>
        </p>

      </div>

    </main>
  );
}