"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../public/ScrollToTop";

interface Category {
    _id: string;
    name: string;
    slug: string;
}

export default function LayoutWrapper({
    children,
    categories
}: {
    children: React.ReactNode,
    categories: Category[]
}) {
    const pathname = usePathname();
    const isAdminPage = pathname?.startsWith("/admin");

    if (isAdminPage) {
        return <>{children}</>;
    }

    return (
        <>
            <Header initialCategories={categories} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer initialCategories={categories} />
            <ScrollToTop />
        </>
    );
}
