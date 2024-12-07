import { NextResponse } from "next/server";

export function middleware(req) {
  const accessToken = req.cookies.get("accessToken"); 

  const url = req.nextUrl.clone();

  // Jika tidak ada accessToken
  if (!accessToken) {

    if (url.pathname !== "/login") {
      url.pathname = "/login";
      return NextResponse.redirect(url); 
    }
  } else {
    
    if (url.pathname === "/login") {
      url.pathname = "/home";
      return NextResponse.redirect(url); 
    }
  }

  const response = NextResponse.next();


  return response; 
}

export const config = {
  matcher: ["/home", "/login", "/news/:path*", ],
  //Mengapa menggunakan middleware? untuk menyimpan akses token user, agar bisa di protect
};
