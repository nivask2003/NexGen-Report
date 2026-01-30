import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn more about NexGen Report, our mission, and our commitment to high-quality journalism.',
    alternates: {
        canonical: 'https://nex-gen-report.vercel.app/about-us',
    },
};

export default function AboutUs() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About NexGen Report",
        "description": "Learn more about NexGen Report, our mission, and our commitment to high-quality journalism.",
        "url": "https://nex-gen-report.vercel.app/about-us",
        "publisher": {
            "@type": "Organization",
            "name": "NexGen Report",
            "logo": {
                "@type": "ImageObject",
                "url": "https://nex-gen-report.vercel.app/og-image.png"
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-20 px-6 sm:px-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-black mb-6 text-secondary">Our Story</h1>
                <p className="text-muted font-bold uppercase tracking-widest text-sm">Truth. Clarity. Independent.</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                <section>
                    <p className="text-xl md:text-2xl font-medium text-secondary">
                        Welcome to <strong>NexGen Report</strong>, your premier destination for high-quality journalism, trending stories, and in-depth analysis. We are committed to delivering accurate, timely, and engaging news content that matters to you.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16 not-prose">
                    <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                        <h3 className="text-xl font-black text-primary mb-4">Our Mission</h3>
                        <p className="text-secondary/80 font-medium">
                            To empower our readers with knowledge. In a world of information overload, we strive to cut through the noise and provide clear, reliable news across technology, business, and lifestyle.
                        </p>
                    </div>
                    <div className="bg-secondary p-8 rounded-3xl border border-white/10 shadow-xl">
                        <h3 className="text-xl font-black text-white mb-4">Our Integrity</h3>
                        <p className="text-white/70 font-medium">
                            We believe in the power of truth. Our team follow strict editorial guidelines to ensure every article is fact-checked and verified before it reaches your screen.
                        </p>
                    </div>
                </div>

                <section>
                    <h2 className="text-3xl font-black text-secondary">What We Cover</h2>
                    <p>
                        Our reporting spans the most impactful sectors of the modern era, focusing on how global shifts affect your daily life and future.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                        {[
                            { title: 'Technology', desc: 'The latest in AI, hardware, and digital transformation.' },
                            { title: 'Business', desc: 'Insights into global markets, startups, and economic shifts.' },
                            { title: 'Lifestyle', desc: 'Tips on travel, health, and modern living.' },
                            { title: 'World News', desc: 'Crucial updates on politics and global affairs.' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start border-b border-gray-100 pb-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                <div>
                                    <h4 className="font-black text-secondary m-0">{item.title}</h4>
                                    <p className="text-sm text-muted m-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="pt-20 text-center border-t border-gray-100">
                    <h2 className="text-3xl font-black text-secondary mb-4">Join Our Journey</h2>
                    <p className="max-w-2xl mx-auto">
                        We are just getting started. As we grow, our commitment to independent, high-impact journalism remains unwavering. Thank you for being a part of the NexGen Report community.
                    </p>
                </section>
            </div>
        </div>
    );
}
