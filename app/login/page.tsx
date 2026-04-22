"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        password,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      alert("Invalid credentials");
      return;
    }

    // ✅ STORE USER
    localStorage.setItem("email", email.trim().toLowerCase());
    localStorage.setItem("role", "user");

    // ✅ SET COOKIE
    document.cookie = "role=user; path=/";
    document.cookie = `subscribed=${data.isSubscribed}; path=/`;

    // 🔥 MAIN FIX
    if (data.isSubscribed) {
      router.push("/ask-ai");
    } else {
      router.push("/subscribe"); // 👈 THIS WAS MISSING
    }

  } catch (err) {
    console.error(err);
    alert("Login failed");
  }
};

  // ✅ RETURN MUST BE INSIDE COMPONENT
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>

      </div>
    </div>
  );
}