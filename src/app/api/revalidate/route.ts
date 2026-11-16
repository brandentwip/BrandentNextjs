import { revalidatePath, revalidateTag } from 'next/cache';
import { parseBody } from 'next-sanity/webhook';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: 'Webhook revalidation is not configured.' }, { status: 503 });
  }

  const { isValidSignature, body } = await parseBody<{ _type?: string; slug?: { current?: string } }>(request, secret);
  if (!isValidSignature) {
    return NextResponse.json({ message: 'Invalid webhook signature.' }, { status: 401 });
  }

  revalidateTag('blog');
  revalidateTag('sanity');
  revalidatePath('/blog');
  revalidatePath('/sitemap.xml');
  if (body?._type === 'post' && body.slug?.current) {
    revalidatePath(`/blog/${body.slug.current}`);
  }
  if (body?._type === 'category' && body.slug?.current) {
    revalidatePath(`/blog/category/${body.slug.current}`);
  }
  return NextResponse.json({ revalidated: true });
}
