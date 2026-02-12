import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // مثال: redirect لو اليوزر مش logged in
  const url = req.nextUrl.clone();

  if (!req.cookies.get('token')) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // لو كل شيء تمام، استمر في الطلب
  return NextResponse.next();
}

// اختياري: تحديد المسارات التي يعمل عليها الميدل وير
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'], 
};