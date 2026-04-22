"use client";

import { useState } from "react";

export default function FIRGenerator() {

  const [aadhaar, setAadhaar] = useState("");
  const [phone, setPhone] = useState("");

  const email =
    typeof window !== "undefined"
      ? localStorage.getItem("email")
      : null;

  const [form, setForm] = useState({
    name: "",
    incident: "",
    location: "",
    date: "",
  });

  const [fir, setFir] = useState("");

  const generateFIR = () => {
    if (!form.name || !form.incident || !form.location || !form.date) {
      alert("Please fill all fields!");
      return;
    }

    if (!/^\d{12}$/.test(aadhaar)) {
      alert("Enter valid 12-digit Aadhaar");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    const formattedDate = new Date(form.date).toLocaleDateString("en-IN");
    const aadhaarLast4 = aadhaar.slice(-4);

    const text = `
To,
The Station House Officer,
${form.location} Police Station

Subject: Complaint regarding ${form.incident}

Respected Sir/Madam,

I, ${form.name}, would like to report that on ${formattedDate}, an incident occurred involving ${form.incident} at ${form.location}.

My contact details are as follows:
Phone: ${phone}
Aadhaar: XXXX-XXXX-${aadhaarLast4}

Filed via Indian Legal Guide by: ${email}

I request you to kindly take necessary legal action regarding this matter.

Thanking you.

Yours sincerely,
${form.name}
    `;

    setFir(text);

    const savedFirs = JSON.parse(localStorage.getItem("firs") || "[]");

    savedFirs.push({
      name: form.name,
      incident: form.incident,
      location: form.location,
      date: form.date,
      phone,
      aadhaarLast4,
      email,
      time: new Date().toLocaleString(),
    });

    localStorage.setItem("firs", JSON.stringify(savedFirs));
  };

  const downloadFIR = () => {
    const blob = new Blob([fir], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "FIR.txt";
    a.click();
  };

  const generateWithAI = async () => {
    if (!form.incident || !form.location) {
      alert("Please fill at least incident and location!");
      return;
    }

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `Write a formal FIR for ${form.incident} at ${form.location}`,
      }),
    });

    const data = await res.json();
    setFir(data.reply);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 py-12">

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          FIR Generator 📄
        </h1>

        {/* ✅ SHOW USER EMAIL */}
        {email && (
          <p className="text-center text-sm text-gray-500 mb-6">
            Logged in as: {email}
          </p>
        )}

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded text-gray-900"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="text"
            placeholder="Incident (e.g. theft, harassment)"
            className="w-full px-4 py-3 border rounded text-gray-900"
            onChange={(e) => setForm({ ...form, incident: e.target.value })}
          />

          <input
            type="text"
            placeholder="Location"
            className="w-full px-4 py-3 border rounded text-gray-900"
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />

          <input
            type="text"
            placeholder="Aadhaar Number (12 digits)"
            className="w-full px-4 py-3 border rounded text-gray-900"
            onChange={(e) => setAadhaar(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border rounded text-gray-900"
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="date"
            className="w-full px-4 py-3 border rounded text-gray-900"
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

          <button
            onClick={generateFIR}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Generate FIR
          </button>

          <button
            onClick={generateWithAI}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700"
          >
            Generate with AI 🤖
          </button>
        </div>

        {/* ✅ FIR DISPLAY */}
        {fir && (
          <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-300 whitespace-pre-wrap">

            <h3 className="font-bold mb-4 text-lg text-gray-800">
              Generated FIR:
            </h3>

            <p className="text-gray-900 leading-relaxed font-serif text-[15px]">
              {fir}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              <button
                onClick={() => navigator.clipboard.writeText(fir)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Copy 📋
              </button>

              <button
                onClick={downloadFIR}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Download 📥
              </button>

              {/* ✅ NEW FEATURE */}
              <button
                onClick={() =>
                  window.open(
                    "https://www.cybercrime.gov.in/",
                    "_blank"
                  )
                }
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                File FIR Officially 🚔
              </button>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}