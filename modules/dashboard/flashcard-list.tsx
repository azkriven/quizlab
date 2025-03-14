"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for flashcards
const mockFlashcards = [
    {
        id: "1",
        title: "Basic JavaScript",
        description: "Core JavaScript concepts",
        count: 24,
        lastUpdated: "2 days ago",
    },
    {
        id: "2",
        title: "React Hooks",
        description: "All about React hooks",
        count: 15,
        lastUpdated: "1 week ago",
    },
    {
        id: "3",
        title: "CSS Grid",
        description: "CSS Grid layout techniques",
        count: 8,
        lastUpdated: "3 days ago",
    },
    {
        id: "4",
        title: "TypeScript Basics",
        description: "TypeScript fundamentals",
        count: 12,
        lastUpdated: "Yesterday",
    },
    {
        id: "5",
        title: "Next.js",
        description: "Next.js framework concepts",
        count: 18,
        lastUpdated: "4 days ago",
    },
];

export function FlashcardList() {
    const [flashcards, setFlashcards] = useState(mockFlashcards);

    const handleDelete = (id: string) => {
        setFlashcards(flashcards.filter((card) => card.id !== id));
    };

    return (
        <>
            {flashcards.map((flashcard) => (
                <Card key={flashcard.id} className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <div>
                                <CardTitle>{flashcard.title}</CardTitle>
                                <CardDescription>
                                    {flashcard.description}
                                </CardDescription>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">
                                            Open menu
                                        </span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        <Edit className="mr-2 h-4 w-4" />
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() =>
                                            handleDelete(flashcard.id)
                                        }
                                    >
                                        <Trash className="mr-2 h-4 w-4" />
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-sm text-muted-foreground">
                            {flashcard.count} cards • Updated{" "}
                            {flashcard.lastUpdated}
                        </div>
                    </CardContent>
                    <CardFooter className="mt-auto flex justify-between">
                        <Button variant="outline" size="sm">
                            Study
                        </Button>
                        <Button size="sm">Quiz</Button>
                    </CardFooter>
                </Card>
            ))}
        </>
    );
}
