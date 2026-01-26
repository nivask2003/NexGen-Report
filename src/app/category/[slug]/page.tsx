import NewsCard from "@/components/public/NewsCard";
import Sidebar from "@/components/public/Sidebar";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

    const mockPosts = [1, 2, 3, 4, 5, 6].map((i) => ({
        title: `The Impact of ${categoryName} on Modern Society in 2026`,
        slug: `${slug}-impact-${i}`,
        summary: "This article delves deep into how recent changes are affecting our daily lives and what to expect in the coming months.",
        featuredImage: "https://images.unsplash.com/photo-1504711432869-5d39a130f6c8?auto=format&fit=crop&q=80&w=800",
        category: { name: categoryName, slug: slug },
        author: "Alex Rivera",
        createdAt: new Date().toISOString(),
    }));

    return (
        <div className="max-w-news py-10">
            <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-3 h-10 bg-primary rounded-full" />
                    <h1 className="text-5xl font-black uppercase text-secondary">{categoryName}</h1>
                </div>
                <p className="text-muted text-lg">Exploring the latest updates and insights in {categoryName}.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {mockPosts.map((post, i) => (
                            <NewsCard key={i} post={post} />
                        ))}
                    </div>
                </div>

                <aside className="lg:col-span-4">
                    <Sidebar trendingPosts={[]} />
                </aside>
            </div>
        </div>
    );
}
