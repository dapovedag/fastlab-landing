// Security utilities for input validation and sanitization

// Simple rate limiter using in-memory store
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

/**
 * Rate limiter - Limits requests per IP address
 * @param identifier - Usually the IP address
 * @param limit - Maximum number of requests
 * @param windowMs - Time window in milliseconds
 * @returns true if rate limit exceeded, false otherwise
 */
export function isRateLimited(
  identifier: string,
  limit: number = 5,
  windowMs: number = 60000 // 1 minute default
): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return false;
  }

  if (record.count >= limit) {
    return true;
  }

  record.count++;
  return false;
}

/**
 * Clean up expired rate limit records (should be called periodically)
 */
export function cleanupRateLimitMap(): void {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}

// Run cleanup every 5 minutes
if (typeof window === "undefined") {
  // Only run on server
  setInterval(cleanupRateLimitMap, 5 * 60 * 1000);
}

/**
 * Sanitize HTML to prevent XSS attacks
 * @param input - String to sanitize
 * @returns Sanitized string
 */
export function sanitizeHtml(input: string): string {
  if (!input) return "";

  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

/**
 * Validate email format
 * @param email - Email to validate
 * @returns true if valid, false otherwise
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Validate string input
 * @param input - String to validate
 * @param maxLength - Maximum allowed length
 * @param minLength - Minimum allowed length
 * @returns true if valid, false otherwise
 */
export function isValidString(
  input: string,
  maxLength: number = 1000,
  minLength: number = 1
): boolean {
  if (!input || typeof input !== "string") return false;
  return input.length >= minLength && input.length <= maxLength;
}

/**
 * Validate and sanitize form data
 * @param data - Form data object
 * @returns Validated and sanitized data or null if invalid
 */
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  date?: string;
  time?: string;
}

export function validateAndSanitizeContactForm(
  data: any
): ContactFormData | null {
  // Validate required fields
  if (!data.name || !data.email || !data.company || !data.service || !data.message) {
    return null;
  }

  // Validate email
  if (!isValidEmail(data.email)) {
    return null;
  }

  // Validate string lengths
  if (!isValidString(data.name, 100, 2)) return null;
  if (!isValidString(data.company, 200, 2)) return null;
  if (!isValidString(data.message, 5000, 10)) return null;

  // Validate service is one of allowed values
  if (!["mvp", "dev"].includes(data.service)) {
    return null;
  }

  // Sanitize all string inputs
  return {
    name: sanitizeHtml(data.name.trim()),
    email: data.email.trim().toLowerCase(),
    company: sanitizeHtml(data.company.trim()),
    service: data.service,
    message: sanitizeHtml(data.message.trim()),
    date: data.date ? sanitizeHtml(data.date) : undefined,
    time: data.time ? sanitizeHtml(data.time) : undefined,
  };
}

/**
 * Get client IP address from request
 * @param request - Next.js request object
 * @returns IP address string
 */
export function getClientIp(request: Request): string {
  // Try to get IP from various headers (common in production with proxies)
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  return "unknown";
}
