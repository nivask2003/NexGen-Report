import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Post from '@/models/Post';

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        await dbConnect();
        const { slug } = await params;
        const { action } = await request.json();

        const increment = action === 'unlike' ? -1 : 1;

        const post = await Post.findOneAndUpdate(
            { slug, status: 'published' },
            { $inc: { likes: increment } },
            { new: true }
        );

        if (!post) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        return NextResponse.json({ likes: post.likes });
    } catch (error) {
        console.error("Error updating like count:", error);
        return NextResponse.json({ error: 'Failed to update like count' }, { status: 500 });
    }
}
