'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [otp, setOtp] = useState("")
  const [step, setStep] = useState(1)

  const router = useRouter()

  const sendOtp = async () => {
    const res = await fetch("/api/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     body: JSON.stringify({ email: email.trim().toLowerCase() }),
    })

    const data = await res.json()

    if (data.success) {
      alert("OTP sent to your email 📧")
      setStep(2)
    } else {
      alert("Failed to send OTP")
    }
  }

  const verifyOtp = async () => {
    const res = await fetch("/api/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
body: JSON.stringify({ 
  email: email.trim().toLowerCase(), 
  otp: otp.trim(), 
  password 
}),
    })

    const data = await res.json()

    if (data.success) {
      alert("Account created successfully!")
      router.push("/login")
    } else {
      alert("Invalid OTP")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-3 border rounded"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 p-3 border rounded"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={sendOtp}
              className="w-full bg-green-600 text-white py-2 rounded"
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full mb-4 p-2 border rounded"
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={verifyOtp}
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Verify & Create Account
            </button>
          </>
        )}
      </div>
    </div>
  )
}