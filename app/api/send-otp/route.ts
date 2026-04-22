import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const normalizedEmail = email.trim().toLowerCase();

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const expiry = new Date(Date.now() + 5 * 60 * 1000);

    // ✅ THIS WAS FAILING BEFORE
    await prisma.user.upsert({
      where: { email: normalizedEmail },
      update: {
        otp,
        otpExpiry: expiry,
      },
      create: {
        email: normalizedEmail,
        password: "",
        otp,
        otpExpiry: expiry,
      },
    });

    console.log("OTP:", otp);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: normalizedEmail,
      subject: "Your Verification Code",
      text: `Your OTP is: ${otp}`,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("SEND OTP ERROR:", error);
    return Response.json({ success: false });
  }
}