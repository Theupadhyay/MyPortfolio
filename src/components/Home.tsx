import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Sparkle {
    id: number;
    x: number;
    y: number;
    color: string;
    size: number;
}

const Home: React.FC = () => {
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);
    const [showWelcome, setShowWelcome] = useState(true);
    const colors = ['#D4AF37', '#DC143C', '#2D5016'];

    useEffect(() => {
        // Hide welcome screen after 3 seconds
        const welcomeTimer = setTimeout(() => {
            setShowWelcome(false);
        }, 3000);

        return () => clearTimeout(welcomeTimer);
    }, []);

    useEffect(() => {
        let timeoutId: number;

        const handleMouseMove = (e: MouseEvent) => {
            const newPos = { x: e.clientX, y: e.clientY };
            
            timeoutId = globalThis.setTimeout(() => {
                
                const newSparkle: Sparkle = {
                    id: Date.now() + Math.random(),
                    x: newPos.x,
                    y: newPos.y,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * 8 + 4
                };

                setSparkles(prev => [...prev, newSparkle]);

                setTimeout(() => {
                    setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
                }, 800);
            }, 20);
        };

        globalThis.addEventListener('mousemove', handleMouseMove);

        return () => {
            globalThis.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="min-h-screen bg-paper-white font-special-elite relative overflow-hidden">
            {/* Welcome Screen */}
            {showWelcome && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-gradient-to-br from-paper-white via-aged-yellow/30 to-vintage-green/10 animate-fade-out-welcome overflow-hidden">
                    {/* Animated Floating Petals */}
                    <div className="absolute inset-0">
                        <div className="absolute top-10 left-20 text-3xl opacity-60 animate-image-float">🌺</div>
                        <div className="absolute top-40 right-32 text-2xl opacity-50 animate-image-float" style={{ animationDelay: '0.5s' }}>🌸</div>
                        <div className="absolute bottom-32 left-40 text-3xl opacity-60 animate-image-float" style={{ animationDelay: '1s' }}>🌼</div>
                        <div className="absolute bottom-20 right-20 text-2xl opacity-50 animate-image-float" style={{ animationDelay: '1.5s' }}>🌺</div>
                        <div className="absolute top-1/2 left-10 text-2xl opacity-40 animate-image-float" style={{ animationDelay: '0.8s' }}>🌸</div>
                        <div className="absolute top-1/3 right-16 text-3xl opacity-50 animate-image-float" style={{ animationDelay: '1.2s' }}>🌼</div>
                    </div>

                    {/* Mandala-inspired circular pattern */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-5">
                        <svg className="w-[800px] h-[800px] animate-spin-slow" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" fill="none" stroke="#e8dcc4" strokeWidth="0.5"/>
                            <circle cx="100" cy="100" r="60" fill="none" stroke="#4a5d4f" strokeWidth="0.5"/>
                            <circle cx="100" cy="100" r="40" fill="none" stroke="#8b3a3a" strokeWidth="0.5"/>
                            <circle cx="100" cy="100" r="20" fill="none" stroke="#2d2d2d" strokeWidth="0.5"/>
                        </svg>
                    </div>

                    <div className="text-center animate-welcome-scale relative z-10">
                        {/* Decorative Diyas arranged in a circle */}
                        <div className="relative w-64 h-64 mx-auto mb-8">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-4xl animate-icon-blink">🪔</div>
                            <div className="absolute top-8 right-8 text-4xl animate-icon-blink" style={{ animationDelay: '0.3s' }}>🪔</div>
                            <div className="absolute bottom-8 right-8 text-4xl animate-icon-blink" style={{ animationDelay: '0.6s' }}>🪔</div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl animate-icon-blink" style={{ animationDelay: '0.9s' }}>🪔</div>
                            <div className="absolute bottom-8 left-8 text-4xl animate-icon-blink" style={{ animationDelay: '1.2s' }}>🪔</div>
                            <div className="absolute top-8 left-8 text-4xl animate-icon-blink" style={{ animationDelay: '1.5s' }}>🪔</div>
                            
                            {/* Central Folded Hands */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl sm:text-8xl animate-glow-pulse">
                                🙏
                            </div>
                        </div>
                        
                        {/* Main Namaste Text with glow effect */}
                        <div className="relative mb-8">
                            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-stamp-red via-aged-yellow to-stamp-red bg-clip-text text-transparent filter drop-shadow-2xl mb-4"
                                style={{
                                    textShadow: '0 0 40px rgba(139, 58, 58, 0.3), 0 0 80px rgba(232, 220, 196, 0.2)'
                                }}>
                                नमस्ते
                            </h1>
                        </div>
                        
                        {/* Flowing Wave Decoration */}
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <div className="text-stamp-red text-xl">❋</div>
                            <div className="h-px w-20 bg-gradient-to-r from-transparent via-aged-yellow to-aged-yellow"></div>
                            <div className="text-vintage-green text-2xl">✺</div>
                            <div className="h-px w-20 bg-gradient-to-l from-transparent via-aged-yellow to-aged-yellow"></div>
                            <div className="text-stamp-red text-xl">❋</div>
                        </div>
                        
                        {/* Subtitles with fade in */}
                        <div className="space-y-2">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-vintage-green animate-fade-in-up [animation-delay:0.5s]"
                               style={{
                                   textShadow: '0 2px 10px rgba(74, 93, 79, 0.2)'
                               }}>
                                स्वागत है
                            </p>
                            <p className="text-lg sm:text-xl md:text-2xl text-stamp-red font-courier-prime animate-fade-in-up [animation-delay:0.7s]">
                                Welcome to My Portfolio
                            </p>
                        </div>

                        {/* Bottom decorative pattern */}
                        <div className="mt-8 flex justify-center gap-3 opacity-60">
                            <span className="text-aged-yellow text-sm">🕉️</span>
                            <span className="text-vintage-green text-sm">✦</span>
                            <span className="text-aged-yellow text-sm">🕉️</span>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Main Content - Hidden during welcome screen */}
            {!showWelcome && (
                <>
                    {/* Sparkle Trail */}
                    {sparkles.map(sparkle => (
                        <div
                            key={sparkle.id}
                            className="fixed pointer-events-none z-[9999] animate-sparkle-fade"
                            style={{
                                left: sparkle.x,
                                top: sparkle.y,
                                width: sparkle.size,
                                height: sparkle.size,
                                transform: 'translate(-50%, -50%)'
                            }}
                        >
                            <div
                                className="w-full h-full rotate-45 animate-spin-slow"
                                style={{
                                    background: sparkle.color,
                                    boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}, 0 0 ${sparkle.size}px ${sparkle.color}`
                                }}
                            />
                            <div
                                className="absolute inset-0 rotate-0"
                                style={{
                                    background: sparkle.color,
                                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                                    filter: `drop-shadow(0 0 ${sparkle.size}px ${sparkle.color})`
                                }}
                            />
                        </div>
                    ))}
            
            {/* Vintage Navbar */}
            <nav className="sticky top-0 z-50 bg-aged-yellow border-b-[3px] sm:border-b-4 border-ink-black shadow-md" aria-label="Main navigation">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                        {/* Logo - Left side (takes less space) */}
                        <div className="flex-shrink-0 w-[35%] sm:w-[40%]">
                            <a href="#home" className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-ink-black hover:text-stamp-red transition-colors">
                                &lt;AU/&gt;
                            </a>
                        </div>

                        {/* Navigation - Right side (takes more than half space) */}
                        <div className="flex-1 flex justify-end gap-3 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
                            <a href="#home" className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-bold text-ink-black hover:text-stamp-red transition-colors border-b-2 border-transparent hover:border-stamp-red hover:scale-105">
                                HOME
                            </a>
                            <Link to="/about" className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-ink-black hover:text-stamp-red transition-colors border-b-2 border-transparent hover:border-stamp-red hover:scale-105">
                                ABOUT
                            </Link>
                            <a href="/projects" className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-ink-black hover:text-stamp-red transition-colors border-b-2 border-transparent hover:border-stamp-red hover:scale-105">
                                PROJECT
                            </a>
                            <Link to="/contact" className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-ink-black hover:text-stamp-red transition-colors border-b-2 border-transparent hover:border-stamp-red hover:scale-105">
                                CONTACT
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Code Editor Window Decoration */}
                <div className="absolute top-8 left-4 sm:left-8 flex items-center gap-2 opacity-30">
                    <div className="w-3 h-3 rounded-full bg-stamp-red border border-ink-black"></div>
                    <div className="w-3 h-3 rounded-full bg-aged-yellow border border-ink-black"></div>
                    <div className="w-3 h-3 rounded-full bg-vintage-green border border-ink-black"></div>
                    <span className="ml-3 font-courier-prime text-xs text-ink-black/50">Developer.java</span>
                </div>

                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16 order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0">
                            {/* Java class declaration */}
                            <div className="font-courier-prime text-xs sm:text-sm text-ink-black/80 mb-4">
                                <span className="text-stamp-red font-bold">1</span> <span className="text-vintage-green font-bold">public class</span> <span className="text-ink-black font-bold">Developer</span> <span className="text-vintage-green font-bold">{'{'}</span>
                            </div>
                            <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mb-4">
                                <span className="text-stamp-red">2</span> <span className="text-vintage-green"></span> <span className="text-aged-yellow"></span> <span className="text-vintage-green">{}</span>
                            </div>
                            
                            {/* Animated Name */}
                            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-ink-black leading-tight mb-8 sm:mb-12 md:mb-14 lg:mb-16 whitespace-nowrap pl-4 sm:pl-6">
                                {['A', 'B', 'H', 'I', 'S', 'H', 'E', 'K', ' ', 'U', 'P', 'A', 'D', 'H', 'Y', 'A', 'Y'].map((letter, index) => (
                                    <span
                                        key={index}
                                        className="inline-block animate-letter-pop"
                                        style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
                                    >
                                        {letter === ' ' ? '\u00A0' : letter}
                                    </span>
                                ))}
                            </h1>

                            {/* Java main method with role */}
                            <div className="relative animate-fade-in-up [animation-delay:0.8s] mb-16 sm:mb-20 md:mb-24 pl-4 sm:pl-6">
                                <div className="font-courier-prime text-xs sm:text-sm text-ink-black/80 mb-2">
                                    <span className="text-stamp-red font-bold">3</span>   <span className="text-vintage-green font-bold">public static void</span> <span className="text-ink-black font-bold">main</span>(<span className="text-vintage-green font-bold">String</span>[] args) <span className="text-vintage-green font-bold">{'{'}</span>
                                </div>
                                <div className="bg-ink-black text-vintage-green px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 font-courier-prime text-xs sm:text-sm md:text-base lg:text-lg border-[3px] sm:border-4 border-vintage-green shadow-[0_0_20px_rgba(74,93,79,0.3)] inline-block">
                                    <span className="text-aged-yellow">String</span> <span className="text-paper-white">role</span> <span className="text-vintage-green">=</span> <span className="text-stamp-red">"FULL_STACK_DEVELOPER"</span><span className="text-vintage-green">;</span>
                                    <br />
                                    <span className="text-paper-white">System.out.println</span><span className="text-vintage-green">(</span><span className="text-paper-white">role</span><span className="text-vintage-green">);</span>
                                </div>
                                <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-2">
                                    <span className="text-stamp-red">4</span>   <span className="text-vintage-green">{'}'}</span>
                                </div>
                            </div>

                            {/* About section with Java code style */}
                            <div className="space-y-6 sm:space-y-8 md:space-y-10 animate-fade-in-up [animation-delay:1.3s] mt-16 sm:mt-20 md:mt-24 max-w-4xl">
                                <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mb-4 pl-4 sm:pl-6">
                                    <span className="text-stamp-red">5</span> 
                                </div>
                                
                                {/* Code block style bio with Java syntax */}
                                <div className="bg-ink-black/5 border-l-4 border-vintage-green p-4 sm:p-5 md:p-6 lg:p-8 font-courier-prime space-y-4 sm:space-y-5">
                                    <div>
                                        <span className="text-vintage-green text-xs sm:text-sm md:text-base">System.out.println(</span>
                                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-ink-black/90 leading-relaxed pl-6 sm:pl-8 md:pl-10">
                                            <span className="text-stamp-red text-xs sm:text-sm">"</span>👨‍💻 Passionate developer crafting elegant solutions to complex problems. Specializing in modern web technologies and turning coffee into code since 2018.<span className="text-stamp-red text-xs sm:text-sm">"</span>
                                        </p>
                                        <span className="text-vintage-green text-xs sm:text-sm md:text-base">);</span>
                                    </div>

                                    <div>
                                        <span className="text-vintage-green text-xs sm:text-sm md:text-base">System.out.println(</span>
                                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-ink-black/90 leading-relaxed pl-6 sm:pl-8 md:pl-10">
                                            <span className="text-stamp-red text-xs sm:text-sm">"</span>⚡ I thrive on clean code, performance optimization, and creating exceptional user experiences. When not coding, you'll find me contributing to open-source, mentoring developers, or exploring the latest tech trends.<span className="text-stamp-red text-xs sm:text-sm">"</span>
                                        </p>
                                        <span className="text-vintage-green text-xs sm:text-sm md:text-base">);</span>
                                    </div>

                                    <div>
                                        <span className="text-vintage-green text-xs sm:text-sm md:text-base">System.out.println(</span>
                                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-ink-black/90 leading-relaxed pl-6 sm:pl-8 md:pl-10">
                                            <span className="text-stamp-red text-xs sm:text-sm">"</span>🚀 Let's build something amazing together!<span className="text-stamp-red text-xs sm:text-sm">"</span>
                                        </p>
                                        <span className="text-vintage-green text-xs sm:text-sm md:text-base">);</span>
                                    </div>
                                </div>
                                
                                <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 pl-4 sm:pl-6">
                                    <span className="text-stamp-red">6</span> 
                                </div>
                            </div>

                            {/* CTA Buttons with Java method calls */}
                            <div className="animate-fade-in-up [animation-delay:1.8s] pt-8 sm:pt-10 md:pt-12">
                                <div className="font-courier-prime text-xs sm:text-sm text-ink-black/80 mb-4 pl-4 sm:pl-6">
                                    <span className="text-stamp-red font-bold">7</span>   <span className="text-vintage-green font-bold">public void</span> <span className="text-ink-black font-bold">execute</span>() <span className="text-vintage-green font-bold">{'{'}</span>
                                </div>
                                <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mb-4 pl-4 sm:pl-6">
                                    <span className="text-stamp-red">8</span> 
                                    </div>
                                
                                <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 md:gap-8 max-lg:justify-center pl-8 sm:pl-10">
                                    <a
                                        href="/projects"
                                        className="font-courier-prime text-xs sm:text-sm md:text-base text-ink-black bg-aged-yellow px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 tracking-wider sm:tracking-widest uppercase border-[2px] sm:border-[3px] border-ink-black shadow-[3px_3px_0_rgba(45,45,45,1)] sm:shadow-[4px_4px_0_rgba(45,45,45,1)] md:shadow-[5px_5px_0_rgba(45,45,45,1)] hover:shadow-[5px_5px_0_rgba(45,45,45,1)] md:hover:shadow-[7px_7px_0_rgba(45,45,45,1)] hover:translate-y-[-2px] transition-all font-bold text-center hover:bg-vintage-green hover:text-paper-white"
                                    >
                                        <span className="text-vintage-green text-xs mr-2">viewProjects()</span>
                                    </a>
                                    <Link
                                        to="/contact"
                                        className="font-courier-prime text-xs sm:text-sm md:text-base text-paper-white bg-stamp-red px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 tracking-wider sm:tracking-widest uppercase border-[2px] sm:border-[3px] border-ink-black shadow-[3px_3px_0_rgba(45,45,45,1)] sm:shadow-[4px_4px_0_rgba(45,45,45,1)] md:shadow-[5px_5px_0_rgba(45,45,45,1)] hover:shadow-[5px_5px_0_rgba(45,45,45,1)] md:hover:shadow-[7px_7px_0_rgba(45,45,45,1)] hover:translate-y-[-2px] transition-all font-bold text-center hover:bg-ink-black"
                                    >
                                        <span className="text-aged-yellow text-xs mr-2">getInTouch()</span>
                                    </Link>
                                </div>
                                
                                <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-4 pl-4 sm:pl-6">
                                    <span className="text-stamp-red">9</span>   
                                </div>
                                <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-4 pl-4 sm:pl-6">
                                    <span className="text-stamp-red">10</span>   <span className="text-vintage-green">{'}'}</span>
                                </div>
                                <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-4 pl-0">
                                    <span className="text-stamp-red">11</span> <span className="text-vintage-green">{'}'}</span> <span className="text-vintage-green/70">// End of Developer class</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Floating Animated Profile Image */}
                        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                            <div className="relative animate-fade-in-up [animation-delay:0.5s] translate-x-5">
                                {/* Main image container with vintage frame */}
                                <div className="relative animate-image-float">
                                    {/* Vintage frame */}
                                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border-[6px] sm:border-[8px] md:border-[10px] border-aged-yellow bg-aged-yellow p-2 sm:p-3 md:p-4 shadow-[8px_8px_0_rgba(45,45,45,0.3)] sm:shadow-[10px_10px_0_rgba(45,45,45,0.3)] md:shadow-[12px_12px_0_rgba(45,45,45,0.3)] rotate-2 hover:rotate-0 transition-transform duration-300">
                                        <div className="w-full h-full border-[3px] sm:border-4 border-ink-black overflow-hidden">
                                            <img
                                                src="/image.jpg"
                                                alt="Abhishek Upadhyay - Full Stack Developer"
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                        {/* Corner decorations */}
                                        <div className="absolute -top-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-stamp-red rounded-full border-2 border-paper-white" />
                                        <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-stamp-red rounded-full border-2 border-paper-white" />
                                        <div className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-stamp-red rounded-full border-2 border-paper-white" />
                                        <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-stamp-red rounded-full border-2 border-paper-white" />
                                    </div>
                                </div>

                                {/* Floating experience stamps */}
                                <div className="absolute -top-4 sm:-top-6 -left-6 sm:-left-9 bg-stamp-red text-paper-white px-3 sm:px-4 py-2 sm:py-3 rounded-full border-[3px] sm:border-4 border-ink-black rotate-[-15deg] shadow-lg animate-spin-slow text-xs sm:text-sm md:text-base font-bold">
                                  .  1+ YRS .
                                </div>
                                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-vintage-green text-paper-white px-3 sm:px-4 py-2 sm:py-3 rounded-full border-[3px] sm:border-4 border-ink-black rotate-[15deg] shadow-lg animate-icon-blink text-xs sm:text-sm md:text-base font-bold">
                                   . 10+ PROJ .
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vintage Footer */}
            <footer className="bg-ink-black text-paper-white border-t-[4px] sm:border-t-[5px] border-aged-yellow py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8" aria-label="Site footer">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {/* Navigation */}
                        <div className="space-y-3 sm:space-y-4">
                            <h3 className="text-aged-yellow text-base sm:text-lg md:text-xl font-bold border-b-2 border-aged-yellow/30 pb-2">
                                NAVIGATE
                            </h3>
                            <nav className="flex flex-col space-y-2">
                                <a href="#home" className="text-xs sm:text-sm md:text-base text-paper-white/80 hover:text-aged-yellow transition-colors font-courier-prime">
                                    &gt; Home
                                </a>
                                <Link to="/about" className="text-xs sm:text-sm md:text-base text-paper-white/80 hover:text-aged-yellow transition-colors font-courier-prime">
                                    &gt; About
                                </Link>
                                <Link to="/projects" className="text-xs sm:text-sm md:text-base text-paper-white/80 hover:text-aged-yellow transition-colors font-courier-prime">
                                    &gt; Projects
                                </Link>
                                <Link to="/contact" className="text-xs sm:text-sm md:text-base text-paper-white/80 hover:text-aged-yellow transition-colors font-courier-prime">
                                    &gt; Contact
                                </Link>
                            </nav>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-3 sm:space-y-4">
                            <h3 className="text-aged-yellow text-base sm:text-lg md:text-xl font-bold border-b-2 border-aged-yellow/30 pb-2">
                                TECH STACK
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['Java','SQL','Postman','HTML','CSS', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB'].map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs sm:text-sm bg-vintage-green/20 text-aged-yellow px-2 sm:px-3 py-1 border border-aged-yellow/30 font-courier-prime"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-3 sm:space-y-4">
                            <h3 className="text-aged-yellow text-base sm:text-lg md:text-xl font-bold border-b-2 border-aged-yellow/30 pb-2">
                                CONNECT
                            </h3>
                            <div className="flex flex-col space-y-2">
                                <a href="https://github.com/Theupadhyay" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm md:text-base text-paper-white/80 hover:text-aged-yellow transition-colors font-courier-prime" aria-label="Visit GitHub profile">
                                    » GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/abhishek7upadhyay" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm md:text-base text-paper-white/80 hover:text-aged-yellow transition-colors font-courier-prime" aria-label="Visit LinkedIn profile">
                                    » LinkedIn
                                </a>
                                <a href="https://x.com/_theupadhyay" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm md:text-base text-paper-white/80 hover:text-aged-yellow transition-colors font-courier-prime" aria-label="Visit Twitter profile">
                                    » Twitter
                                </a>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3 sm:space-y-4">
                            <h3 className="text-aged-yellow text-base sm:text-lg md:text-xl font-bold border-b-2 border-aged-yellow/30 pb-2">
                                REACH OUT
                            </h3>
                            <div className="text-xs sm:text-sm md:text-base font-courier-prime space-y-1 sm:space-y-2">
                                <p className="text-paper-white/80">abhishekjaysian777@gmail.com</p>
                                <p className="text-paper-white/80">+91 6299292109</p>
                                <p className="text-paper-white/80">Chhapra, Bihar, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-aged-yellow/30">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm font-courier-prime text-paper-white/60">
                            <p>&copy; 2025 Abhishek Upadhyay. All rights reserved.</p>
                            <p>Built with ❤️ and Upadhyay vibes</p>
                        </div>
                    </div>
                </div>
            </footer>
                </>
            )}
        </div>
    );
};

export default Home;
