"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

export function CreateFlashcardButton() {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically save the flashcard
        console.log({ title, description, front, back });
        setOpen(false);
        // Reset form
        setTitle("");
        setDescription("");
        setFront("");
        setBack("");
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Flashcard
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Create Flashcard</DialogTitle>
                        <DialogDescription>
                            Add a new flashcard to your collection.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter flashcard title"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description">
                                Description (optional)
                            </Label>
                            <Input
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter a short description"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="front">Front</Label>
                            <Textarea
                                id="front"
                                value={front}
                                onChange={(e) => setFront(e.target.value)}
                                placeholder="Question or term"
                                className="min-h-[80px]"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="back">Back</Label>
                            <Textarea
                                id="back"
                                value={back}
                                onChange={(e) => setBack(e.target.value)}
                                placeholder="Answer or definition"
                                className="min-h-[80px]"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Create Flashcard</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
