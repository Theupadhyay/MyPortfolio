import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const Contact: React.FC = () => {
    const [showPage, setShowPage] = useState(false);
    const [compilingText, setCompilingText] = useState('');
    const [showTerminalCursor, setShowTerminalCursor] = useState(true);
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        // Simulate compilation/loading effect
        const messages = [
            'javac ContactHandler.java',
            'Compiling contact module...',
            'Loading dependencies...',
            'Initializing connection...',
            'Ready to receive messages'
        ];

        let messageIndex = 0;
        let charIndex = 0;

        const typeMessage = () => {
            if (messageIndex < messages.length) {
                if (charIndex < messages[messageIndex].length) {
                    setCompilingText(prev => prev + messages[messageIndex][charIndex]);
                    charIndex++;
                    setTimeout(typeMessage, 25);
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

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = '// Error: Name cannot be null';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = '// Error: Email cannot be null';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = '// Error: Invalid email format';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = '// Error: Message cannot be empty';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            setFormData({ name: '', email: '', message: '' });
            
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const codingQuotes = [
        { quote: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
        { quote: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
        { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" }
    ];

    const [currentQuote] = useState(codingQuotes[Math.floor(Math.random() * codingQuotes.length)]);

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

            {/* Main Contact Page Content */}
            <div className={`min-h-screen bg-paper-white font-special-elite relative overflow-hidden transition-opacity duration-500 ${showPage ? 'opacity-100' : 'opacity-0'}`}>
                {/* Code Editor Window Decoration */}
                <div className="absolute top-4 sm:top-8 left-4 sm:left-8 flex items-center gap-2 opacity-30 z-10 animate-code-compile">
                    <div className="w-3 h-3 rounded-full bg-stamp-red border border-ink-black"></div>
                    <div className="w-3 h-3 rounded-full bg-aged-yellow border border-ink-black"></div>
                    <div className="w-3 h-3 rounded-full bg-vintage-green border border-ink-black"></div>
                    <span className="ml-3 font-courier-prime text-xs text-ink-black/50">ContactHandler.java</span>
                </div>

                {/* Navigation Bar */}
                <nav className="sticky top-0 z-50 bg-aged-yellow border-b-[3px] sm:border-b-4 border-ink-black shadow-md" aria-label="Main navigation">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                            <div className="flex-shrink-0 w-[35%] sm:w-[40%]">
                                <Link to="/" className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-ink-black hover:text-stamp-red transition-colors">
                                    &lt;AU/&gt;
                                </Link>
                            </div>
                            <div className="flex-1 flex justify-end gap-3 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
                                <Link to="/" className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-bold text-ink-black hover:text-stamp-red transition-colors border-b-2 border-transparent hover:border-stamp-red hover:scale-105">
                                    HOME
                                </Link>
                                <Link to="/about" className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-ink-black hover:text-stamp-red transition-colors border-b-2 border-transparent hover:border-stamp-red hover:scale-105">
                                    ABOUT
                                </Link>
                                <a href="#projects" className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-ink-black hover:text-stamp-red transition-colors border-b-2 border-transparent hover:border-stamp-red hover:scale-105">
                                    PROJECT
                                </a>
                                <a href="#contact" className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-bold text-stamp-red border-b-2 border-stamp-red">
                                    CONTACT
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
                    {/* Header with Java syntax */}
                    <div className="mb-12 sm:mb-16 md:mb-20">
                        <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mb-3 animate-fade-in-up pl-4 sm:pl-6">
                            <span className="text-stamp-red">1</span> <span className="text-vintage-green">package</span> portfolio.contact;
                        </div>
                        <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mb-3 animate-fade-in-up [animation-delay:0.1s] pl-4 sm:pl-6">
                            <span className="text-stamp-red">2</span>
                        </div>
                        <div className="font-courier-prime text-xs sm:text-sm text-ink-black/80 mb-6 animate-fade-in-up [animation-delay:0.2s] pl-4 sm:pl-6">
                            <span className="text-stamp-red font-bold">3</span> <span className="text-vintage-green font-bold">public class</span> <span className="text-ink-black font-bold">ContactHandler</span> <span className="text-vintage-green font-bold">{'{'}</span>
                        </div>
                        
                        
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-ink-black mb-8 sm:mb-12 text-center animate-fade-in-up [animation-delay:0.3s] pl-4 sm:pl-6">
                            <span className="inline-block border-[3px] sm:border-[4px] border-ink-black bg-stamp-red text-paper-white px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 rotate-[-1deg] shadow-[4px_4px_0_rgba(45,45,45,1)] hover:rotate-0 hover:scale-105 transition-all duration-300">
                                GET IN TOUCH
                            </span>
                        </h1>
                        <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mb-6 animate-fade-in-up [animation-delay:0.2s] pl-4 sm:pl-6">
                            <span className="text-stamp-red">4</span> 
                        </div>
                        {/* Coding Quote */}
                        <div className="max-w-3xl mx-auto text-center animate-fade-in-up [animation-delay:0.4s]">
                            <div className="bg-vintage-green/10 border-l-4 border-vintage-green p-4 sm:p-6">
                                <p className="font-courier-prime text-sm sm:text-base md:text-lg text-ink-black/90 italic mb-2">
                                    "{currentQuote.quote}"
                                </p>
                                <p className="font-courier-prime text-xs sm:text-sm text-vintage-green font-bold">
                                    - {currentQuote.author}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Side - Contact Form as Java Code */}
                        <div className="animate-fade-in-up [animation-delay:0.5s]">
                            <div className="font-courier-prime text-xs sm:text-sm text-ink-black/80 mb-4 pl-4 sm:pl-6">
                                <span className="text-stamp-red font-bold">5</span>   <span className="text-vintage-green font-bold">public void</span> <span className="text-ink-black font-bold">sendMessage</span>() <span className="text-vintage-green font-bold">{'{'}</span>
                            </div>

                            <div className="bg-ink-black/5 border-2 border-ink-black p-4 sm:p-6 md:p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Field */}
                                    <div>
                                        <label className="font-courier-prime text-xs sm:text-sm text-ink-black mb-2 block font-semibold">
                                            <span className="text-vintage-green">String</span> <span className="text-ink-black">senderName</span> = <span className="text-stamp-red">"</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-paper-white border-2 border-ink-black px-4 py-3 font-courier-prime text-sm sm:text-base text-ink-black focus:outline-none focus:border-vintage-green focus:shadow-[4px_4px_0_rgba(74,93,79,1)] transition-all"
                                            placeholder="Your Name"
                                        />
                                        <span className="font-courier-prime text-xs sm:text-sm text-ink-black font-semibold">
                                            <span className="text-stamp-red">"</span>;
                                        </span>
                                        {errors.name && (
                                            <p className="font-courier-prime text-xs sm:text-sm text-stamp-red mt-1">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label className="font-courier-prime text-xs sm:text-sm text-ink-black mb-2 block font-semibold">
                                            <span className="text-vintage-green">String</span> <span className="text-ink-black">emailAddress</span> = <span className="text-stamp-red">"</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-paper-white border-2 border-ink-black px-4 py-3 font-courier-prime text-sm sm:text-base text-ink-black focus:outline-none focus:border-vintage-green focus:shadow-[4px_4px_0_rgba(74,93,79,1)] transition-all"
                                            placeholder="your.email@example.com"
                                        />
                                        <span className="font-courier-prime text-xs sm:text-sm text-ink-black font-semibold">
                                            <span className="text-stamp-red">"</span>;
                                        </span>
                                        {errors.email && (
                                            <p className="font-courier-prime text-xs sm:text-sm text-stamp-red mt-1">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label className="font-courier-prime text-xs sm:text-sm text-ink-black mb-2 block font-semibold">
                                            <span className="text-vintage-green">String</span> <span className="text-ink-black">message</span> = <span className="text-stamp-red">"</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full bg-paper-white border-2 border-ink-black px-4 py-3 font-courier-prime text-sm sm:text-base text-ink-black focus:outline-none focus:border-vintage-green focus:shadow-[4px_4px_0_rgba(74,93,79,1)] transition-all resize-none"
                                            placeholder="Your message here..."
                                        />
                                        <span className="font-courier-prime text-xs sm:text-sm text-ink-black font-semibold">
                                            <span className="text-stamp-red">"</span>;
                                        </span>
                                        {errors.message && (
                                            <p className="font-courier-prime text-xs sm:text-sm text-stamp-red mt-1">{errors.message}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full font-courier-prime text-sm sm:text-base md:text-lg text-paper-white bg-vintage-green px-6 py-3 sm:py-4 tracking-wider uppercase border-[3px] border-ink-black shadow-[4px_4px_0_rgba(45,45,45,1)] hover:shadow-[6px_6px_0_rgba(45,45,45,1)] hover:translate-y-[-2px] transition-all font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-stamp-red"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <span className="inline-block w-2 h-2 bg-paper-white rounded-full animate-pulse"></span>
                                                    <span className="inline-block w-2 h-2 bg-paper-white rounded-full animate-pulse [animation-delay:0.2s]"></span>
                                                    <span className="inline-block w-2 h-2 bg-paper-white rounded-full animate-pulse [animation-delay:0.4s]"></span>
                                                    <span className="ml-2">Sending...</span>
                                                </span>
                                            ) : (
                                                'contactHandler.send()'
                                            )}
                                        </button>
                                    </div>

                                    {/* Success Message */}
                                    {submitStatus === 'success' && (
                                        <div className="bg-vintage-green/20 border-2 border-vintage-green p-4 animate-fade-in-up">
                                            <p className="font-courier-prime text-sm sm:text-base text-vintage-green">
                                                <span className="text-aged-yellow">System.out.println(</span>
                                                <span className="text-stamp-red">"Message sent successfully! ✓"</span>
                                                <span className="text-aged-yellow">);</span>
                                            </p>
                                        </div>
                                    )}
                                </form>
                            </div>

                            <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-4 pl-4 sm:pl-6">
                                <span className="text-stamp-red">5</span>   <span className="text-vintage-green">{'}'}</span>
                            </div>
                        </div>

                        {/* Right Side - Contact Info & Social Links */}
                        <div className="space-y-8 animate-fade-in-up [animation-delay:0.7s]">
                            {/* Contact Information */}
                            <div>
                                <div className="font-courier-prime text-xs sm:text-sm text-ink-black/80 mb-4 pl-4 sm:pl-6">
                                    <span className="text-stamp-red font-bold">6</span>   <span className="text-vintage-green font-bold">public</span> <span className="text-ink-black font-bold">Map</span>&lt;<span className="text-vintage-green">String, String</span>&gt; <span className="text-ink-black font-bold">getContactInfo</span>() <span className="text-vintage-green font-bold">{'{'}</span>
                                </div>

                                <div className="bg-vintage-green border-[3px] border-ink-black p-6 sm:p-8 shadow-[6px_6px_0_rgba(45,45,45,1)]">
                                    <h3 className="text-xl sm:text-2xl font-bold text-paper-white mb-6 font-courier-prime">
                                        &lt;Contact Info /&gt;
                                    </h3>
                                    
                                    <div className="space-y-4">
                                        {/* Email */}
                                        <div className="group">
                                            <div className="flex items-start gap-3 text-paper-white hover:text-aged-yellow transition-colors">
                                                <span className="text-2xl mt-1">📧</span>
                                                <div className="flex-1">
                                                    <p className="font-courier-prime text-xs sm:text-sm text-aged-yellow mb-1">Email:</p>
                                                    <a href="mailto:abhishekjaysian777@gmail.com" className="font-courier-prime text-sm sm:text-base break-all hover:underline">
                                                        abhishekjaysian777@gmail.com
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="group">
                                            <div className="flex items-start gap-3 text-paper-white hover:text-aged-yellow transition-colors">
                                                <span className="text-2xl mt-1">📱</span>
                                                <div className="flex-1">
                                                    <p className="font-courier-prime text-xs sm:text-sm text-aged-yellow mb-1">Phone:</p>
                                                    <a href="tel:+916299292109" className="font-courier-prime text-sm sm:text-base hover:underline">
                                                        +91 6299292109
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="group">
                                            <div className="flex items-start gap-3 text-paper-white hover:text-aged-yellow transition-colors">
                                                <span className="text-2xl mt-1">📍</span>
                                                <div className="flex-1">
                                                    <p className="font-courier-prime text-xs sm:text-sm text-aged-yellow mb-1">Location:</p>
                                                    <p className="font-courier-prime text-sm sm:text-base">
                                                        Chhapra, Bihar, India
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Availability */}
                                        <div className="group">
                                            <div className="flex items-start gap-3 text-paper-white hover:text-aged-yellow transition-colors">
                                                <span className="text-2xl mt-1">⏰</span>
                                                <div className="flex-1">
                                                    <p className="font-courier-prime text-xs sm:text-sm text-aged-yellow mb-1">Availability:</p>
                                                    <p className="font-courier-prime text-sm sm:text-base">
                                                        Open to opportunities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-4 pl-4 sm:pl-6">
                                    <span className="text-stamp-red"></span>   <span className="text-vintage-green">{'.'}</span>
                                </div>
                            </div>
                            <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-4 pl-4 sm:pl-6">
                                    <span className="text-stamp-red">7</span>   <span className="text-vintage-green">{'}'}</span>
                                </div>

                            {/* Social Links */}
                            <div>
                                <div className="font-courier-prime text-xs sm:text-sm text-ink-black/80 mb-4 pl-4 sm:pl-6">
                                    <span className="text-stamp-red font-bold">8</span>   <span className="text-vintage-green font-bold">public</span> <span className="text-ink-black font-bold">List</span>&lt;<span className="text-vintage-green">SocialLink</span>&gt; <span className="text-ink-black font-bold">getSocialLinks</span>() <span className="text-vintage-green font-bold">{'{'}</span>
                                </div>

                                <div className="bg-aged-yellow border-[3px] border-ink-black p-6 sm:p-8 shadow-[6px_6px_0_rgba(45,45,45,1)]">
                                    <h3 className="text-xl sm:text-2xl font-bold text-ink-black mb-6 font-courier-prime">
                                        &lt;Social Links /&gt;
                                    </h3>
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                        {/* GitHub */}
                                        <a
                                            href="https://github.com/Theupadhyay"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group bg-ink-black border-2 border-ink-black p-4 hover:bg-vintage-green transition-all hover:scale-105 hover:shadow-[4px_4px_0_rgba(45,45,45,1)]"
                                            aria-label="Visit GitHub profile"
                                        >
                                            <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform">🐙</div>
                                            <p className="font-courier-prime text-xs sm:text-sm text-paper-white">GitHub</p>
                                        </a>

                                        {/* LinkedIn */}
                                        <a
                                            href="https://www.linkedin.com/in/abhishek7upadhyay"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group bg-ink-black border-2 border-ink-black p-4 hover:bg-vintage-green transition-all hover:scale-105 hover:shadow-[4px_4px_0_rgba(45,45,45,1)]"
                                            aria-label="Visit LinkedIn profile"
                                        >
                                            <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform">💼</div>
                                            <p className="font-courier-prime text-xs sm:text-sm text-paper-white">LinkedIn</p>
                                        </a>

                                        {/* Twitter */}
                                        <a
                                            href="https://x.com/_theupadhyay"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group bg-ink-black border-2 border-ink-black p-4 hover:bg-vintage-green transition-all hover:scale-105 hover:shadow-[4px_4px_0_rgba(45,45,45,1)]"
                                            aria-label="Visit Twitter profile"
                                        >
                                            <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform">🐦</div>
                                            <p className="font-courier-prime text-xs sm:text-sm text-paper-white">Twitter</p>
                                        </a>

                                        {/* Portfolio */}
                                        <a
                                            href="https://github.com/Theupadhyay"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group bg-ink-black border-2 border-ink-black p-4 hover:bg-vintage-green transition-all hover:scale-105 hover:shadow-[4px_4px_0_rgba(45,45,45,1)]"
                                            aria-label="Visit Portfolio"
                                        >
                                            <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform">🌐</div>
                                            <p className="font-courier-prime text-xs sm:text-sm text-paper-white">Portfolio</p>
                                        </a>
                                    </div>
                                </div>

                                <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-4 pl-4 sm:pl-6">
                                    <span className="text-stamp-red">.</span>   
                                </div>
                                <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-4 pl-4 sm:pl-6">
                                    <span className="text-stamp-red">9</span>   <span className="text-vintage-green">{'}'}</span>
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className="bg-stamp-red/10 border-l-4 border-stamp-red p-4 sm:p-6">
                                <p className="font-courier-prime text-xs sm:text-sm text-ink-black">
                                    <span className="text-vintage-green">// </span>
                                    <span className="font-bold">Response Time:</span> Usually within 24 hours ⚡
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Closing class */}
                    <div className="font-courier-prime text-xs sm:text-sm text-vintage-green/60 mt-12 animate-fade-in-up [animation-delay:0.9s] pl-4 sm:pl-6">
                        <span className="text-stamp-red">10</span> <span className="text-vintage-green">{'}'}</span> <span className="text-vintage-green/70">// End of ContactHandler class</span>
                    </div>
                </div>

                {/* Back to Top Button */}
                <div className="fixed bottom-8 right-8 z-40">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-vintage-green text-paper-white p-3 sm:p-4 border-2 border-ink-black shadow-[4px_4px_0_rgba(45,45,45,1)] hover:shadow-[6px_6px_0_rgba(45,45,45,1)] hover:translate-y-[-2px] transition-all group"
                        aria-label="Scroll to top"
                    >
                        <span className="text-xl sm:text-2xl group-hover:scale-110 inline-block transition-transform">↑</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Contact;
