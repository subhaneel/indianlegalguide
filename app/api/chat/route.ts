import { cookies } from "next/headers";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const cookieStore = cookies();
    const role = cookieStore.get("role")?.value;

    if (!role) {
      return Response.json({ reply: "Login required" });
    }

    const { message, location, email } = await req.json();

    // 👑 ADMIN
    if (role === "admin") {
      return await generateAIResponse(message, location);
    }

    const user = await prisma.user.findUnique({
      where: { email: email.trim().toLowerCase() },
    });

    if (!user) {
      return Response.json({ reply: "User not found. Please signup." });
    }

    // ✅ ONLY DB CHECK (FINAL FIX)
    if (!user.isSubscribed) {
      return Response.json({
        reply: "🚫 Please buy subscription to use AI",
      });
    }

    return await generateAIResponse(message, location);

  } catch (error) {
    console.error(error);
    return Response.json({ reply: "⚠️ Server error" });
  }
}

async function generateAIResponse(message: string, location: string) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const result = await model.generateContent(
    `You are a legal advisor for India.

User Location: ${location}
Question: ${message}

Give simple and helpful legal advice.`
  );

  return Response.json({
    reply: result.response.text(),
  });
}