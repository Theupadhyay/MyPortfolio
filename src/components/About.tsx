import React from 'react';

interface TechSkill {
    name: string;
    icon: string;
    color: string;
    level: number;
}

const About: React.FC = () => {
    const techSkills: TechSkill[] = [
        { name: 'JavaScript', icon: '{ JS }', color: '#F7DF1E', level: 90 },
        { name: 'TypeScript', icon: '{ TS }', color: '#3178C6', level: 85 },
        { name: 'React', icon: '⚛️', color: '#61DAFB', level: 90 },
        { name: 'Node.js', icon: '◆', color: '#339933', level: 85 },
        { name: 'Python', icon: '🐍', color: '#3776AB', level: 80 },
        { name: 'Java', icon: '☕', color: '#007396', level: 75 },
        { name: 'C++', icon: '{ C++ }', color: '#00599C', level: 70 },
        { name: 'MongoDB', icon: '🍃', color: '#47A248', level: 80 },
        { name: 'PostgreSQL', icon: '🐘', color: '#4169E1', level: 75 },
        { name: 'Docker', icon: '🐳', color: '#2496ED', level: 80 },
        { name: 'Git', icon: '⎇', color: '#F05032', level: 90 },
        { name: 'AWS', icon: '☁️', color: '#FF9900', level: 70 },
    ];

    return (
        <div className="min-h-screen bg-paper-white font-special-elite py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 sm:mb-20 md:mb-24">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ink-black mb-6 sm:mb-8 animate-fade-in-up">
                        <span className="inline-block border-[4px] sm:border-[6px] border-ink-black bg-aged-yellow px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rotate-[-2deg] shadow-[6px_6px_0_rgba(45,45,45,1)] sm:shadow-[8px_8px_0_rgba(45,45,45,1)] md:shadow-[10px_10px_0_rgba(45,45,45,1)] hover:rotate-0 transition-transform duration-300">
                            ABOUT
                        </span>
                    </h1>
                    <p className="font-courier-prime text-sm sm:text-base md:text-lg lg:text-xl text-ink-black/70 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
                        <span className="text-vintage-green font-bold">// </span>
                        Exploring the intersection of creativity and code
                    </p> 
                </div>

                {/* Introduction Section */}
                <div className="w-full flex justify-center items-center mb-16 sm:mb-20 md:mb-24">
                    <div className="max-w-5xl w-full px-4">
                        <div className="bg-aged-yellow border-[3px] sm:border-4 border-ink-black p-6 sm:p-8 md:p-10 shadow-[4px_4px_0_rgba(45,45,45,1)] sm:shadow-[6px_6px_0_rgba(45,45,45,1)] animate-fade-in-up [animation-delay:0.4s]">

                            <div className="font-courier-prime text-xs sm:text-sm md:text-base text-vintage-green font-bold mb-4 sm:mb-6 text-center">
        // Who am I?
                            </div>

                            <p className="font-courier-prime text-sm sm:text-base md:text-lg text-ink-black/80 leading-relaxed mb-4 sm:mb-6 text-center">
                                I'm a passionate full-stack developer with a love for creating elegant,
                                efficient solutions to complex problems. My journey in software
                                development began in 2018, and since then, I've been on a constant quest
                                to learn, grow, and push the boundaries of what's possible with code.
                            </p>

                            <p className="font-courier-prime text-sm sm:text-base md:text-lg text-ink-black/80 leading-relaxed text-center">
                                When I'm not coding, you'll find me contributing to open-source projects,
                                mentoring aspiring developers, or exploring the latest trends in
                                technology. I believe in writing clean, maintainable code and creating
                                exceptional user experiences.
                            </p>

                        </div>
                    </div>
                </div>

<p>................................................................................................................................................................</p>
                {/* Tech Skills Section */}
                <div className="mb-20 sm:mb-24 md:mb-28 lg:mb-32">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-ink-black mb-10 sm:mb-14 md:mb-16 text-center animate-fade-in-up [animation-delay:0.6s]">
                        <span className="font-courier-prime text-vintage-green">&lt;</span>
                        Tech Stack
                        <span className="font-courier-prime text-vintage-green">/&gt;</span>
                    </h2>
<p>................................................................................................................................................................</p>
                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-7 md:gap-9 lg:gap-10">
                        {techSkills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className="group bg-paper-white border-[3px] sm:border-[4px] border-ink-black p-5 sm:p-6 md:p-7 hover:bg-aged-yellow transition-all duration-300 hover:shadow-[6px_6px_0_rgba(45,45,45,1)] sm:hover:shadow-[8px_8px_0_rgba(45,45,45,1)] hover:translate-y-[-6px] animate-fade-in-up relative overflow-hidden"
                                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                            >
                                {/* Decorative corner */}
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[14px] sm:border-t-[18px] border-r-[14px] sm:border-r-[18px] border-stamp-red border-l-transparent border-b-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Icon */}
                                <div
                                    className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-5 text-center group-hover:scale-125 transition-transform duration-300"
                                    style={{
                                        filter: `drop-shadow(0 0 10px ${skill.color})`,
                                        color: skill.color
                                    }}
                                >
                                    {skill.icon}
                                </div>

                                {/* Name */}
                                <h3 className="font-courier-prime text-sm sm:text-base md:text-lg font-bold text-ink-black text-center mb-4 sm:mb-5">
                                    {skill.name}
                                </h3>

                                {/* Progress Bar */}
                                <div className="w-full bg-ink-black/10 h-2 sm:h-2.5 border-2 border-ink-black/20 mb-2">
                                    <div
                                        className="h-full bg-vintage-green transition-all duration-1000 group-hover:bg-stamp-red"
                                        style={{
                                            width: `${skill.level}%`,
                                            transitionDelay: `${index * 0.1}s`
                                        }}
                                    />
                                </div>

                                {/* Level percentage */}
                                <div className="font-courier-prime text-xs sm:text-sm text-ink-black/70 text-center font-bold">
                                    {skill.level}%
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
<p>................................................................................................................................................................</p>
                {/* Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto mb-20 sm:mb-24 md:mb-28 lg:mb-32">
                    {[
                        { number: '1+', label: 'Years Experience', icon: '⏱️' },
                        { number: '10+', label: 'Projects Completed', icon: '🚀' },
                        { number: '5+', label: 'Technologies', icon: '⚡' }
                    ].map((stat, index) => (
                        <div
                            key={stat.label}
                            className="bg-ink-black border-[3px] sm:border-[4px] border-ink-black p-8 sm:p-10 md:p-12 text-center group hover:bg-vintage-green transition-colors duration-300 animate-fade-in-up shadow-[4px_4px_0_rgba(45,45,45,0.5)] hover:shadow-[8px_8px_0_rgba(45,45,45,0.7)]"
                            style={{ animationDelay: `${2 + index * 0.2}s` }}
                        >
                            <div className="text-4xl sm:text-5xl mb-4 sm:mb-5 group-hover:animate-icon-blink">
                                {stat.icon}
                            </div>
                            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-aged-yellow mb-3 sm:mb-4 font-courier-prime group-hover:scale-110 transition-transform">
                                {stat.number}
                            </div>
                            <div className="text-sm sm:text-base md:text-lg text-paper-white/80 font-courier-prime uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
<p>
    ................................................................................................................................................................
</p>
                {/* Fun Facts Section */}
                <div className="mt-0 max-w-4xl mx-auto mb-20 sm:mb-24 md:mb-28">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink-black mb-10 sm:mb-12 md:mb-14 text-center animate-fade-in-up [animation-delay:2.6s]">
                        <span className="font-courier-prime text-stamp-red">/* </span>
                        Fun Facts
                        <span className="font-courier-prime text-stamp-red"> */</span>
                    </h2>

                    <div className="space-y-5 sm:space-y-6 md:space-y-7">
                        {[
                            { emoji: '☕', text: 'Coffee is my debugging fuel' },
                            { emoji: '🌙', text: 'Night owl coder - best ideas come at 2 AM' },
                            { emoji: '🎮', text: 'Gamer turned developer - building the future' },
                            { emoji: '📚', text: 'Always learning something new' }
                        ].map((fact, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-5 sm:gap-7 md:gap-8 bg-aged-yellow/60 border-l-[5px] sm:border-l-[7px] border-stamp-red p-5 sm:p-6 md:p-7 font-courier-prime text-sm sm:text-base md:text-lg text-ink-black hover:translate-x-6 hover:bg-aged-yellow transition-all duration-300 animate-fade-in-up shadow-[2px_2px_0_rgba(45,45,45,0.2)] hover:shadow-[4px_4px_0_rgba(45,45,45,0.3)]"
                                style={{ animationDelay: `${2.8 + index * 0.15}s` }}
                            >
                                <span className="text-3xl sm:text-4xl">{fact.emoji}</span>
                                <span>{fact.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-0 text-center animate-fade-in-up [animation-delay:3.5s]">
                    <div className="inline-block bg-vintage-green border-[3px] sm:border-4 border-ink-black px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rotate-1 hover:rotate-0 transition-all duration-300 shadow-[6px_6px_0_rgba(45,45,45,1)] hover:shadow-[8px_8px_0_rgba(45,45,45,1)]">
                        <p className="font-courier-prime text-sm sm:text-base md:text-lg text-paper-white mb-3 sm:mb-4">
                            Want to work together?
                        </p>
                        <a
                            href="#contact"
                            className="inline-block font-courier-prime text-sm sm:text-base md:text-lg text-ink-black bg-aged-yellow px-6 sm:px-8 py-2 sm:py-3 border-[2px] border-ink-black hover:bg-paper-white transition-colors uppercase tracking-wider font-bold"
                        >
                            Let's Connect →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
