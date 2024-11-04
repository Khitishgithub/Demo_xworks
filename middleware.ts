import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  
  if (
    path.startsWith("/_next/") || 
    path.startsWith("/api/") || 
    path.startsWith("/static/") || 
    /\.(.*)$/.test(path) 
  ) {
    return NextResponse.next();
  }

  // Add your protected routes logic here
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token && path.startsWith("/protected")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (token) {
    const { user_type_id } = token;

    if (user_type_id === 1 && !path.startsWith("/protected")) {
      return NextResponse.redirect(new URL("/protected", req.url));
    } else if (user_type_id === 2 && !path.startsWith("/protectedcorporate")) {
      return NextResponse.redirect(new URL("/protectedcorporate", req.url));
    } else if (user_type_id === 3 && !path.startsWith("/protectedadmin")) {
      return NextResponse.redirect(new URL("/protectedadmin", req.url));
    } else if (user_type_id === 4 && !path.startsWith("/dashboard4")) {
      return NextResponse.redirect(new URL("/dashboard4", req.url));
    }
  }

  return NextResponse.next();
}

