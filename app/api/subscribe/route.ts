import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const normalizedEmail = email.trim().toLowerCase();

    const user = await prisma.user.upsert({
      where: { email: normalizedEmail },
      update: {
        isSubscribed: true,
      },
      create: {
        email: normalizedEmail,
        password: "",
        isSubscribed: true,
      },
    });

    console.log("UPDATED USER:", user);

    return Response.json({ success: true });

  } catch (error) {
    console.error("SUBSCRIBE ERROR:", error);
    return Response.json({ success: false });
  }
}