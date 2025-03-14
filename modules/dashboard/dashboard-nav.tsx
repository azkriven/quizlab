"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BookOpen, Brain, FileText, Home, Settings } from "lucide-react";

const navItems = [
    {
        title: "Dashboard",
        href: "/",
        icon: Home,
    },
    {
        title: "Flashcards",
        href: "/flashcards",
        icon: BookOpen,
    },
    {
        title: "Quizzes",
        href: "/quizzes",
        icon: Brain,
    },
    {
        title: "PDFs",
        href: "/pdfs",
        icon: FileText,
    },
    {
        title: "Settings",
        href: "/settings",
        icon: Settings,
    },
];

export function DashboardNav() {
    const pathname = usePathname();

    return (
        <div className="flex h-full w-full flex-col border-r bg-muted/40">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold"
                >
                    <BookOpen className="h-6 w-6" />
                    <span>FlashQuiz</span>
                </Link>
            </div>
            <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-2 text-sm font-medium">
                    {navItems.map((item, index) => (
                        <Link key={index} href={item.href}>
                            <span
                                className={cn(
                                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                                    pathname === item.href
                                        ? "bg-accent"
                                        : "transparent"
                                )}
                            >
                                <item.icon className="mr-2 h-4 w-4" />
                                <span>{item.title}</span>
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}
