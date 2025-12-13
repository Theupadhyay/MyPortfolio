import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper-white font-special-elite">
      {/* Vintage Navbar */}
      <nav className="sticky top-0 z-50 bg-aged-yellow border-b-[3px] sm:border-b-4 border-ink-black shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            {/* Logo - Left side (takes less space) */}
            <div className="flex-shrink-0 w-[35%] sm:w-[40%]">
              <a href="#home" className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-ink-black hover:text-stamp-red transition-colors">
                &lt;AU/&gt;
              </a>
            </div>
            
            {/* Navigation - Right side (takes more than half space) */}
            <div className="flex-1 flex justify-end gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
              <a href="#home" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-ink-black hover:text-stamp-red transition-colors border-b-2 border-transparent hover:border-stamp-red">
                HOME
              </a>
              <a href="#about" className="ml-6 sm:ml-8 md:ml-10 lg:ml-12 text-xs sm:text-sm md:text-base lg:text-lg text-ink-black hover:text-stamp-red transition-colors border-b-2 border-transparent hover:border-stamp-red">
                ABOUT
              </a>
              <a href="#projects" className="ml-6 sm:ml-8 md:ml-10 lg:ml-12 text-xs sm:text-sm md:text-base lg:text-lg text-ink-black hover:text-stamp-red transition-colors border-b-2 border-transparent hover:border-stamp-red">
                PROJECT
              </a>
              <a href="#contact" className="ml-6 sm:ml-8 md:ml-10 lg:ml-12 text-xs sm:text-sm md:text-base lg:text-lg text-ink-black hover:text-stamp-red transition-colors border-b-2 border-transparent hover:border-stamp-red">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16 order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0">
              {/* Animated Name */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-ink-black leading-tight mb-12 sm:mb-14 md:mb-16">
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

              {/* Vintage Terminal-style Designation */}
              <div className="relative inline-block animate-fade-in-up [animation-delay:0.8s] mb-8 sm:mb-10 md:mb-12">
                <div className="bg-vintage-green text-paper-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 font-courier-prime text-xs sm:text-sm md:text-base lg:text-lg border-[3px] sm:border-4 border-ink-black rotate-[-1deg] shadow-[4px_4px_0_rgba(45,45,45,1)] sm:shadow-[5px_5px_0_rgba(45,45,45,1)] md:shadow-[6px_6px_0_rgba(45,45,45,1)]">
                  <span className="animate-glow-pulse">&gt;_</span> FULL STACK DEVELOPER
                </div>
                {/* Decorative stamp effect */}
                <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-stamp-red rounded-full border-2 sm:border-[3px] border-paper-white rotate-12" />
              </div>

              {/* About paragraphs with code comment style */}
              <div className="space-y-5 sm:space-y-6 md:space-y-7 animate-fade-in-up [animation-delay:1.3s] mt-8 sm:mt-10 md:mt-12">
                <div className="font-courier-prime text-xs sm:text-sm md:text-base text-vintage-green font-bold">
                  // About Me
                </div>

                <p className="font-courier-prime text-xs sm:text-sm md:text-base lg:text-lg text-ink-black/80 leading-relaxed pl-4 sm:pl-5 md:pl-6 border-l-[3px] sm:border-l-4 border-aged-yellow/50 max-lg:mx-auto mb-4 sm:mb-5">
                  👨‍💻 Passionate developer crafting elegant solutions to complex problems. Specializing in modern web technologies and turning coffee into code since 2018.
                </p>

                <p className="font-courier-prime text-xs sm:text-sm md:text-base lg:text-lg text-ink-black/80 leading-relaxed pl-4 sm:pl-5 md:pl-6 border-l-[3px] sm:border-l-4 border-aged-yellow/50 max-lg:mx-auto mb-4 sm:mb-5">
                  ⚡ I thrive on clean code, performance optimization, and creating exceptional user experiences. When not coding, you'll find me contributing to open-source, mentoring developers, or exploring the latest tech trends.
                </p>

                <p className="font-courier-prime text-xs sm:text-sm md:text-base lg:text-lg text-ink-black/80 leading-relaxed pl-4 sm:pl-5 md:pl-6 border-l-[3px] sm:border-l-4 border-aged-yellow/50 max-lg:mx-auto mb-4 sm:mb-5">
                  🚀 Let's build something amazing together!
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 md:gap-8 animate-fade-in-up [animation-delay:1.8s] pt-8 sm:pt-10 md:pt-12 max-lg:justify-center">
                <a
                  href="#projects"
                  className="font-courier-prime text-xs sm:text-sm md:text-base text-vintage-green bg-aged-yellow px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 tracking-wider sm:tracking-widest uppercase border-[2px] sm:border-[3px] border-ink-black shadow-[3px_3px_0_rgba(45,45,45,1)] sm:shadow-[4px_4px_0_rgba(45,45,45,1)] md:shadow-[5px_5px_0_rgba(45,45,45,1)] hover:shadow-[5px_5px_0_rgba(45,45,45,1)] md:hover:shadow-[7px_7px_0_rgba(45,45,45,1)] hover:translate-y-[-2px] transition-all font-bold text-center"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="font-courier-prime text-xs sm:text-sm md:text-base text-paper-white bg-stamp-red px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 tracking-wider sm:tracking-widest uppercase border-[2px] sm:border-[3px] border-ink-black shadow-[3px_3px_0_rgba(45,45,45,1)] sm:shadow-[4px_4px_0_rgba(45,45,45,1)] md:shadow-[5px_5px_0_rgba(45,45,45,1)] hover:shadow-[5px_5px_0_rgba(45,45,45,1)] md:hover:shadow-[7px_7px_0_rgba(45,45,45,1)] hover:translate-y-[-2px] transition-all font-bold text-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right Side - Floating Animated Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative animate-fade-in-up [animation-delay:0.5s]">
                {/* Main image container with vintage frame */}
                <div className="relative animate-image-float">
                  {/* Vintage frame */}
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border-[6px] sm:border-[8px] md:border-[10px] border-aged-yellow bg-aged-yellow p-2 sm:p-3 md:p-4 shadow-[8px_8px_0_rgba(45,45,45,0.3)] sm:shadow-[10px_10px_0_rgba(45,45,45,0.3)] md:shadow-[12px_12px_0_rgba(45,45,45,0.3)] rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="w-full h-full border-[3px] sm:border-4 border-ink-black overflow-hidden">
                      <img
                        src="/image.jpeg"
                        alt="Profile"
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
                <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 bg-stamp-red text-paper-white px-3 sm:px-4 py-2 sm:py-3 rounded-full border-[3px] sm:border-4 border-ink-black rotate-[-15deg] shadow-lg animate-spin-slow text-xs sm:text-sm md:text-base font-bold">
                  5+ YRS
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-vintage-green text-paper-white px-3 sm:px-4 py-2 sm:py-3 rounded-full border-[3px] sm:border-4 border-ink-black rotate-[15deg] shadow-lg animate-icon-blink text-xs sm:text-sm md:text-base font-bold">
                  50+ PROJ
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vintage Footer */}
      <footer className="bg-ink-black text-paper-white border-t-[4px] sm:border-t-[5px] border-aged-yellow py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
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
                <a href="#about" className="text-xs sm:text-sm md:text-base text-paper-white/80 hover:text-aged-yellow transition-colors font-courier-prime">
                  &gt; About
                </a>
                <a href="#projects" className="text-xs sm:text-sm md:text-base text-paper-white/80 hover:text-aged-yellow transition-colors font-courier-prime">
                  &gt; Projects
                </a>
                <a href="#contact" className="text-xs sm:text-sm md:text-base text-paper-white/80 hover:text-aged-yellow transition-colors font-courier-prime">
                  &gt; Contact
                </a>
              </nav>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-aged-yellow text-base sm:text-lg md:text-xl font-bold border-b-2 border-aged-yellow/30 pb-2">
                TECH STACK
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB', 'Express'].map((tech) => (
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
                <a href="https://github.com" className="text-xs sm:text-sm md:text-base text-paper-white/80 hover:text-aged-yellow transition-colors font-courier-prime">
                  » GitHub
                </a>
                <a href="https://linkedin.com" className="text-xs sm:text-sm md:text-base text-paper-white/80 hover:text-aged-yellow transition-colors font-courier-prime">
                  » LinkedIn
                </a>
                <a href="https://twitter.com" className="text-xs sm:text-sm md:text-base text-paper-white/80 hover:text-aged-yellow transition-colors font-courier-prime">
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
                <p className="text-paper-white/80">john.doe@email.com</p>
                <p className="text-paper-white/80">+1 (555) 123-4567</p>
                <p className="text-paper-white/80">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-aged-yellow/30">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm font-courier-prime text-paper-white/60">
              <p>&copy; 2024 John Doe. All rights reserved.</p>
              <p>Built with ❤️ and vintage vibes</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
