import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GraduationCap, Plus, Menu, X } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center font-bold text-2xl mr-4"
        >
          <GraduationCap className="mr-2 h-6 w-6" />
          QuizLab
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/"
            className="text-sm font-medium hover:underline"
          >
            Home
          </Link>
          <Link
            href="/flashcards"
            className="text-sm font-medium hover:underline"
          >
            AI Flashcard Generator
          </Link>
          <Link
            href="/quizzes"
            className="text-sm font-medium hover:underline"
          >
            AI Quiz Generator
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-sm pr-0 p-4">
              <SheetHeader className="text-left flex justify-between">
                <SheetTitle>Menu</SheetTitle>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="pl-0"><X className="h-6 w-6"/></Button>
                </SheetTrigger>
              </SheetHeader>
              {/* Add navigation links here */}
              <Link href="/" className="block py-2">
                Home
              </Link>
              <Link href="/flashcards" className="block py-2">
                AI Flashcard Generator
              </Link>
              <Link href="/quizzes" className="block py-2">
                AI Quiz Generator
              </Link>
              <Link href="/login" className="block py-2">
                Login
              </Link>
              <Link href="/signup" className="block py-2">
                Sign Up
              </Link>
              <div className="mt-2">
                <ModeToggle />
              </div>
              <Button size="sm" className="block py-2"><Plus className="mr-2 h-4 w-4" />Create</Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
