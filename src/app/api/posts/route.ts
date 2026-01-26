import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Post from '@/models/Post';

export async function GET(req: NextRequest) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const trending = searchParams.get('trending');
    const limit = parseInt(searchParams.get('limit') || '10');

    const filter: any = { status: 'published' };
    if (category) filter.category = category;
    if (trending === 'true') filter.isTrending = true;

    try {
        const posts = await Post.find(filter)
            .populate('category')
            .sort({ createdAt: -1 })
            .limit(limit);
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    await dbConnect();
    try {
        const body = await req.json();
        const post = await Post.create(body);
        return NextResponse.json(post, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }
}
