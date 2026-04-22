"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AskAIPage() {
  const router = useRouter();

  const [role, setRole] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const r = localStorage.getItem("role");
    const sub = localStorage.getItem("subscribed");

    // 🚫 NOT LOGGED IN
    if (!r) {
      router.push("/login");
      return;
    }

    setRole(r);
    setSubscribed(sub === "true");
    setLoading(false);
  }, []);

  // ⏳ Loading screen
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-600">
        Checking access...
      </div>
    );
  }

  // 👑 ADMIN → DIRECT ACCESS
  if (role === "admin") {
    return <ChatUI />;
  }

  // ❌ USER WITHOUT SUBSCRIPTION
  if (role === "user" && !subscribed) {
    return <SubscriptionUI />;
  }

  // ✅ USER WITH SUBSCRIPTION
  return <ChatUI />;
}






// ===================== SUBSCRIPTION UI =====================
function SubscriptionUI() {
  const handleSubscribe = () => {
    localStorage.setItem("subscribed", "true");

    // also update cookie (for middleware safety)
    document.cookie = "subscribed=true; path=/";

    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white border p-8 text-center rounded-xl shadow-md w-96">

        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          🔐 Subscription Required
        </h2>

        <p className="mb-6 text-gray-600">
          Please subscribe to use AI Legal Advisor
        </p>

        <button
          onClick={handleSubscribe}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Buy Subscription ₹499
        </button>

      </div>
    </div>
  );
}






// ===================== CHAT UI =====================
function ChatUI() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([
    { role: "assistant", content: "Welcome. Ask your legal question." },
  ]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const email = localStorage.getItem("email") || "test@gmail.com";

    const userMsg = { role: "user", content: input };

    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          location: "India",
          email,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "No response" },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error connecting to AI" },
      ]);
    }

    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        ⚖️ AI Legal Advisor
      </h1>

      {/* CHAT BOX */}
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 h-[400px] overflow-y-auto border">

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-4 flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

      </div>

      {/* INPUT */}
      <div className="w-full max-w-3xl mt-4 flex gap-2">

        <input
          type="text"
          placeholder="Type your legal question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-3 border rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>

      </div>

    </div>
  );
}