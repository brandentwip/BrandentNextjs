import { draftMode } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  (await draftMode()).disable();
  const requestedPath = request.nextUrl.searchParams.get('redirect');
  const path = requestedPath?.startsWith('/') && !requestedPath.startsWith('//') ? requestedPath : '/blog';
  return NextResponse.redirect(new URL(path, request.url));
}
