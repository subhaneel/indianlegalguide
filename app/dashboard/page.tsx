"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
 const [firs, setFirs] = useState<any[]>([]);
 type Query = {
  question: string;
  location: string;
  time: string;
};
  const [queries, setQueries] = useState<any[]>([]);

  useEffect(() => {
    const savedFirs = JSON.parse(localStorage.getItem("firs") || "[]");
    const savedQueries = JSON.parse(localStorage.getItem("queries") || "[]");

    setFirs(savedFirs);
    setQueries(savedQueries);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        📊 Dashboard
      </h1>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-lg font-semibold text-gray-600">Total FIRs</h2>
          <p className="text-3xl font-bold text-blue-600">{firs.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-lg font-semibold text-gray-600">Total Queries</h2>
          <p className="text-3xl font-bold text-green-600">{queries.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-lg font-semibold text-gray-600">System Status</h2>
          <p className="text-2xl font-bold text-purple-600">Active</p>
        </div>

      </div>

      {/* RECENT FIR */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">🧾 Recent FIR</h2>
       {firs.length > 0 ? (
  <div className="text-gray-700">
    <p><strong>Name:</strong> {firs[firs.length - 1].name}</p>
    <p><strong>Incident:</strong> {firs[firs.length - 1].incident}</p>
    <p><strong>Location:</strong> {firs[firs.length - 1].location}</p>
    <p><strong>Date:</strong> {firs[firs.length - 1].date}</p>
    <p className="text-sm text-gray-500">{firs[firs.length - 1].time}</p>
  </div>
) : (
  <p className="text-gray-500">No FIRs generated yet.</p>
)}
      </div>

      {/* RECENT QUERY */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-900">💬 Recent Query</h2>
        {queries.length > 0 ? (
  <div className="text-gray-700">
    <p><strong>Question:</strong> {queries[queries.length - 1].question}</p>
    <p><strong>Location:</strong> {queries[queries.length - 1].location}</p>
    <p className="text-sm text-gray-500">{queries[queries.length - 1].time}</p>
  </div>
) : (
  <p className="text-gray-500">No queries yet.</p>
)}
      </div>
    </div>
  );
}