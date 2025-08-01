import { NextResponse } from 'next/server';
import configJson from './app/tidecloak.json';
import { createTideCloakMiddleware } from '@tidecloak/nextjs/server';

export default createTideCloakMiddleware({
  config: configJson,
  protectedRoutes: {
    '/dashboard/*': ['user'],
  },
  onFailure: (ctx, req) => NextResponse.redirect(new URL('/', req.url)),
  onError: (err, req) => NextResponse.rewrite(new URL('/', req.url)),
});

export const config = {
  matcher: [
    '/((?!_next|public|favicon.ico).*)'
  ]
};