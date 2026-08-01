import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {AnimatedBorderButton} from "../components/AnimatedBorderButton";

const projects = [{
    title: "Cutomer Churn Prediction",
    description: "A machine learning project that predicts customer churn for a telecommunications company. The project involves data cleaning, exploratory data analysis, feature engineering, and model building using Python and scikit-learn.",
    image: "/projects/customerhurnprediction.png",
    tags : ["Python", "scikit-learn", "Data Cleaning", "EDA", "Feature Engineering", "Machine Learning "],
    link: "https://drive.google.com/file/d/1W9bi4kq_KESFtpZJphy0kAfZypFYwHcG/view?usp=sharing",
    github: "#",
},
{
    title: "Flood Prediction Using Machine Learning",
    description: "A deep learning project focused on predicting flood-related water levels using time-series environmental data. The project involved data preprocessing, feature selection, sequence preparation, model training, and evaluation using LSTM models with different batch sizes and neuron settings.",
    image: "/projects/Floodprediction.png",
    tags: ["Python", "LSTM", "Deep Learning", "Time Series", "Data Preprocessing", "Model Evaluation"],
    link: "https://drive.google.com/file/d/1m1nLNT_NeolUYc4leJQeXrmFAwGreeeV/view?usp=sharing",
    github: "#",
},
{
    title: "Nepal Groove",
    description: "A full-stack music and restaurant-focused web application designed to promote Nepali culture, food, and entertainment. The project includes a modern React frontend, backend API integration, user authentication, restaurant features, and deployment using Vercel.",
    image: "/projects/NepalGroove.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Vercel", "Full Stack"],
    link: "https://nepal-groove-testapp.vercel.app/",
    github: "https://github.com/sonam201/frontendnepal",
},
{
    title: "Climate, Seasons & Skin Cancer",
    description: "A 16-year retrospective research study analyzing how climate and seasonal patterns relate to skin cancer trends in New Zealand. Published in the DPCJ journal, the project involved long-term data analysis, trend identification, and statistical interpretation of public health data.",
    image: "/projects/skincancerprediction.png",
    tags: ["Data Analysis", "Research", "Public Health", "Statistics", "Time Series"],
    link: "https://dpcj.org/index.php/dpc/article/view/7139/3899",
    github: "#",
},                
];




export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              Make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
             A collection of selected projects that reflect my skills in data analysis, machine learning, web development, and real-world problem solving.
          </p>
        </div>
        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
                <div key={idx} className="group glass rounded-2xl overflow-hidden md:row-span-1"
                style={{ animationDelay: `${(idx + 1) * 100}ms`}}>
                    <div className="relative overflow-hidden aspect-video  ">
                        <img src={project.image} alt= {project.title}
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                         <div  className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>
                         {/* Overlay Links */}
                         <div className=" absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100"> 
                            <a target="_blank" href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all ">
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                            <a target="_blank" href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all ">
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
                            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary 
                            group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                        </div> 
                          <p className="text-muted-foreground text-sm">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">{project.tags.map((tag,tagIdx) =>(
                                <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag }</span>
                            ))}</div>
                       
                    </div>
                </div>
            ))}
        </div>
        {/* View All Projects Button */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton>
                View All Projects <ArrowUpRight className="w-5 h-5"/>
            </AnimatedBorderButton>
        </div>

      </div>
    </section>
  );
};
