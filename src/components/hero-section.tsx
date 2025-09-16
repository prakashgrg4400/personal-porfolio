"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function HeroSection() {
    const router = useRouter();
    const handleViewWork = () => {
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleViewResume = () => {
        // In a real app, this would open a PDF or navigate to resume page
        console.log("Opening resume...");
        router.push("/resume");
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-accent text-sm font-medium tracking-wide uppercase">
                                Hello, Welcome to my Portfolio!
                            </p>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                                I am{" "}
                                <span className="text-accent">
                                    Prakash Gurung
                                </span>
                            </h1>
                            {/* <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground">
                                MCA
                            </h2> */}
                            <p className="text-lg text-muted-foreground">
                                I&apos;m a passionate frontend developer who
                                loves turning ideas into clean, interactive, and
                                user-friendly web experiences. With a strong
                                focus on modern frameworks, responsive design,
                                and attention to detail, I enjoy building
                                interfaces that not only look great but also
                                deliver seamless performance.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={handleViewWork}
                                className="bg-accent text-accent-foreground hover:bg-accent/90"
                            >
                                View Work
                            </Button>
                            <Button
                                variant="outline"
                                onClick={handleViewResume}
                                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                            >
                                My Resume
                            </Button>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent/20">
                                <Image
                                    src="/prakash-photo.jpg"
                                    alt="Prakash Gurung - Frontend Developer"
                                    className="w-full h-full object-cover"
                                    height={320}
                                    width={320}
                                />
                            </div>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
