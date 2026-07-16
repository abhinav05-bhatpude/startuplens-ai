"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("🎉 Registration successful!");

      router.push("/login");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
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
          Create your account and start validating
          your startup ideas with AI.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white placeholder:text-slate-400 outline-none transition-all focus:border-rose-500"
          />

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
            className="w-full rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Creating Account..."
              : "🚀 Create Account"}
          </button>

        </form>

        <p className="mt-8 text-center text-sm text-slate-400">

          Already have an account?{" "}

          <Link
            href="/login"
            className="font-semibold text-rose-400 hover:text-rose-300"
          >
            Sign In
          </Link>

        </p>

      </div>

    </main>
  );
}