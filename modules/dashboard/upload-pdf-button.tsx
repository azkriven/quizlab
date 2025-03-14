"use client";

import type React from "react";

import { useState, useRef } from "react";
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
import { Progress } from "@/components/ui/progress";
import { Upload, FileText, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function UploadPdfButton() {
    const [open, setOpen] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [progress, setProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const droppedFile = e.dataTransfer.files[0];
            if (droppedFile.type === "application/pdf") {
                setFile(droppedFile);
            }
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (!file) return;

        setIsUploading(true);

        // Simulate upload progress
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += 10;
            setProgress(currentProgress);

            if (currentProgress >= 100) {
                clearInterval(interval);
                setIsUploading(false);
                // Here you would typically process the PDF
                setTimeout(() => {
                    setOpen(false);
                    setFile(null);
                    setProgress(0);
                }, 500);
            }
        }, 300);
    };

    const handleRemoveFile = () => {
        setFile(null);
        setProgress(0);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload PDF
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Upload PDF</DialogTitle>
                    <DialogDescription>
                        Upload a PDF to extract content for flashcards and
                        quizzes.
                    </DialogDescription>
                </DialogHeader>

                <div className="py-4">
                    {!file ? (
                        <div
                            className={cn(
                                "border-2 border-dashed rounded-lg p-12 text-center cursor-pointer hover:bg-muted/50 transition-colors",
                                isDragging && "border-primary bg-muted/50"
                            )}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <div className="flex flex-col items-center gap-2">
                                <FileText className="h-10 w-10 text-muted-foreground" />
                                <h3 className="font-medium">
                                    Drag & drop your PDF here
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    or click to browse files (max 10MB)
                                </p>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".pdf"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <FileText className="h-6 w-6 text-primary" />
                                    <div>
                                        <p className="font-medium">
                                            {file.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {(file.size / 1024 / 1024).toFixed(
                                                2
                                            )}{" "}
                                            MB
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={handleRemoveFile}
                                    disabled={isUploading}
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                            {isUploading && (
                                <div className="space-y-2">
                                    <Progress
                                        value={progress}
                                        className="h-2"
                                    />
                                    <p className="text-xs text-right text-muted-foreground">
                                        {progress}% uploaded
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <DialogFooter>
                    <Button
                        onClick={handleUpload}
                        disabled={!file || isUploading}
                    >
                        {isUploading ? "Uploading..." : "Upload and Process"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
