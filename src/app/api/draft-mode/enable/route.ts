import { defineEnableDraftMode } from 'next-sanity/draft-mode';
import { NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/lib/client';

export async function GET(request: Request) {
  const token = process.env.SANITY_API_READ_TOKEN;
  if (!token) {
    return NextResponse.json({ message: 'Draft preview is not configured. Set SANITY_API_READ_TOKEN on the server.' }, { status: 503 });
  }
  const handler = defineEnableDraftMode({ client: sanityClient.withConfig({ token }) });
  return handler.GET(request);
}
