import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const normalizedEmail = email.trim().toLowerCase();

    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user || user.password !== password) {
      return Response.json({ success: false });
    }

    return Response.json({
      success: true,
      isSubscribed: user.isSubscribed,
    });

  } catch (err) {
    console.error(err);
    return Response.json({ success: false });
  }
}