import { NextResponse } from "next/server";

export function middleware(req) {
  const role = req.cookies.get("role")?.value;
  const subscribed = req.cookies.get("subscribed")?.value;

  const url = req.nextUrl.clone();

  if (url.pathname.startsWith("/ask-ai")) {

    // ❌ Not logged in
    if (!role) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }

    // 👑 Admin → direct access
    if (role === "admin") {
      return NextResponse.next();
    }

    // 👤 User → check subscription
    if (role === "user" && subscribed !== "true") {
      url.pathname = "/subscribe";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/ask-ai/:path*"],
};