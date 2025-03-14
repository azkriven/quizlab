import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("size-7 w-7", className)}
        >
            <path d="M16 17.2A4 4 0 0 0 19.2 20" />
            <path d="M4.8 20A4 4 0 0 0 8 17.2" />
            <path d="M12 14.5V8" />
            <circle cx="12" cy="6" r="3" />
            <path d="M4 6h3.5a4 4 0 0 1 8 0H20" />
        </svg>
    );
};

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("size-7 w-7", className)}
        >
            <path d="M16 17.2A4 4 0 0 0 19.2 20" />
            <path d="M4.8 20A4 4 0 0 0 8 17.2" />
            <path d="M12 14.5V8" />
            <circle cx="12" cy="6" r="3" />
            <path d="M4 6h3.5a4 4 0 0 1 8 0H20" />
        </svg>
    );
};
