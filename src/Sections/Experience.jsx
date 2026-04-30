const experiences = [
  {
    period: "Aug 2022 – Dec 2022",
    role: "React Developer Intern",
    company: "Level 9 Technology",
    description:
      "Supported front-end development, testing, and bug fixing within a team environment. Contributed to feature updates and interface improvements. Used Git for version control and collaborated with team members on assigned tasks.",
    technologies: ["React", "Git", "GitHub"],
    current: false,
  },
  {
    period: "2024 – 2025",
    role: "Researcher",
    company: "Skin Surgery Clinic, AUT",
    description:
      "Collaborated with a clinical partner to analyse real-world health data over a 16-year period. Identified seasonal patterns and long-term trends using statistical analysis. Refined findings through stakeholder feedback and contributed to a research manuscript prepared for publication.",
    technologies: ["Python", "Statistical Analysis"],
    current: false,
  },
];

export const Experience = () => {
    return <section
    id="experience" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 
        h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" / >
        <div className="container mx-auto px-6 relative z-10">
         {/* Section Header */}
         <div className="max-w-3xl mb-16">
            <span 
            className="text-secondary-foreground text-sm
            font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold 
            mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                Experience that <span className="font-serif font-normal text-white">
                    Speaks Volumes.
                </span>
            </h2>
            <p
  className="text-muted-foreground animate-fade-in animation-delay-200"
>
  A timeline of my journey, from an analytics graduate diving into
  data and development to building real-world solutions with purpose.
</p>
         </div>
         {/* Timeline */}
         <div className="relative">
            <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
        {/* Experience Items */}
<div className="space-y-12">
  {experiences.map((exp, idx) => (
    <div
      key={idx}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in"
      style={{ animationDelay: `${(idx + 1) * 150}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary border-2 border-primary/50 -translate-x-1/2 ring-4 ring-backgound z-10">
      {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>
        }
      </div>

      {/* Content */}
      <div
        className={`pl-8 md:pl-0 ${
          idx % 2 === 0
            ? "md:col-start-2 md:pl-16"
            : "md:col-start-1 md:pr-16 md:text-left"
        }`}
      >
        <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
          <span className="text-primary text-sm font-medium">
            {exp.period}
          </span>
          <h3 className=" font-semibold text-xl mt-2">
            {exp.role}
          </h3>
          <p className="text-muted-foreground">
            {exp.company}
          </p>
          <p className={`flex flex-wrap text-pretty gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
            {exp.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, techIdx) => (
              <span
                key={techIdx}
                className="px-3 mt-2 py-1 bg-surface text-xs rounded-full text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
         </div>
        </div>    
        
    </section>
};