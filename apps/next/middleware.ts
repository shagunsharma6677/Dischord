import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  publicRoutes,
  authRoutes,
  UNAUTHORIZED_REDIRECT,
} from './routes';
import authConfig from './auth.config';
import NextAuth from 'next-auth';

const { auth }: any = NextAuth(authConfig);

export default auth((req: any) => {
  // req.auth
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  //If user is already loggedIn we will not allow them to access login page.
  //If user loggedout then dont allow them to acccess setting [protected routes page]

  if (isApiAuthRoute) {
    return null;
  }

  // By default we want user to allow auth route
  if (isAuthRoute) {
    //But before we check whather user is loggedIn or not
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL(UNAUTHORIZED_REDIRECT, nextUrl));
  }

  return null;
});
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
};
