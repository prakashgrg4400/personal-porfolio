import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <EducationSection />
            <ContactSection />
        </main>
    );
}
