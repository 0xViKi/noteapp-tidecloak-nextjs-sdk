import { NextResponse } from 'next/server';
import config from './tidecloakAdapter.json';
import { createTideCloakMiddleware } from '@tidecloak/nextjs/server/tidecloakMiddleware';

export default createTideCloakMiddleware({
  config,
  publicRoutes: ['/'],
  protectedRoutes: {
    '/dashboard/*': ['user'],
  },
  onFailure: (ctx, req) => NextResponse.redirect(new URL('/login', req.url)),
  onError: (err, req) => NextResponse.rewrite(new URL('/error', req.url)),
});

export const config = {
  matcher: [
    '/((?!_next|public|favicon.ico).*)'
  ],
  runtime: 'edge',
};