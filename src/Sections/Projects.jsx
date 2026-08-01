import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Cutomer Churn Prediction",
    description:
      "A machine learning project that predicts customer churn for a telecommunications company. The project involves data cleaning, exploratory data analysis, feature engineering, and model building using Python and scikit-learn.",
    image: "/projects/customerhurnprediction.png",
    tags: ["Python", "scikit-learn", "Data Cleaning", "EDA", "Feature Engineering", "Machine Learning "],
    link: "https://drive.google.com/file/d/1W9bi4kq_KESFtpZJphy0kAfZypFYwHcG/view?usp=sharing",
    github: "#",
  },
  {
    title: "Flood Prediction Using Machine Learning",
    description:
      "A deep learning project focused on predicting flood-related water levels using time-series environmental data. The project involved data preprocessing, feature selection, sequence preparation, model training, and evaluation using LSTM models with different batch sizes and neuron settings.",
    image: "/projects/Floodprediction.png",
    tags: ["Python", "LSTM", "Deep Learning", "Time Series", "Data Preprocessing", "Model Evaluation"],
    link: "https://drive.google.com/file/d/1m1nLNT_NeolUYc4leJQeXrmFAwGreeeV/view?usp=sharing",
    github: "#",
  },
  {
    title: "Nepal Groove",
    description:
      "A full-stack music and restaurant-focused web application designed to promote Nepali culture, food, and entertainment. The project includes a modern React frontend, backend API integration, user authentication, restaurant features, and deployment using Vercel.",
    image: "/projects/NepalGroove.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Vercel", "Full Stack"],
    link: "https://nepal-groove-testapp.vercel.app/",
    github: "https://github.com/sonam201/frontendnepal",
  },
  {
    title: "Climate, Seasons & Skin Cancer",
    description:
      "A 16-year retrospective research study analyzing how climate and seasonal patterns relate to skin cancer trends in New Zealand. Published in the DPCJ journal, the project involved long-term data analysis, trend identification, and statistical interpretation of public health data.",
    image: "/projects/dermaimage.png",
    tags: ["Data Analysis", "Research", "Public Health", "Statistics", "Time Series"],
    link: "https://dpcj.org/index.php/dpc/article/view/7139/3899",
    github: "#",
  },
];

export const Projects = () => {
  // Holds the project whose "where do you want to go" popup is open (mobile only)
  const [activeProject, setActiveProject] = useState(null);

  const handleCardClick = (project) => {
    // Only trigger the popup on small screens. On md (tablet/laptop) and up,
    // the hover overlay already exposes both links, so do nothing there.
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setActiveProject(project);
    }
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">Make an impact.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of selected projects that reflect my skills in data analysis, machine learning, web
            development, and real-world problem solving.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => handleCardClick(project)}
              className="group glass rounded-2xl overflow-hidden md:row-span-1 cursor-pointer md:cursor-default"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links — laptop / iPad and larger only */}
                <div className="hidden md:flex absolute inset-0 items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-all">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>

      {/* Mobile popup: choose Project link or GitHub */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm md:hidden"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="glass rounded-2xl p-6 w-[85%] max-w-sm space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{activeProject.title}</h3>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1 rounded-full hover:bg-surface"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <p className="text-sm text-muted-foreground">Where would you like to go?</p>

            <div className="flex flex-col gap-3">
              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActiveProject(null)}
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-surface border border-border/50 hover:border-primary/50 hover:text-primary transition-all"
              >
                View Project
                <ArrowUpRight className="w-5 h-5" />
              </a>

              {activeProject.github && activeProject.github !== "#" && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setActiveProject(null)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-surface border border-border/50 hover:border-primary/50 hover:text-primary transition-all"
                >
                  View on GitHub
                  <FaGithub className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
