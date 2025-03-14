import { DashboardShell } from "./dashboard-shell";
import { DashboardHeader } from "./dashboard-header";
import { FlashcardList } from "./flashcard-list";
import { UploadPdfButton } from "./upload-pdf-button";
import { CreateFlashcardButton } from "./create-flashcard-button";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <DashboardShell>
            <DashboardHeader
                heading="Flashcards"
                text="Create and manage your flashcards and quizzes."
            >
                <div className="flex items-center gap-2">
                    <CreateFlashcardButton />
                    <UploadPdfButton />
                </div>
            </DashboardHeader>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Link href="/quiz/create" className="h-full">
                    <div className="flex h-full flex-col justify-between rounded-lg border border-dashed border-primary/50 p-6 text-center hover:border-primary hover:bg-muted/50">
                        <div className="mx-auto flex max-w-[180px] flex-col items-center justify-center gap-2">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                                <PlusCircle className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-medium">Create Quiz</h3>
                            <p className="text-sm text-muted-foreground">
                                Generate a quiz from your flashcards or upload a
                                PDF
                            </p>
                        </div>
                        <Button className="mt-4 w-full">Create Quiz</Button>
                    </div>
                </Link>
                <FlashcardList />
            </div>
        </DashboardShell>
    );
}
