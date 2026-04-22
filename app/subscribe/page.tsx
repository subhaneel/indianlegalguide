"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SubscribePage() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");

    // 👑 ADMIN → skip subscription
    if (role === "admin") {
      router.push("/ask-ai");
    }
  }, []);

  const handlePayment = async () => {
    try {
      // 1️⃣ Create order from backend
      const res = await fetch("/api/create-order", {
        method: "POST",
      });

      const order = await res.json();

      // 2️⃣ Razorpay options
     const options = {
  key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  amount: order.amount,
  currency: "INR",
  name: "Indian Legal Guide",
  description: "AI Subscription",
  order_id: order.id,

  handler: async function () {
    const email = localStorage.getItem("email")?.trim();

    console.log("EMAIL:", email);

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    console.log("SUBSCRIBE RESPONSE:", data);

    if (data.success) {
      localStorage.setItem("subscribed", "true");
      document.cookie = "subscribed=true; path=/";

      alert("Payment Successful ✅");

      window.location.href = "/ask-ai";
    } else {
      alert("Subscription update failed ❌");
    }
  }, // ✅ THIS COMMA WAS MISSING
};

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      alert("Payment failed. Try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white border p-8 text-center rounded-xl shadow-md w-96">

        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          🔐 Subscription Required
        </h2>

        <p className="mb-6 text-gray-600">
          Pay ₹2 to unlock AI Legal Advisor
        </p>

        <button
          onClick={handlePayment}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Pay ₹2 & Unlock
        </button>

      </div>

    </div>
  );
}