import Navbar from "@/modules/marketing/navbar";
import Footer from "@/modules/marketing/footer";
import "@/app/globals.css";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
