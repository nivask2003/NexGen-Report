import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Disclaimer',
    description: 'Disclaimer for NexGen Report content and services.',
    alternates: {
        canonical: 'https://nex-gen-report.vercel.app/disclaimer',
    },
};

export default function Disclaimer() {
    return (
        <div className="max-w-4xl mx-auto py-20 px-6 sm:px-10">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-secondary">Disclaimer</h1>
            <p className="text-muted font-bold mb-12 uppercase tracking-widest text-xs">Last updated: January 30, 2026</p>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                <section>
                    <p>
                        The information provided by <strong>NexGen Report</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on <a href="https://nex-gen-report.vercel.app" className="text-primary font-bold">nex-gen-report.vercel.app</a> (the &quot;Site&quot;) is for general informational purposes only.
                    </p>
                    <p>
                        All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                    </p>
                </section>

                <section className="bg-red-50 p-8 rounded-3xl border border-red-100">
                    <h2 className="text-2xl font-black text-secondary mb-4">No Professional Advice</h2>
                    <p>
                        The Site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-secondary">External Links</h2>
                    <p>
                        The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not researched, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                    </p>
                    <p>
                        We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-secondary">Affiliates Disclaimer</h2>
                    <p>
                        The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-secondary">Testimonials Disclaimer</h2>
                    <p>
                        The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services.
                    </p>
                </section>

                <section className="pt-10 border-t border-border">
                    <h2 className="text-2xl font-black text-secondary mb-4">Errors and Omissions</h2>
                    <p>
                        While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, NexGen Report is not responsible for any errors or omissions, or for the results obtained from the use of this information.
                    </p>
                </section>
            </div>
        </div>
    );
}
