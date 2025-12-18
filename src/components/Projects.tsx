import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface FloatingCode {
    id: number;
    text: string;
    x: number;
    y: number;
    duration: number;
}

const Projects = () => {
    const [showPage, setShowPage] = useState(false);
    const [compilingText, setCompilingText] = useState('');
    const [showTerminalCursor, setShowTerminalCursor] = useState(true);
    const [currentProject, setCurrentProject] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [floatingCodes, setFloatingCodes] = useState<FloatingCode[]>([]);

    const projects = [
        {
            id: 1,
            title: "EC OneX",
            subtitle: "Business Growth Landing Page",
            date: "Oct 2025 – Nov 2025",
            tools: ["React", "Tailwind CSS", "Next.js", "TypeScript"],
            description: [
                "Designed and developed a fully responsive, high-performance landing page for a B2B business growth platform",
                "Implemented modern UI components including hero sections, pricing cards, testimonials, FAQs, and feature showcases using Tailwind CSS",
                "Optimized user experience with responsive layouts, animations, and smooth interactions across mobile, tablet, and desktop devices",
                "Followed Next.js best practices including component-based architecture, image optimization, and performance-focused rendering",
                "Improved code quality and scalability by enforcing TypeScript typing and ESLint rules"
            ],
            link: "#",
            github: "#"
        },
        {
            id: 2,
            title: "Search Visualizer",
            subtitle: "Algorithm Visualization Tool",
            date: "Jan 2024 – Feb 2024",
            tools: ["Java", "OOPs", "Java Swing", "GUI"],
            description: [
                "Developed an algorithm visualizer in Java to demonstrate searching techniques in an interactive way",
                "Implemented Linear Search and Binary Search algorithms with real-time step-by-step visualization",
                "Built a user-friendly GUI using Java Swing to allow learners to input data and observe algorithm execution",
                "Enhanced understanding of search algorithms by providing a hands-on, visual learning experience"
            ],
            link: "#",
            github: "#"
        },
        {
            id: 3,
            title: "Employee Payroll System",
            subtitle: "Payroll Management Application",
            date: "July 2024 – Aug 2024",
            tools: ["Java", "OOPs", "Inheritance", "Polymorphism"],
            description: [
                "Designed and implemented a Java-based payroll system to manage employee records and salary calculations",
                "Applied Object-Oriented Programming concepts such as inheritance, abstraction, and polymorphism",
                "Automated salary computation, reducing manual effort and improving accuracy of payroll processing",
                "Developed a modular, maintainable code structure for scalability and future enhancements"
            ],
            link: "#",
            github: "#"
        }
    ];

    // Terminal compilation animation
    useEffect(() => {
        const fullText = `$ javac Projects.java\nCompiling Projects.java...\n✓ Compilation successful\n$ java Projects\nInitializing project showcase...`;
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setCompilingText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setShowTerminalCursor(false);
                    setTimeout(() => setShowPage(true), 200);
                }, 500);
            }
        }, 30);

        return () => clearInterval(typingInterval);
    }, []);

    // Floating code snippets animation
    useEffect(() => {
        if (!showPage) return;

        const codeSnippets = ['{ }', '< />', '[ ]', '( )', '=>', '++', '//'];
        const interval = setInterval(() => {
            const newCode: FloatingCode = {
                id: Date.now(),
                text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
                x: Math.random() * 100,
                y: -10,
                duration: 8 + Math.random() * 4
            };

            setFloatingCodes(prev => [...prev, newCode]);

            setTimeout(() => {
                setFloatingCodes(prev => prev.filter(code => code.id !== newCode.id));
            }, newCode.duration * 1000);
        }, 3000);

        return () => clearInterval(interval);
    }, [showPage]);

    const nextProject = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentProject((prev) => (prev + 1) % projects.length);
            setTimeout(() => setIsTransitioning(false), 50);
        }, 300);
    };

    const prevProject = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
            setTimeout(() => setIsTransitioning(false), 50);
        }, 300);
    };

    const project = projects[currentProject];

    return (
        <>
            {/* Compilation/Loading Screen */}
            {!showPage && (
                <div className="fixed inset-0 z-[10000] bg-ink-black flex items-center justify-center">
                    <div className="max-w-4xl w-full mx-4">
                        <div className="bg-ink-black border-2 border-vintage-green shadow-[0_0_30px_rgba(74,93,79,0.5)]">
                            <div className="bg-vintage-green/20 border-b border-vintage-green px-4 py-2 flex items-center gap-2">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-stamp-red border border-stamp-red/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-aged-yellow border border-aged-yellow/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-vintage-green border border-vintage-green/50"></div>
                                </div>
                                <span className="text-aged-yellow font-courier-prime text-xs ml-2">terminal — java</span>
                            </div>
                            <div className="p-6 font-courier-prime">
                                <div className="text-vintage-green text-sm sm:text-base whitespace-pre-wrap">
                                    {compilingText}
                                    {showTerminalCursor && (
                                        <span className="inline-block w-2 h-4 bg-vintage-green ml-1 animate-terminal-blink"></span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Projects Page */}
            <div className={`min-h-screen bg-paper-white font-special-elite transition-opacity duration-500 relative overflow-hidden ${showPage ? 'opacity-100' : 'opacity-0'}`}>
                {/* Floating Code Snippets */}
                {floatingCodes.map(code => (
                    <div
                        key={code.id}
                        className="fixed pointer-events-none z-0 font-courier-prime text-vintage-green/20 text-2xl font-bold"
                        style={{
                            left: `${code.x}%`,
                            animation: `floatUp ${code.duration}s linear forwards`,
                            top: '100vh'
                        }}
                    >
                        {code.text}
                    </div>
                ))}

                {/* Navigation Bar */}
                <nav className="bg-aged-yellow border-b-4 border-ink-black shadow-[0_4px_0_rgba(45,45,45,1)]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex justify-between items-center">
                            <Link to="/" className="font-courier-prime text-lg sm:text-xl font-bold text-ink-black hover:text-stamp-red transition-colors">
                                {'<'}AU {'/>'} 
                            </Link>
                            <div className="flex gap-4 sm:gap-6 md:gap-8">
                                <Link to="/" className="font-courier-prime text-sm sm:text-base text-ink-black hover:text-stamp-red transition-colors border-b-2 border-transparent hover:border-stamp-red">
                                    Home
                                </Link>
                                <Link to="/about" className="font-courier-prime text-sm sm:text-base text-ink-black hover:text-stamp-red transition-colors border-b-2 border-transparent hover:border-stamp-red">
                                    About
                                </Link>
                                <Link to="/projects" className="font-courier-prime text-sm sm:text-base text-stamp-red border-b-2 border-stamp-red">
                                    Projects
                                </Link>
                                <Link to="/contact" className="font-courier-prime text-sm sm:text-base text-ink-black hover:text-stamp-red transition-colors border-b-2 border-transparent hover:border-stamp-red">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Content Area with proper spacing */}
                <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
                            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-ink-black mb-4">
                                <span className="inline-block border-[3px] sm:border-[4px] border-ink-black bg-vintage-green px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 rotate-[-1deg] shadow-[4px_4px_0_rgba(45,45,45,1)] hover:rotate-0 hover:scale-105 transition-all duration-300">
                                    MY PROJECTS
                                </span>
                            </h1>
                            <p className="font-courier-prime text-xs xs:text-sm sm:text-base text-vintage-green/70 mt-4">
                                {/* Showcasing my development journey */}
                            </p>
                        </div>

                        {/* Project Card */}
                        <div className={`animate-fade-in-up [animation-delay:0.3s] transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                            <div className="bg-ink-black border-4 border-vintage-green rounded-lg shadow-[8px_8px_0_rgba(74,93,79,1)] hover:shadow-[12px_12px_0_rgba(74,93,79,1)] overflow-hidden max-w-5xl mx-auto transition-all duration-300 hover:scale-[1.02] relative group">
                                {/* Animated glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-vintage-green/0 via-vintage-green/10 to-vintage-green/0 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Terminal Header */}
                                <div className="bg-vintage-green/20 border-b-2 border-vintage-green px-4 sm:px-6 py-3 flex items-center justify-between relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-stamp-red border border-stamp-red/50 animate-pulse"></div>
                                            <div className="w-3 h-3 rounded-full bg-aged-yellow border border-aged-yellow/50 animate-pulse [animation-delay:0.2s]"></div>
                                            <div className="w-3 h-3 rounded-full bg-vintage-green border border-vintage-green/50 animate-pulse [animation-delay:0.4s]"></div>
                                        </div>
                                        <span className="font-courier-prime text-xs sm:text-sm text-aged-yellow animate-fade-in-up">
                                            Project{project.id}.java
                                        </span>
                                    </div>
                                    <div className="font-courier-prime text-xs text-vintage-green/60">
                                        {currentProject + 1} / {projects.length}
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6 sm:p-8 md:p-10 relative z-10">
                                    {/* Project Header */}
                                    <div className="mb-6 sm:mb-8">
                                        <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mb-3 animate-fade-in-up">
                                            <span className="text-vintage-green animate-glow-pulse">public class</span> <span className="text-aged-yellow">Project{project.id}</span> {'{'}
                                        </div>
                                        
                                        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-aged-yellow mb-3 sm:mb-4 animate-fade-in-up [animation-delay:0.1s] hover:scale-105 transition-transform duration-300 cursor-default">
                                            {project.title}
                                        </h2>
                                        
                                        <p className="font-courier-prime text-sm sm:text-base md:text-lg text-paper-white/80 mb-3 sm:mb-4 italic animate-fade-in-up [animation-delay:0.2s]">
                                            {`// ${project.subtitle}`}
                                        </p>

                                        <p className="font-courier-prime text-xs sm:text-sm text-vintage-green/70 mb-4 sm:mb-6 animate-fade-in-up [animation-delay:0.3s]">
                                            <span className="text-aged-yellow">String</span> <span className="text-paper-white">timeline</span> = <span className="text-stamp-red">"{project.date}"</span>;
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tools.map((tool, idx) => (
                                                <span
                                                    key={tool}
                                                    className="px-3 py-1 bg-vintage-green/20 border border-vintage-green/50 text-aged-yellow font-courier-prime text-xs rounded-sm hover:bg-vintage-green/30 hover:scale-110 hover:shadow-[0_0_15px_rgba(74,93,79,0.5)] transition-all duration-300 cursor-pointer animate-fade-in-up"
                                                    style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Project Description */}
                                    <div className="mb-6 sm:mb-8">
                                        <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mb-4 animate-fade-in-up">
                                            <span className="text-vintage-green">void</span> <span className="text-aged-yellow animate-glow-pulse">displayDetails</span>() {'{'}
                                        </div>
                                        
                                        <div className="space-y-3 sm:space-y-4 pl-4 sm:pl-6">
                                            {project.description.map((item, idx) => (
                                                <div 
                                                    key={`desc-${idx}`} 
                                                    className="flex gap-3 group animate-fade-in-up hover:translate-x-2 transition-all duration-300"
                                                    style={{ animationDelay: `${0.8 + idx * 0.1}s` }}
                                                >
                                                    <span className="text-aged-yellow font-courier-prime text-xs mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300">▸</span>
                                                    <p className="font-courier-prime text-xs sm:text-sm md:text-base text-paper-white/90 leading-relaxed group-hover:text-aged-yellow transition-colors duration-300">
                                                        {item}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-4 animate-fade-in-up">
                                            {'}'}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 animate-fade-in-up">
                                        <a
                                            href={project.link}
                                            className="inline-block bg-aged-yellow text-ink-black px-4 sm:px-6 py-2 sm:py-3 border-2 border-ink-black font-courier-prime text-xs sm:text-sm font-bold hover:bg-paper-white hover:scale-110 hover:rotate-1 transition-all duration-300 shadow-[2px_2px_0_rgba(45,45,45,1)] hover:shadow-[6px_6px_0_rgba(45,45,45,1)] relative overflow-hidden group"
                                        >
                                            <span className="relative z-10">VIEW LIVE →</span>
                                            <div className="absolute inset-0 bg-vintage-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                        </a>
                                        <a
                                            href={project.github}
                                            className="inline-block bg-transparent text-aged-yellow px-4 sm:px-6 py-2 sm:py-3 border-2 border-aged-yellow font-courier-prime text-xs sm:text-sm font-bold hover:bg-aged-yellow hover:text-ink-black hover:scale-110 hover:rotate-[-1deg] transition-all duration-300 hover:shadow-[4px_4px_0_rgba(232,220,196,0.5)] relative overflow-hidden group"
                                        >
                                            <span className="relative z-10">{'<'} SOURCE CODE {'>'}</span>
                                            <div className="absolute inset-0 bg-aged-yellow transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                                        </a>
                                    </div>

                                    {/* Closing Brace */}
                                    <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 border-t border-vintage-green/20 pt-4 animate-fade-in-up">
                                        {'}'} <span className="text-vintage-green/50 animate-pulse">{`// End of Project${project.id} class`}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Controls */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-5xl mx-auto">
                                <button
                                    onClick={prevProject}
                                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-vintage-green text-paper-white border-2 border-ink-black font-courier-prime text-sm sm:text-base hover:bg-vintage-green/80 hover:scale-110 hover:rotate-[-2deg] transition-all duration-300 shadow-[3px_3px_0_rgba(45,45,45,1)] hover:shadow-[6px_6px_0_rgba(45,45,45,1)] active:scale-95 relative overflow-hidden group"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        <span className="group-hover:animate-bounce">←</span>
                                        <span>PREVIOUS PROJECT</span>
                                    </span>
                                    <div className="absolute inset-0 bg-ink-black/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </button>

                                {/* Project Indicators */}
                                <div className="flex gap-2 sm:gap-3">
                                    {projects.map((_, idx) => (
                                        <button
                                            key={`indicator-${idx}`}
                                            onClick={() => {
                                                setIsTransitioning(true);
                                                setTimeout(() => {
                                                    setCurrentProject(idx);
                                                    setTimeout(() => setIsTransitioning(false), 50);
                                                }, 300);
                                            }}
                                            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-ink-black transition-all duration-500 relative overflow-hidden ${
                                                idx === currentProject
                                                    ? 'bg-vintage-green scale-125 shadow-[0_0_15px_rgba(74,93,79,0.6)] animate-pulse'
                                                    : 'bg-aged-yellow/50 hover:bg-aged-yellow hover:scale-110 hover:rotate-180'
                                            }`}
                                            aria-label={`Go to project ${idx + 1}`}
                                        >
                                            {idx === currentProject && (
                                                <div className="absolute inset-0 bg-aged-yellow animate-ping"></div>
                                            )}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={nextProject}
                                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-vintage-green text-paper-white border-2 border-ink-black font-courier-prime text-sm sm:text-base hover:bg-vintage-green/80 hover:scale-110 hover:rotate-[2deg] transition-all duration-300 shadow-[3px_3px_0_rgba(45,45,45,1)] hover:shadow-[6px_6px_0_rgba(45,45,45,1)] active:scale-95 relative overflow-hidden group"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        <span>NEXT PROJECT</span>
                                        <span className="group-hover:animate-bounce">→</span>
                                    </span>
                                    <div className="absolute inset-0 bg-ink-black/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add custom keyframe animation */}
                <style>{`
                    @keyframes floatUp {
                        from {
                            transform: translateY(0) rotate(0deg);
                            opacity: 0.3;
                        }
                        to {
                            transform: translateY(-100vh) rotate(360deg);
                            opacity: 0;
                        }
                    }
                `}</style>
            </div>
        </>
    );
};

export default Projects;
