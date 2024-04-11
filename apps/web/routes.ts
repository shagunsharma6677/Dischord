/**
 * An Array of routes that are accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/", "/auth/new-verification"];

/**
 * An Array of routes that are used for authentication.
 * These routes will redirect logged-in users to /[protected-routes]
 * @type {string[]}
 */
export const authRoutes: string[] = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * Prefix for authentication API routes
 * This will always be allowed by both loggedIn and logged out user.
 * @type {string[]}*/
export const apiAuthPrefix: string = "/api/auth";

/**
 * Default redirect path after loggingIn.
 * @type {string[]}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
