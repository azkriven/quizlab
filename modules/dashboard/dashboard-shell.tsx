import type React from "react";
import { cn } from "@/lib/utils";
import { DashboardNav } from "./dashboard-nav";

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function DashboardShell({
    children,
    className,
    ...props
}: DashboardShellProps) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[240px_1fr]">
            <DashboardNav />
            <main className="flex w-full flex-col overflow-hidden">
                <div
                    className={cn(
                        "container flex-1 space-y-6 p-6 md:p-8",
                        className
                    )}
                    {...props}
                >
                    {children}
                </div>
            </main>
        </div>
    );
}
