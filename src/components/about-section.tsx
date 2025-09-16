import { Card } from "@/components/ui/card";
import Image from "next/image";

const skills = [
    { name: "Javascript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 88 },
    { name: "HTML", level: 82 },
    { name: "CSS", level: 75 },
];

export function AboutSection() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="w-64 h-80 rounded-lg overflow-hidden">
                            <Image
                                src="/prakash-photo.jpg"
                                alt="John Doe"
                                className="w-full h-full object-cover"
                                height={320}
                                width={256}
                            />
                        </div>

                        <Card className="p-6 bg-card border-border">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-card-foreground">
                                    Personal Info
                                </h3>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <p>
                                        <span className="text-card-foreground font-medium">
                                            Name:
                                        </span>{" "}
                                        Prakash Guruung
                                    </p>
                                    <p>
                                        <span className="text-card-foreground font-medium">
                                            Job Role:
                                        </span>{" "}
                                        Frontend Developer
                                    </p>
                                    <p>
                                        <span className="text-card-foreground font-medium">
                                            Experience:
                                        </span>{" "}
                                        1 year
                                    </p>
                                    <p>
                                        <span className="text-card-foreground font-medium">
                                            Address:
                                        </span>{" "}
                                        Pokhara , Nepal
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-foreground">
                                About Me
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                I&apos;m a frontend developer with a strong
                                foundation in building responsive and dynamic
                                web applications. My core skills include React,
                                Next.js, JavaScript, HTML, and CSS — tools I use
                                to craft clean, efficient, and user-friendly
                                interfaces. I enjoy turning complex ideas into
                                simple, interactive designs that deliver great
                                user experiences.
                            </p>
                            {/* <p className="text-muted-foreground leading-relaxed">
                                My expertise spans across Python programming,
                                SQL databases, statistical analysis, and
                                creating compelling data visualizations using
                                tools like Power BI and Tableau. I am committed
                                to helping organizations make data-driven
                                decisions.
                            </p> */}
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-foreground">
                                Skills
                            </h3>
                            <div className="space-y-4">
                                {skills.map((skill) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-foreground">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-muted-foreground">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-secondary rounded-full h-2">
                                            <div
                                                className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out"
                                                style={{
                                                    width: `${skill.level}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
