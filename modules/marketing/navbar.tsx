import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="font-bold text-2xl">
          QuizLab
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Menu</Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-sm">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Take control of your study experience.
                </SheetDescription>
              </SheetHeader>
              {/* Add navigation links here */}
              <Link href="/about" className="block py-2">About</Link>
              <Link href="/features" className="block py-2">Features</Link>
              <Link href="/pricing" className="block py-2">Pricing</Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
