"use client";

import FAQs from "@/modules/marketing/faqs";
import Features from "@/modules/marketing/features";
import HeroSection from "@/modules/marketing/hero-section";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <Features />
            <FAQs />
        </div>
    );
}
