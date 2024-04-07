import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('middleware');
  return NextResponse.next(request);
}

// See "Matching Paths" below to learn more
// Middleware run when map with mathchers
// Ex: above code will log when user go to posts page and posts page details
export const config = {
  matcher: '/posts/:path',
};
