"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";

export default function ResumePage() {
    const [isLoading, setIsLoading] = useState(true);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = config.resumePath;
        link.download = "resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleOpenInNewTab = () => {
        window.open(config.resumePath, "_blank");
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors duration-200"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back to Portfolio</span>
                        </Link>

                        <div className="flex items-center space-x-4">
                            <Button
                                onClick={handleDownload}
                                variant="outline"
                                size="sm"
                                className="hidden sm:flex items-center space-x-2 bg-transparent"
                            >
                                <Download className="w-4 h-4" />
                                <span>Download</span>
                            </Button>

                            <Button
                                onClick={handleOpenInNewTab}
                                variant="outline"
                                size="sm"
                                className="hidden sm:flex items-center space-x-2 bg-transparent"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>Open in New Tab</span>
                            </Button>

                            {/* Mobile buttons */}
                            <Button
                                onClick={handleDownload}
                                variant="outline"
                                size="sm"
                                className="sm:hidden bg-transparent"
                            >
                                <Download className="w-4 h-4" />
                            </Button>

                            <Button
                                onClick={handleOpenInNewTab}
                                variant="outline"
                                size="sm"
                                className="sm:hidden bg-transparent"
                            >
                                <ExternalLink className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Resume Viewer */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
                    <div className="p-4 bg-secondary/20 border-b border-border">
                        <h1 className="text-2xl font-bold text-foreground">
                            Resume
                        </h1>
                        <p className="text-muted-foreground mt-1">
                            View and download my latest resume
                        </p>
                    </div>

                    <div className="relative">
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-background/50 z-10">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
                            </div>
                        )}

                        <iframe
                            src={config.resumePath}
                            className="w-full h-[calc(100vh-200px)] min-h-[600px]"
                            onLoad={() => setIsLoading(false)}
                            title="Resume PDF"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
