'use client'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-green-50 min-h-screen">

      {/* HERO */}
      <section className="text-center py-24 px-6">

        {/* BIG FLAG */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full 
                        bg-gradient-to-r from-orange-400 via-white to-green-500 
                        flex items-center justify-center shadow-xl text-4xl">
          🇮🇳
        </div>

        {/* TITLE */}
        <h1 className="text-6xl font-bold mb-6 
                       bg-gradient-to-r from-orange-500 via-green-600 to-blue-600 
                       bg-clip-text text-transparent">
          Indian Legal Guide
        </h1>

        <p className="text-xl text-gray-700 mb-2">
          Your Trusted Companion for Legal Knowledge & Protection
        </p>

        <p className="text-orange-600 font-semibold text-lg">
          🇮🇳 Empowering Every Indian Citizen 🇮🇳
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap">

          <button
  onClick={() => {
    const role = localStorage.getItem("role")
    const subscribed = localStorage.getItem("subscribed")

    if (role === "admin" || subscribed === "true") {
      window.location.href = "/ask-ai"
    } else {
      window.location.href = "/subscribe"
    }
  }}
  className="px-8 py-4 rounded-xl text-white font-medium 
             bg-gradient-to-r from-blue-600 to-green-500 
             shadow-lg transition-all duration-300
             hover:scale-105 hover:shadow-2xl"
>
  💬 Ask AI Legal Advisor →
</button>

          <a href="/lawyers"
            className="px-8 py-4 rounded-xl text-white font-medium 
                       bg-gradient-to-r from-orange-500 to-red-500 
                       shadow-lg transition-all duration-300
                       hover:scale-105 hover:shadow-2xl">
            👨‍⚖️ Find a Lawyer →
          </a>

          <a href="/fir-generator"
            className="px-8 py-4 rounded-xl text-white font-medium 
                       bg-gradient-to-r from-purple-600 to-indigo-600 
                       shadow-lg transition-all duration-300
                       hover:scale-105 hover:shadow-2xl">
            📄 Generate FIR →
          </a>

          <a href="/dashboard"
            className="px-8 py-4 rounded-xl text-white font-medium 
                       bg-black 
                       shadow-lg transition-all duration-300
                       hover:scale-105 hover:shadow-2xl">
            📊 View Dashboard →
          </a>

        </div>
      </section>

      {/* 🔥 FIXED QUICK FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">

          {/* AI */}
          <div
  onClick={() => {
    const role = localStorage.getItem("role")
    const subscribed = localStorage.getItem("subscribed")

    if (role === "admin" || subscribed === "true") {
      window.location.href = "/ask-ai"
    } else {
      window.location.href = "/subscribe"
    }
  }}
  className="block group cursor-pointer"
>
            <div className="bg-white p-8 rounded-xl shadow-md text-center 
                            transition-all duration-300 
                            group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:scale-105">

              <div className="text-5xl mb-4">🤖</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AI Legal Advisor
              </h3>

              <p className="text-gray-600 mb-5">
                Ask legal questions and get instant AI-powered answers.
              </p>

              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg 
                                 transition group-hover:bg-blue-700">
                Ask Now →
              </button>

            </div>
          </div>

          {/* LAWYERS */}
          <a href="/lawyers" className="block group">
            <div className="bg-white p-8 rounded-xl shadow-md text-center 
                            transition-all duration-300 
                            group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:scale-105">

              <div className="text-5xl mb-4">📍</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Find Lawyers Nearby
              </h3>

              <p className="text-gray-600 mb-5">
                Locate lawyers and police services near your location.
              </p>

              <button className="bg-orange-500 text-white px-5 py-2 rounded-lg 
                                 transition group-hover:bg-orange-600">
                Find Now →
              </button>

            </div>
          </a>

          {/* HELPLINE */}
          <a href="/police-guidance" className="block group">
            <div className="bg-white p-8 rounded-xl shadow-md text-center 
                            transition-all duration-300 
                            group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:scale-105">

              <div className="text-5xl mb-4">🚨</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Emergency Support
              </h3>

              <p className="text-gray-600 mb-5">
                Get quick access to helplines and police guidance.
              </p>

              <button className="bg-red-600 text-white px-5 py-2 rounded-lg 
                                 transition group-hover:bg-red-700">
                Get Help →
              </button>

            </div>
          </a>

        </div>
      </section>

      {/* MAIN FEATURES (UNCHANGED GOOD PART) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-14 text-gray-800">
            Everything You Need for Legal Protection
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <a href="/documents" className="block group">
              <div className="p-8 border rounded-xl bg-white text-left shadow-md
                              transition-all duration-300 
                              group-hover:shadow-2xl group-hover:-translate-y-3 group-hover:scale-105">
                <h3 className="font-semibold text-2xl mb-3 text-gray-900">
                  Know Your Rights
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Understand your fundamental and legal rights in India.
                </p>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg 
                                   transition group-hover:bg-blue-700">
                  View Documents →
                </button>
              </div>
            </a>

            <a href="/fir-generator" className="block group">
              <div className="p-8 border rounded-xl bg-white text-left shadow-md
                              transition-all duration-300 
                              group-hover:shadow-2xl group-hover:-translate-y-3 group-hover:scale-105">
                <h3 className="font-semibold text-2xl mb-3 text-gray-900">
                  Generate FIR
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Generate FIR documents quickly and accurately.
                </p>
                <button className="bg-purple-600 text-white px-5 py-2 rounded-lg 
                                   transition group-hover:bg-purple-700">
                  Create FIR →
                </button>
              </div>
            </a>

            <a href="/emergency" className="block group">
              <div className="p-8 border rounded-xl bg-white text-left shadow-md
                              transition-all duration-300 
                              group-hover:shadow-2xl group-hover:-translate-y-3 group-hover:scale-105">
                <h3 className="font-semibold text-2xl mb-3 text-gray-900">
                  Emergency Help
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Get instant access to emergency contacts and support.
                </p>
                <button className="bg-red-600 text-white px-5 py-2 rounded-lg 
                                   transition group-hover:bg-red-700">
                  Get Help →
                </button>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-gray-100 py-12 text-center text-gray-600 text-sm">
        © 2026 Indian Legal Guide — For awareness purposes only.
      </section>

    </div>
  );
}