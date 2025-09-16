import { Card } from "@/components/ui/card";

const education = [
    {
        degree: "Bachelor of Science in Computer Science and Information Technology (BSc.CSIT)",
        institution: "Soch College of IT",
        period: "2022 - 2024",
        description:
            "Specialized in programming, software engineering, web technologies, database systems, networking, and project management with a focus on practical application of computer science in real-world problem solving.",
        grade: "First Class",
    },
    // {
    //     degree: "Bachelor of Computer Applications (BCA)",
    //     institution: "Karnataka State University",
    //     period: "2019 - 2022",
    //     description:
    //         "Foundation in computer science, programming languages, and basic data analysis techniques.",
    //     grade: "First Class",
    // },
];

// const certifications = [
//     "Certified Data Analyst - IBM",
//     "Python for Data Science - Coursera",
//     "Power BI Certification - Microsoft",
//     "SQL for Data Analysis - Udemy",
// ];

export function EducationSection() {
    return (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Education
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {education.map((edu, index) => (
                        <Card
                            key={index}
                            className="p-6 bg-card border-border hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-semibold text-card-foreground">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-accent font-medium">
                                            {edu.institution}
                                        </p>
                                    </div>
                                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                                        {edu.period}
                                    </span>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {edu.description}
                                </p>
                                <div className="flex justify-between items-center pt-2 border-t border-border">
                                    <span className="text-sm font-medium text-card-foreground">
                                        Grade:
                                    </span>
                                    <span className="text-accent font-semibold">
                                        {edu.grade}
                                    </span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* <Card className="p-6 bg-card border-border">
                    <h3 className="text-xl font-semibold text-card-foreground mb-4">
                        Certifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3"
                            >
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <span className="text-muted-foreground">
                                    {cert}
                                </span>
                            </div>
                        ))}
                    </div>
                </Card> */}
            </div>
        </section>
    );
}
