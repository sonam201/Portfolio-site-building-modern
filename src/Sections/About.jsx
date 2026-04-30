import { Code2, Rocket, Users, Lightbulb, ChevronDown } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing simple, readable, and well-structured code.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Building efficient solutions with reliable results.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working well with teams and communicating clearly.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Learning new tools and improving digital solutions.",
  },
];

export const About = () => {
    return <section id = "about" className="py-32 relative overflow-hidden">
        <div className=" container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* left column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase ">
                        About Me
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground ">
                    Building the future, 
                    <span className="font-serif italic font-normal text-white">
                        {""}
                        One Component at a time.
                    </span>
                </h2>
                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 ">
                    <p>
                    I am a recent Master of Analytics graduate from Auckland University of Technology, with skills in Python, SQL, Excel, and data analysis. I enjoy working with data to find patterns, solve problems, and support better decision-making.
                    </p>

                    <p>
                    My experience includes academic and research projects in customer churn prediction, flood prediction, and skin cancer trend analysis. These projects helped me build practical skills in data cleaning, statistical analysis, machine learning, reporting, and presenting insights clearly.
                    </p>

                    <p>
                    I also have a computing background from my Bachelor’s degree, along with experience in React, JavaScript, HTML, CSS, Git, and GitHub. I am interested in data analyst, junior data engineer, and technology-focused roles where I can keep learning and contribute to real business problems.
                    </p>

                </div>
                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-foreground ">
                         My mission is to turn data into clear, useful insights that support smarter decisions and real-world impact.

                    </p>
                </div>
            </div>
            {/* Right Column */}
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                    <div className="glass p-6 rounded-2xl animate-fade-in "
                    style={{animationDelay: `${(idx + 1 ) * 100}ms`}}
                    > 
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20"><item.icon className="w-6 h-6 text-primary" /></div>
                        <h3 className="text-lg font-semibold mb-2">
                            {item.title}
                        </h3>
                        <p className=" text-sm text-muted-foreground">
                            {item.description}
                        </p>
                    </div> )
                )}
            </div>

        </div>
        </div>
    </section>
};