import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for NexGen Report. Learn how we collect, use, and protect your information.',
    alternates: {
        canonical: 'https://nex-gen-report.vercel.app/privacy-policy',
    },
};

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto py-20 px-6 sm:px-10">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-secondary">Privacy Policy</h1>
            <p className="text-muted font-bold mb-12 uppercase tracking-widest text-xs">Last updated: January 30, 2026</p>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                <section>
                    <p>
                        At <strong>NexGen Report</strong>, accessible from <a href="https://nex-gen-report.vercel.app" className="text-primary font-bold">nex-gen-report.vercel.app</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by NexGen Report and how we use it.
                    </p>
                    <p>
                        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-secondary">Information We Collect</h2>
                    <p>
                        NexGen Report follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services&apos; analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
                    </p>
                </section>

                <section className="bg-gray-50 p-8 rounded-3xl border border-border">
                    <h2 className="text-2xl font-black text-secondary mb-4">Cookies and Web Beacons</h2>
                    <p>
                        Like any other website, NexGen Report uses &quot;cookies&quot;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-secondary">Google DoubleClick DART Cookie</h2>
                    <p>
                        Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" target="_blank" className="text-primary hover:underline">https://policies.google.com/technologies/ads</a>
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-secondary">Our Advertising Partners</h2>
                    <p>
                        Some of advertisers on our site may use cookies and web beacons. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below:
                    </p>
                    <ul>
                        <li>
                            <strong>Google:</strong> <a href="https://policies.google.com/technologies/ads" className="text-primary">https://policies.google.com/technologies/ads</a>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-secondary">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
                    <p>Under the CCPA, among other rights, California consumers have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                        <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                        <li>Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-secondary">GDPR Data Protection Rights</h2>
                    <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
                        <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
                        <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
                    </ul>
                </section>

                <section className="pt-10 border-t border-border">
                    <h2 className="text-2xl font-black text-secondary mb-4">Consent</h2>
                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                </section>
            </div>
        </div>
    );
}
