"use client";

import type React from "react";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Create mailto link with form data
            const subject = encodeURIComponent(
                formData.subject || "Contact from Portfolio"
            );
            const body = encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            );
            const mailtoLink = `mailto:prakashgrg4400@gmail.com?subject=${subject}&body=${body}`;

            // Open default email client
            window.location.href = mailtoLink;

            // Reset form
            setFormData({ name: "", email: "", subject: "", message: "" });

            // toast({
            //     title: "Email client opened",
            //     description:
            //         "Your default email client should open with the message pre-filled.",
            // });
        } catch (error) {
            // toast({
            //     title: "Error",
            //     description:
            //         "There was an error opening your email client. Please try again.",
            //     variant: "destructive",
            // });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section
            id="contact"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Im always interested in new opportunities and
                        collaborations. Feel free to reach out if youd like to
                        discuss data analytics projects or potential roles.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <Card className="p-6 bg-card border-border">
                            <h3 className="text-xl font-semibold text-card-foreground mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            Email
                                        </p>
                                        <p className="text-card-foreground">
                                            prakashgrg4400@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            Phone
                                        </p>
                                        <p className="text-card-foreground">
                                            +977 9806120944
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            Location
                                        </p>
                                        <p className="text-card-foreground">
                                            Pokhara , Nepal
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 bg-card border-border">
                            <h3 className="text-xl font-semibold text-card-foreground mb-6">
                                Follow Me
                            </h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/in/prakash-gurung4400/"
                                    target="_blank"
                                    className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://github.com/prakashgrg4400"
                                    target="_blank"
                                    className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </Card>
                    </div>

                    <Card className="p-6 bg-card border-border">
                        <h3 className="text-xl font-semibold text-card-foreground mb-6">
                            Send Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium text-foreground"
                                    >
                                        Name *
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="bg-input border-border"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium text-foreground"
                                    >
                                        Email *
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="bg-input border-border"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="subject"
                                    className="text-sm font-medium text-foreground"
                                >
                                    Subject
                                </label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="bg-input border-border"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium text-foreground"
                                >
                                    Message *
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="bg-input border-border resize-none"
                                    placeholder="Tell me about your project or just say hello!"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                            >
                                {isSubmitting ? (
                                    "Opening Email Client..."
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
}
