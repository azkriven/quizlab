import "@/app/globals.css";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/modules/marketing/hero5-header";

export default function QuizLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <HeroHeader />
            <div className="flex-grow mt-20">{children}</div>
            <FooterSection />
        </div>
    );
}
