import { Card } from "@/components/ui/card";

const experiences = [
    {
        title: "Frontend Developer",
        company: "Upsela Company",
        period: "2024 - Present",
        description:
            " Building modern and responsive web applications using React, Next.js, JavaScript, HTML, and CSS. Focused on creating user-friendly interfaces, optimizing performance, and delivering scalable solutions.",
        skills: ["React", "Next.js", "Javscript", "HTML", "CSS"],
    },
    {
        title: "React Native Developer",
        company: "Swoyef Labs Pvt. Ltd.",
        period: "2024 - 2025",
        description:
            " Developed cross-platform mobile applications using React Native, delivering smooth user experiences across iOS and Android. Built reusable components, integrated APIs, and optimized app performance for scalability.",
        skills: [
            "React Native",
            "Mobile App Development",
            "API Integration",
            "Performance Optimization",
        ],
    },
];

export function ExperienceSection() {
    return (
        <section
            id="experience"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <Card
                            key={index}
                            className="p-6 bg-card border-border hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="md:col-span-1">
                                    <div className="text-accent font-semibold text-sm">
                                        {exp.period}
                                    </div>
                                </div>
                                <div className="md:col-span-3 space-y-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-card-foreground">
                                            {exp.title}
                                        </h3>
                                        <p className="text-accent font-medium">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
