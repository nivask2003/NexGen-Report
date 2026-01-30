import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms and Conditions',
    description: 'Terms and Conditions for using NexGen Report services.',
    alternates: {
        canonical: 'https://nex-gen-report.vercel.app/terms-and-conditions',
    },
};

export default function TermsAndConditions() {
    return (
        <div className="max-w-4xl mx-auto py-20 px-6 sm:px-10">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-secondary">Terms & Conditions</h1>
            <p className="text-muted font-bold mb-12 uppercase tracking-widest text-xs">Last updated: January 30, 2026</p>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                <section>
                    <h2 className="text-2xl font-black text-secondary">1. Introduction</h2>
                    <p>
                        Welcome to <strong>NexGen Report</strong>. These terms and conditions outline the rules and regulations for the use of NexGen Report&apos;s Website, located at <a href="https://nex-gen-report.vercel.app" className="text-primary font-bold">nex-gen-report.vercel.app</a>.
                    </p>
                    <p>
                        By accessing this website we assume you accept these terms and conditions. Do not continue to use NexGen Report if you do not agree to take all of the terms and conditions stated on this page.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-secondary">2. Cookies</h2>
                    <p>
                        We employ the use of cookies. By accessing NexGen Report, you agreed to use cookies in agreement with the NexGen Report&apos;s Privacy Policy. Most interactive websites use cookies to let us retrieve the user&apos;s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-secondary">3. Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise stated, NexGen Report and/or its licensors own the intellectual property rights for all material on NexGen Report. All intellectual property rights are reserved. You may access this from NexGen Report for your own personal use subjected to restrictions set in these terms and conditions.
                    </p>
                    <p className="bg-gray-50 p-6 rounded-2xl border-l-4 border-primary italic">
                        You must not: Republish material from NexGen Report; Sell, rent or sub-license material from NexGen Report; Reproduce, duplicate or copy material from NexGen Report; Redistribute content from NexGen Report.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-secondary">4. User Comments</h2>
                    <p>
                        Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. NexGen Report does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of NexGen Report, its agents and/or affiliates.
                    </p>
                    <p>
                        NexGen Report reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-secondary">5. Hyperlinking to our Content</h2>
                    <p>
                        The following organizations may link to our Website without prior written approval: Government agencies; Search engines; News organizations; Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-secondary">6. Content Liability</h2>
                    <p>
                        We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libellous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                    </p>
                </section>

                <section className="pt-10 border-t border-border">
                    <h2 className="text-2xl font-black text-secondary mb-4">7. Disclaimer</h2>
                    <p>
                        To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm italic">
                        <li>limit or exclude our or your liability for death or personal injury;</li>
                        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
