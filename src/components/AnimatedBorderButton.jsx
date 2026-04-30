// import { Download, ArrowRight } from "lucide-react";

// export const AnimatedBorderButton = ({children, ...props }) => {
//     return <button className="relative bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-1000 focus:outline-none focus-visible:ring-2 
//     focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opcaity-50 disabled:cursor-not-allowed group 
//     px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border">
//                             {/*Animated SVG Border}*/}
//                             <svg
//                             className="absolute left-0 top-0 w-full pointer-events"
//                             viewBox="0 0 200 60"
//                             preserveAspectRatio="none"
//                             style={{overflow:"visible"}}
//                             >
//                                 <path 
//                                 d="M 30, 1 A 29,29 0 0 0 1,30 A 29 0 0 0 30,59 L"
//                                 fill="none"
//                                 stroke= "var(--color-primary)"
//                                 strokeWidth="2"
//                                 strokeDasharray="400 500"
//                                 strokeDashoffset="400"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 className="animated-border-path"
//                                 />
//                             </svg>
//                             <span className="relative z-10 flex items-center justify-center gap-2 ">
//                                 {children}
                                
//                             </span>
//                         </button>
// }

import { Download, ArrowRight } from "lucide-react";

export const AnimatedBorderButton = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className={`relative bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-1000 focus:outline-none focus-visible:ring-2 
            focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group 
            px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border ${props.className || ""}`}
        >
            {/* Animated SVG Border */}
            <svg
                className="absolute left-0 top-0 w-full pointer-events-none"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
                style={{ overflow: "visible" }}
            >
                <rect
                    x="1"
                    y="1"
                    width="198"
                    height="58"
                    rx="30"
                    ry="30"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeDasharray="400 500"
                    strokeDashoffset="400"
                    strokeLinecap="round"
                    className="animated-border-path"
                />
            </svg>
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
};