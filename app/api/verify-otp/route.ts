import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email, otp, password } = await req.json();

    const normalizedEmail = email.trim().toLowerCase();

    // 🔍 GET USER FROM DB
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    console.log("ENTERED OTP:", otp);
    console.log("DB OTP:", user?.otp);

    // ❌ USER NOT FOUND
    if (!user) {
      return Response.json({ success: false });
    }

    // ❌ OTP WRONG
    if (user.otp !== otp.trim()) {
      return Response.json({ success: false });
    }

    // ❌ OTP EXPIRED
    if (!user.otpExpiry || new Date() > user.otpExpiry) {
      return Response.json({ success: false });
    }

    // ✅ SUCCESS → SAVE PASSWORD + CLEAR OTP
    await prisma.user.update({
      where: { email: normalizedEmail },
      data: {
        password,
        otp: null,
        otpExpiry: null,
      },
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("VERIFY OTP ERROR:", error);
    return Response.json({ success: false });
  }
}