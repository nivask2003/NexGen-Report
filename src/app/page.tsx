import NewsCard from "@/components/public/NewsCard";
import Sidebar from "@/components/public/Sidebar";
import Image from "next/image";
import Link from "next/link";

// Mock data for initial UI build
const MOCK_POSTS = [
  {
    title: "The Future of AI: How Generative Models are Changing the Creative Landscape",
    slug: "future-of-ai-generative-models",
    summary: "Artificial Intelligence is no longer just a buzzword. From coding to digital art, generative models are reshaping how we create and consume content.",
    featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    category: { name: "Technology", slug: "technology" },
    author: "Alex Rivera",
    createdAt: new Date().toISOString(),
  },
  {
    title: "Global Markets Brace for Economic Shift as Interest Rates Stabilize",
    slug: "global-markets-economic-shift",
    summary: "Investors are keeping a close eye on central bank decisions as inflation numbers show signs of cooling down across major economies.",
    featuredImage: "https://images.unsplash.com/photo-1611974717482-aa4e3ff708a3?auto=format&fit=crop&q=80&w=800",
    category: { name: "Business", slug: "business" },
    author: "Sarah Chen",
    createdAt: new Date().toISOString(),
  },
  {
    title: "10 Essential Travel Destinations for 2026: Beyond the Tourist Traps",
    slug: "travel-destinations-2026",
    summary: "Discover the hidden gems of the world that offer breathtaking views and authentic cultural experiences without the crowds.",
    featuredImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
    category: { name: "Lifestyle", slug: "lifestyle" },
    author: "James Wilson",
    createdAt: new Date().toISOString(),
  },
];

export default function Home() {
  return (
    <div className="max-w-news py-10">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-8 group relative overflow-hidden rounded-3xl bg-gray-900 aspect-[16/9]">
          <Image
            src={MOCK_POSTS[0].featuredImage}
            alt={MOCK_POSTS[0].title}
            fill
            className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
            <Link href="/category/technology" className="w-fit px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full mb-4">
              {MOCK_POSTS[0].category.name}
            </Link>
            <Link href={`/article/${MOCK_POSTS[0].slug}`}>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 group-hover:text-primary transition-colors">
                {MOCK_POSTS[0].title}
              </h1>
            </Link>
            <p className="text-gray-300 text-lg line-clamp-2 max-w-2xl mb-6">
              {MOCK_POSTS[0].summary}
            </p>
            <div className="flex items-center gap-4 text-white text-sm">
              <span className="font-bold">{MOCK_POSTS[0].author}</span>
              <span className="opacity-50">•</span>
              <span className="opacity-50">Jan 26, 2026</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-8">
          {MOCK_POSTS.slice(1).map((post) => (
            <div key={post.slug} className="group relative overflow-hidden rounded-2xl bg-gray-900 flex-grow aspect-video lg:aspect-auto">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <Link href={`/category/${post.category.slug}`} className="w-fit px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-full mb-2">
                  {post.category.name}
                </Link>
                <Link href={`/article/${post.slug}`}>
                  <h2 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ad Placement: Header Banner */}
      <div className="w-full bg-gray-50 border border-border h-32 mb-16 flex items-center justify-center text-muted text-xs font-bold rounded-xl border-dashed">
        ADVERTISEMENT AREA (Header Banner)
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Latest News */}
        <div className="lg:col-span-8 space-y-12">
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-primary rounded-full" />
                <h2 className="text-3xl font-black uppercase">Latest News</h2>
              </div>
              <Link href="/latest" className="text-sm font-bold text-primary hover:underline">View All</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {[...MOCK_POSTS, ...MOCK_POSTS].map((post, idx) => (
                <NewsCard key={idx} post={post} />
              ))}
            </div>
          </div>

          {/* Ad Placement: In-feed Ad */}
          <div className="w-full bg-gray-50 border border-border h-48 flex items-center justify-center text-muted text-xs font-bold rounded-xl border-dashed">
            ADVERTISEMENT AREA (In-feed Ad)
          </div>
        </div>

        {/* Right: Sidebar */}
        <div className="lg:col-span-4">
          <Sidebar trendingPosts={MOCK_POSTS} />
        </div>
      </div>
    </div>
  );
}

