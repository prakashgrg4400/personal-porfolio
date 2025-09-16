"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export function Navigation() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "home",
                "about",
                "experience",
                "education",
                "contact",
            ];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="text-xl font-bold text-foreground">
                        Prakash Gurung
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.href)}
                                    className={cn(
                                        "px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-accent",
                                        activeSection === item.href.substring(1)
                                            ? "text-accent"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {item.name}
                                </button>
                            ))}
                            <Link
                                href="/resume"
                                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200"
                            >
                                Resume
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className="text-muted-foreground hover:text-accent transition-colors duration-200"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm border-t border-border">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.href)}
                                    className={cn(
                                        "block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-accent w-full text-left",
                                        activeSection === item.href.substring(1)
                                            ? "text-accent"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {item.name}
                                </button>
                            ))}
                            <Link
                                href="/resume"
                                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-accent transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Resume
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
