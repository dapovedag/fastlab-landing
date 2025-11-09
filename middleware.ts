import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add security headers (additional layer on top of next.config.ts)
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Only allow specific HTTP methods
  const allowedMethods = ["GET", "POST", "HEAD", "OPTIONS"];
  if (!allowedMethods.includes(request.method)) {
    return new NextResponse("Method Not Allowed", { status: 405 });
  }

  // Block requests with suspicious patterns in URL
  const suspiciousPatterns = [
    /\.\./,  // Directory traversal
    /<script/i,  // Script injection attempts
    /javascript:/i,  // JavaScript protocol
    /%00/,  // Null byte
    /\bphp\b/i,  // PHP file attempts
    /\bwp-/i,  // WordPress probing
    /\badmin/i,  // Admin panel probing (except our API routes)
  ];

  const url = request.nextUrl.pathname;
  const isApiRoute = url.startsWith("/api/");

  // Allow admin patterns in API routes
  const shouldCheckSuspicious = !isApiRoute;

  if (shouldCheckSuspicious) {
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(url)) {
        console.warn(`Blocked suspicious request: ${url}`);
        return new NextResponse("Forbidden", { status: 403 });
      }
    }
  }

  // Add CORS headers for API routes only
  if (isApiRoute) {
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    // Handle preflight requests
    if (request.method === "OPTIONS") {
      return new NextResponse(null, {
        status: 200,
        headers: response.headers,
      });
    }
  }

  return response;
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|logos/).*)",
  ],
};
