import React, { useEffect, useState } from 'react';

interface TechSkill {
    name: string;
    icon: string;
    color: string;
    level: number;
}

const About: React.FC = () => {
    const [showPage, setShowPage] = useState(false);
    const [compilingText, setCompilingText] = useState('');
    const [showTerminalCursor, setShowTerminalCursor] = useState(true);

    useEffect(() => {
        // Simulate compilation/loading effect
        const messages = [
            'javac AboutMe.java',
            'Compiling...',
            'Class loaded successfully',
            'Executing AboutMe.class'
        ];

        let messageIndex = 0;
        let charIndex = 0;

        const typeMessage = () => {
            if (messageIndex < messages.length) {
                if (charIndex < messages[messageIndex].length) {
                    setCompilingText(prev => prev + messages[messageIndex][charIndex]);
                    charIndex++;
                    setTimeout(typeMessage, 30);
                } else {
                    setCompilingText(prev => prev + '\n');
                    messageIndex++;
                    charIndex = 0;
                    setTimeout(typeMessage, 200);
                }
            } else {
                setTimeout(() => {
                    setShowPage(true);
                    setShowTerminalCursor(false);
                }, 300);
            }
        };

        typeMessage();
    }, []);

    const techSkills: TechSkill[] = [
        
        { name: 'Python', icon: '🐍', color: '#3776AB', level: 80 },
        { name: 'Java', icon: '☕', color: '#007396', level: 75 },
        { name: 'C++', icon: '{ C++ }', color: '#00599C', level: 70 },
        { name: 'JavaScript', icon: '{ JS }', color: '#F7DF1E', level: 90 },
        { name: 'TypeScript', icon: '{ TS }', color: '#3178C6', level: 85 },
        { name: 'React', icon: '⚛️', color: '#61DAFB', level: 90 },
        { name: 'Node.js', icon: '◆', color: '#339933', level: 85 },
        { name: 'MongoDB', icon: '🍃', color: '#47A248', level: 80 },
        { name: 'PostgreSQL', icon: '🐘', color: '#4169E1', level: 75 },
        { name: 'Docker', icon: '🐳', color: '#2496ED', level: 80 },
        { name: 'Git', icon: '⎇', color: '#F05032', level: 90 },
        { name: 'AWS', icon: '☁️', color: '#FF9900', level: 70 },
    ];

    return (
        <>
            {/* Compilation/Loading Screen */}
            {!showPage && (
                <div className="fixed inset-0 z-[10000] bg-ink-black flex items-center justify-center">
                    <div className="max-w-4xl w-full mx-4">
                        {/* Terminal Window */}
                        <div className="bg-ink-black border-2 border-vintage-green shadow-[0_0_30px_rgba(74,93,79,0.5)]">
                            {/* Terminal Header */}
                            <div className="bg-vintage-green/20 border-b border-vintage-green px-4 py-2 flex items-center gap-2">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-stamp-red border border-stamp-red/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-aged-yellow border border-aged-yellow/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-vintage-green border border-vintage-green/50"></div>
                                </div>
                                <span className="text-aged-yellow font-courier-prime text-xs ml-2">terminal — java</span>
                            </div>
                            
                            {/* Terminal Content */}
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

            {/* Main About Page Content */}
            <div className={`min-h-screen bg-paper-white font-special-elite py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-opacity duration-500 ${showPage ? 'opacity-100' : 'opacity-0'}`}>
            {/* Code Editor Window Decoration */}
            <div className="absolute top-4 sm:top-8 left-4 sm:left-8 flex items-center gap-2 opacity-30 z-10 animate-code-compile">
                <div className="w-3 h-3 rounded-full bg-stamp-red border border-ink-black"></div>
                <div className="w-3 h-3 rounded-full bg-aged-yellow border border-ink-black"></div>
                <div className="w-3 h-3 rounded-full bg-vintage-green border border-ink-black"></div>
                <span className="ml-3 font-courier-prime text-xs text-ink-black/50">AboutMe.java</span>
            </div>
            
            <div className="max-w-7xl mx-auto">
                {/* Header Section with Java syntax */}
                <div className="mb-12 sm:mb-16 md:mb-20">
                    {/* Line 1: package declaration */}
                    <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mb-3 animate-fade-in-up pl-4 sm:pl-6">
                        <span className="text-stamp-red">1</span> <span className="text-vintage-green">package</span> portfolio;
                    </div>
                    {/* Line 2: empty line */}
                    <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mb-3 animate-fade-in-up [animation-delay:0.1s] pl-4 sm:pl-6">
                        <span className="text-stamp-red">2</span>
                    </div>
                    {/* Line 3: class declaration */}
                    <div className="font-courier-prime text-xs sm:text-sm text-ink-black/80 mb-6 animate-fade-in-up [animation-delay:0.2s] pl-4 sm:pl-6">
                        <span className="text-stamp-red font-bold">3</span> <span className="text-vintage-green font-bold">public class</span> <span className="text-ink-black font-bold">AboutMe</span> <span className="text-vintage-green font-bold">{'{'}</span>
                    </div>
                    <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-ink-black mb-8 sm:mb-12 text-center animate-fade-in-up [animation-delay:0.3s] pl-4 sm:pl-6">
                        <span className="inline-block border-[3px] sm:border-[4px] border-ink-black bg-aged-yellow px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 rotate-[-2deg] shadow-[4px_4px_0_rgba(45,45,45,1)] hover:rotate-0 hover:scale-105 transition-all duration-300">
                            ABOUT
                        </span>
                    </h1>
                    <p className="font-courier-prime text-xs xs:text-sm sm:text-base text-vintage-green/70 max-w-3xl mx-auto text-center animate-fade-in-up [animation-delay:0.4s] pl-4 sm:pl-6">
                        // Exploring the intersection of creativity and code
                    </p>
                </div>

                {/* Line 4: introduce method */}
                <div className="mb-12 sm:mb-16 md:mb-20">
                    <div className="font-courier-prime text-xs sm:text-sm text-ink-black/80 mb-2 animate-fade-in-up [animation-delay:0.5s] pl-4 sm:pl-6">
                        <span className="text-stamp-red font-bold">4</span>   <span className="text-vintage-green font-bold">public void</span> <span className="text-ink-black font-bold">introduce</span>() <span className="text-vintage-green font-bold">{'{'}</span>
                    </div>
                    
                    {/* Code block with System.out.println */}
                    <div className="bg-ink-black/5 border-l-4 border-vintage-green p-4 sm:p-5 md:p-6 animate-fade-in-up [animation-delay:0.6s] max-w-5xl mx-auto">
                        <div className="space-y-4 sm:space-y-5 font-courier-prime">
                            <div>
                                <span className="text-vintage-green text-[10px] xs:text-xs sm:text-sm">System.out.println(</span>
                                <p className="text-sm xs:text-base sm:text-lg text-ink-black/90 leading-relaxed pl-4 xs:pl-6 sm:pl-8">
                                    <span className="text-stamp-red text-xs">"</span>I'm a passionate full-stack developer with a love for creating elegant,
                                    efficient solutions to complex problems. My journey in software
                                    development began in 2018, and since then, I've been on a constant quest
                                    to learn, grow, and push the boundaries of what's possible with code.<span className="text-stamp-red text-xs">"</span>
                                </p>
                                <span className="text-vintage-green text-[10px] xs:text-xs sm:text-sm">);</span>
                            </div>

                            <div>
                                <span className="text-vintage-green text-[10px] xs:text-xs sm:text-sm">System.out.println(</span>
                                <p className="text-sm xs:text-base sm:text-lg text-ink-black/90 leading-relaxed pl-4 xs:pl-6 sm:pl-8">
                                    <span className="text-stamp-red text-xs">"</span>When I'm not coding, you'll find me contributing to open-source projects,
                                    mentoring aspiring developers, or exploring the latest trends in
                                    technology. I believe in writing clean, maintainable code and creating
                                    exceptional user experiences.<span className="text-stamp-red text-xs">"</span>
                                </p>
                                <span className="text-vintage-green text-[10px] xs:text-xs sm:text-sm">);</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Line 5: closing brace */}
                    <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-2 animate-fade-in-up [animation-delay:0.7s] pl-4 sm:pl-6">
                        <span className="text-stamp-red">5</span>   <span className="text-vintage-green">{'}'}</span>
                    </div>
                </div>

                {/* Tech Skills Section with lines 6-10 */}
                <div className="mb-12 sm:mb-16 md:mb-20">
                    {/* Line 6: empty */}
                    <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mb-2 animate-fade-in-up [animation-delay:0.8s] pl-4 sm:pl-6">
                        <span className="text-stamp-red">6</span>
                    </div>
                    {/* Line 7: getTechStack method */}
                    <div className="font-courier-prime text-xs sm:text-sm text-ink-black/80 mb-4 animate-fade-in-up [animation-delay:0.9s] pl-4 sm:pl-6">
                        <span className="text-stamp-red font-bold">7</span>   <span className="text-vintage-green font-bold">public</span> <span className="text-ink-black font-bold">List</span>&lt;<span className="text-vintage-green">String</span>&gt; <span className="text-ink-black font-bold">getTechStack</span>() <span className="text-vintage-green font-bold">{'{'}</span>
                    </div>
                    
                    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-ink-black mb-8 sm:mb-10 text-center animate-fade-in-up [animation-delay:1s] pl-4 sm:pl-6">
                        <span className="font-courier-prime text-vintage-green">&lt;</span>
                        Tech Stack
                        <span className="font-courier-prime text-vintage-green">/&gt;</span>
                    </h2>
                    
                    {/* Line 8: return statement */}
                    <div className="font-courier-prime text-xs sm:text-sm text-ink-black/80 mb-6 animate-fade-in-up [animation-delay:1.1s] pl-8 sm:pl-10">
                        <span className="text-stamp-red font-bold">8</span>     <span className="text-vintage-green font-bold">return</span> <span className="text-ink-black font-bold">Arrays.asList</span>(
                    </div>
                    
                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6">
                        {techSkills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className="group animate-fade-in-up"
                                style={{ animationDelay: `${1.2 + index * 0.05}s` }}
                            >
                                {/* VS Code Style Editor Card */}
                                <div className="bg-[#1e1e1e] border border-vintage-green/40 rounded-md overflow-hidden shadow-[0_4px_12px_rgba(74,93,79,0.3)] hover:shadow-[0_8px_24px_rgba(74,93,79,0.6)] hover:border-vintage-green transform hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                                    {/* VS Code Tab Bar */}
                                    <div className="bg-[#2d2d2d] border-b border-[#3e3e3e] px-2 xs:px-3 py-1 flex items-center gap-2">
                                        <div className="bg-[#1e1e1e] border border-[#3e3e3e] px-2 py-0.5 rounded-t flex items-center gap-1.5">
                                            <span className="text-[8px] xs:text-[9px]" style={{ color: skill.color }}>{skill.icon}</span>
                                            <span className="font-courier-prime text-[8px] xs:text-[9px] text-paper-white/70">
                                                {skill.name}.jsx
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Code Editor Area */}
                                    <div className="p-3 xs:p-4 space-y-1.5 xs:space-y-2 bg-[#1e1e1e]">
                                        {/* Line 1: Import statement */}
                                        <div className="flex gap-2 font-courier-prime text-[9px] xs:text-[10px] sm:text-[11px]">
                                            <span className="text-vintage-green/40 select-none w-4 text-right">1</span>
                                            <div>
                                                <span className="text-[#C586C0]">import</span>{' '}
                                                <span className="text-[#4EC9B0]">{skill.name}</span>{' '}
                                                <span className="text-[#C586C0]">from</span>{' '}
                                                <span className="text-[#CE9178]">'{skill.name.toLowerCase()}'</span>
                                                <span className="text-paper-white/60">;</span>
                                            </div>
                                        </div>
                                        
                                        {/* Line 2: Empty */}
                                        <div className="flex gap-2 font-courier-prime text-[9px] xs:text-[10px]">
                                            <span className="text-vintage-green/40 select-none w-4 text-right">2</span>
                                        </div>
                                        
                                        {/* Line 3: Function declaration */}
                                        <div className="flex gap-2 font-courier-prime text-[9px] xs:text-[10px] sm:text-[11px]">
                                            <span className="text-vintage-green/40 select-none w-4 text-right">3</span>
                                            <div>
                                                <span className="text-[#C586C0]">const</span>{' '}
                                                <span className="text-[#DCDCAA]">skill</span>{' '}
                                                <span className="text-paper-white/60">=</span>{' '}
                                                <span className="text-paper-white/60">{'{'}</span>
                                            </div>
                                        </div>
                                        
                                        {/* Line 4: Name property */}
                                        <div className="flex gap-2 font-courier-prime text-[9px] xs:text-[10px] sm:text-[11px]">
                                            <span className="text-vintage-green/40 select-none w-4 text-right">4</span>
                                            <div className="pl-3">
                                                <span className="text-[#9CDCFE]">name</span>
                                                <span className="text-paper-white/60">:</span>{' '}
                                                <span className="text-[#CE9178]">'{skill.name}'</span>
                                                <span className="text-paper-white/60">,</span>
                                            </div>
                                        </div>
                                        
                                        {/* Line 5: Level property */}
                                        <div className="flex gap-2 font-courier-prime text-[9px] xs:text-[10px] sm:text-[11px]">
                                            <span className="text-vintage-green/40 select-none w-4 text-right">5</span>
                                            <div className="pl-3">
                                                <span className="text-[#9CDCFE]">level</span>
                                                <span className="text-paper-white/60">:</span>{' '}
                                                <span className="text-[#B5CEA8]">{skill.level}</span>
                                            </div>
                                        </div>
                                        
                                        {/* Line 6: Closing brace */}
                                        <div className="flex gap-2 font-courier-prime text-[9px] xs:text-[10px] sm:text-[11px]">
                                            <span className="text-vintage-green/40 select-none w-4 text-right">6</span>
                                            <div>
                                                <span className="text-paper-white/60">{'}'}</span>
                                            </div>
                                        </div>
                                        
                                        {/* Progress Bar with Icon */}
                                        <div className="mt-3 pt-3 border-t border-vintage-green/20">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xl xs:text-2xl" style={{ 
                                                    color: skill.color,
                                                    filter: `drop-shadow(0 0 8px ${skill.color})`
                                                }}>
                                                    {skill.icon}
                                                </span>
                                                <div className="flex-1 h-1.5 bg-[#2d2d2d] border border-vintage-green/30 overflow-hidden rounded-full">
                                                    <div
                                                        className="h-full transition-all duration-1000 ease-out rounded-full"
                                                        style={{
                                                            width: `${skill.level}%`,
                                                            backgroundColor: skill.color,
                                                            boxShadow: `0 0 10px ${skill.color}`,
                                                            transitionDelay: `${index * 0.05}s`
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center font-courier-prime text-[8px] xs:text-[9px]">
                                                <span className="text-vintage-green/60">Proficiency</span>
                                                <span className="text-aged-yellow font-bold">{skill.level}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Line 9: closing parenthesis */}
                    <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-6 animate-fade-in-up [animation-delay:2s] pl-8 sm:pl-10">
                        <span className="text-stamp-red">9</span>     );
                    </div>
                    {/* Line 10: closing brace */}
                    <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-2 animate-fade-in-up [animation-delay:2.1s] pl-4 sm:pl-6">
                        <span className="text-stamp-red">10</span>   <span className="text-vintage-green">{'}'}</span>
                    </div>
                </div>
                {/* Stats Section with lines 11-13 */}
                <div className="mb-12 sm:mb-16 md:mb-20">
                    {/* Line 11: empty */}
                    <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mb-2 animate-fade-in-up [animation-delay:2.2s] pl-4 sm:pl-6">
                        <span className="text-stamp-red">11</span>
                    </div>
                    {/* Line 12: displayStats method */}
                    <div className="font-courier-prime text-xs sm:text-sm text-ink-black/80 mb-6 animate-fade-in-up [animation-delay:2.3s] pl-4 sm:pl-6">
                        <span className="text-stamp-red font-bold">12</span>   <span className="text-vintage-green font-bold">public void</span> <span className="text-ink-black font-bold">displayStats</span>() <span className="text-vintage-green font-bold">{'{'}</span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
                    {[
                        { number: '1+', label: 'Years Experience', icon: '⏱️', variable: 'experience', color: '#4EC9B0' },
                        { number: '10+', label: 'Projects Completed', icon: '🚀', variable: 'projects', color: '#DCDCAA' },
                        { number: '5+', label: 'Technologies', icon: '⚡', variable: 'techStack', color: '#C586C0' }
                    ].map((stat, index) => (
                        <div
                            key={stat.label}
                            className="group animate-fade-in-up"
                            style={{ animationDelay: `${2.3 + index * 0.15}s` }}
                        >
                            {/* Console Output Style Card */}
                            <div className="bg-[#1e1e1e] border border-vintage-green/40 rounded-md overflow-hidden shadow-[0_4px_12px_rgba(74,93,79,0.3)] hover:shadow-[0_8px_24px_rgba(74,93,79,0.6)] hover:border-vintage-green transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full">
                                {/* Terminal Header */}
                                <div className="bg-[#2d2d2d] border-b border-[#3e3e3e] px-3 xs:px-4 py-2 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-stamp-red"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-aged-yellow"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-vintage-green"></div>
                                    </div>
                                    <span className="font-courier-prime text-[9px] xs:text-[10px] text-vintage-green/60">stats.js</span>
                                </div>
                                
                                {/* Console Content */}
                                <div className="p-4 xs:p-5 sm:p-6 space-y-3">
                                    {/* Console log statement */}
                                    <div className="font-courier-prime text-[9px] xs:text-[10px] sm:text-[11px]">
                                        <span className="text-[#4EC9B0]">console</span>
                                        <span className="text-paper-white/60">.</span>
                                        <span className="text-[#DCDCAA]">log</span>
                                        <span className="text-paper-white/60">(</span>
                                        <span className="text-[#CE9178]">'{stat.variable}'</span>
                                        <span className="text-paper-white/60">);</span>
                                    </div>
                                    
                                    {/* Icon with glow effect */}
                                    <div className="flex justify-center my-4 xs:my-5">
                                        <div 
                                            className="text-4xl xs:text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-300"
                                            style={{
                                                filter: `drop-shadow(0 0 20px ${stat.color})`,
                                            }}
                                        >
                                            {stat.icon}
                                        </div>
                                    </div>
                                    
                                    {/* Output arrow */}
                                    <div className="font-courier-prime text-[9px] xs:text-[10px] text-vintage-green/60 mb-2">
                                        <span>▸ Output:</span>
                                    </div>
                                    
                                    {/* Main stat number */}
                                    <div 
                                        className="text-center font-courier-prime text-4xl xs:text-5xl sm:text-6xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300"
                                        style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}80` }}
                                    >
                                        {stat.number}
                                    </div>
                                    
                                    {/* Label as comment */}
                                    <div className="text-center font-courier-prime text-xs xs:text-sm text-vintage-green/60">
                                        <span>// {stat.label}</span>
                                    </div>
                                    
                                    {/* Status indicator */}
                                    <div className="flex items-center justify-center gap-2 mt-4 pt-3 border-t border-vintage-green/20">
                                        <div className="w-2 h-2 rounded-full bg-vintage-green animate-pulse"></div>
                                        <span className="font-courier-prime text-[9px] xs:text-[10px] text-vintage-green/70">ACTIVE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    
                    {/* Line 13: closing brace */}
                    <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-6 animate-fade-in-up [animation-delay:2.8s] pl-4 sm:pl-6">
                        <span className="text-stamp-red">13</span>   
                    </div>
                </div>

                {/* Fun Facts Section with lines 14-17 */}
                <div className="mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto">
                    {/* Line 14: empty */}
                    <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mb-2 animate-fade-in-up [animation-delay:2.9s] pl-4 sm:pl-6">
                        <span className="text-stamp-red">14</span> <span className="text-vintage-green">{'}'}</span>
                    </div>
                    {/* Line 15: multi-line comment start */}
                    <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mb-2 animate-fade-in-up [animation-delay:3s] pl-4 sm:pl-6">
                        <span className="text-stamp-red">15</span>   <span className="text-vintage-green">/*</span> Fun Facts <span className="text-vintage-green">*/</span>
                    </div>
                    {/* Line 16: String array */}
                    <div className="font-courier-prime text-xs sm:text-sm text-ink-black/80 mb-6 animate-fade-in-up [animation-delay:3.1s] pl-4 sm:pl-6">
                        <span className="text-stamp-red font-bold">16</span>   <span className="text-vintage-green font-bold">String</span>[] <span className="text-ink-black font-bold">facts</span> = <span className="text-vintage-green font-bold">{'{'}</span>
                    </div>

                    <div className="space-y-3 xs:space-y-4 sm:space-y-5 px-4 sm:px-6">
                        {[
                            { emoji: '☕', text: 'Coffee is my debugging fuel' },
                            { emoji: '🌙', text: 'Night owl coder - best ideas come at 2 AM' },
                            { emoji: '🎮', text: 'Gamer turned developer - building the future' },
                            { emoji: '📚', text: 'Always learning something new' }
                        ].map((fact, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 xs:gap-4 sm:gap-6 bg-aged-yellow/60 border-l-[4px] xs:border-l-[5px] sm:border-l-[6px] border-stamp-red p-3 xs:p-4 sm:p-5 md:p-6 font-courier-prime text-xs xs:text-sm sm:text-base md:text-lg text-ink-black hover:translate-x-4 sm:hover:translate-x-6 hover:bg-aged-yellow transition-all duration-300 animate-fade-in-up shadow-[2px_2px_0_rgba(45,45,45,0.2)] hover:shadow-[4px_4px_0_rgba(45,45,45,0.3)] cursor-pointer"
                                style={{ animationDelay: `${3.1 + index * 0.1}s` }}
                            >
                                <span className="text-2xl xs:text-3xl sm:text-4xl">{fact.emoji}</span>
                                <span>{fact.text}</span>
                            </div>
                        ))}
                    </div>
                    
                    {/* Line 17: closing brace */}
                    <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-4 sm:mt-6 animate-fade-in-up [animation-delay:3.6s] pl-4 sm:pl-6">
                        <span className="text-stamp-red">17</span>   
                    </div>
                </div>

                {/* CTA Section with lines 18-20 */}
                <div className="mb-8 sm:mb-12">
                    {/* Line 18: empty */}
                    <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mb-2 animate-fade-in-up [animation-delay:3.7s] pl-4 sm:pl-6">
                        <span className="text-stamp-red">18</span> <span className="text-vintage-green">{'}'};</span>
                    </div>
                    {/* Line 19: connect method */}
                    <div className="font-courier-prime text-xs sm:text-sm text-ink-black/80 mb-4 animate-fade-in-up [animation-delay:3.8s] pl-4 sm:pl-6">
                        <span className="text-stamp-red font-bold">19</span>   <span className="text-vintage-green font-bold">public</span> <span className="text-vintage-green font-bold">String</span> <span className="text-ink-black font-bold">connect</span>() <span className="text-vintage-green font-bold">{'{'}</span>
                    </div>
                    
                    <div className="text-center animate-fade-in-up [animation-delay:3.9s]">
                        <div className="inline-block bg-vintage-green border-2 xs:border-[3px] sm:border-[4px] border-ink-black px-4 xs:px-6 sm:px-8 md:px-10 py-3 xs:py-4 sm:py-5 md:py-6 rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-[4px_4px_0_rgba(45,45,45,1)] sm:shadow-[6px_6px_0_rgba(45,45,45,1)] hover:shadow-[8px_8px_0_rgba(45,45,45,1)]">
                            <p className="font-courier-prime text-xs xs:text-sm sm:text-base md:text-lg text-paper-white mb-2 xs:mb-3 sm:mb-4">
                                Want to work together?
                            </p>
                            <a
                                href="/contact"
                                className="inline-block font-courier-prime text-xs xs:text-sm sm:text-base md:text-lg text-ink-black bg-aged-yellow px-4 xs:px-6 sm:px-8 py-2 sm:py-3 border-[2px] border-ink-black hover:bg-paper-white hover:scale-105 transition-all uppercase tracking-wider font-bold"
                            >
                                Let's Connect →
                            </a>
                        </div>
                    </div>
                    
                    {/* Line 20: return + closing brace + class end */}
                    <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-4 animate-fade-in-up [animation-delay:4s] pl-8 sm:pl-10">
                        <span className="text-stamp-red">20</span>     <span className="text-vintage-green">return</span> <span className="text-stamp-red">"Let's build something amazing!"</span>;
                    </div>
                    <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-2 animate-fade-in-up [animation-delay:4.1s] pl-4 sm:pl-6">
                        <span className="text-stamp-red">21</span>   <span className="text-vintage-green">{'}'}</span>
                    </div>
                    <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-4 animate-fade-in-up [animation-delay:4.2s] pl-4 sm:pl-6">
                        <span className="text-stamp-red">22</span> <span className="text-vintage-green">{'}'}</span> <span className="text-vintage-green/70">// End of AboutMe class</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;
