import Navbar from "@/modules/marketing/navbar";
import "@/app/globals.css";
import FooterSection from "@/components/footer";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main className="flex-grow">{children}</main>
            <FooterSection />
        </div>
    );
}
