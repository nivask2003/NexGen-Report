import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Post from '@/models/Post';
import Category from '@/models/Category';

export async function GET() {
    try {
        await dbConnect();

        const [totalPosts, publishedPosts, draftPosts, totalCategories] = await Promise.all([
            Post.countDocuments(),
            Post.countDocuments({ status: 'published' }),
            Post.countDocuments({ status: 'draft' }),
            Category.countDocuments(),
        ]);

        // For "Total Views", we don't have a views field in the schema yet, 
        // but we can mock it or return 0 for now until we add tracking.
        return NextResponse.json({
            totalPosts,
            publishedPosts,
            draftPosts,
            totalCategories,
            totalViews: 0 // Placeholder for future enhancement
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
    }
}
