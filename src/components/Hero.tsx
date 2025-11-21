import React from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-20 pb-10 px-6 relative overflow-hidden">
            {/* Illustrative Sparkles */}
            <div className="absolute top-20 left-10 text-accent-yellow animate-pulse">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
            </div>
            <div className="absolute bottom-20 right-10 text-accent-pink animate-bounce delay-100">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
            </div>

            <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center gap-12">
                <div className="flex-1 z-10">
                    <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 animate-fade-in-up">
                        Hi, I'm <span className="highlight-text">Maneesha</span>
                    </h1>

                    <div className="max-w-xl mb-12 animate-fade-in-up delay-100">
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Engineer by training. Designer by instinct. <br />
                            Currently unravelling complex network protocols and is driven by the need to make invisible systems visually intuitive. Building in the tiny gap between human instinct and digital logic :)
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 animate-fade-in-up delay-200">
                        <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-full px-8" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            See my Portfolio
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center gap-2 text-gray-500 animate-fade-in-up delay-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <span>Bengaluru, Karnataka, India</span>
                    </div>
                </div>

                <div className="flex-1 relative animate-fade-in-up">
                    <div className="relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute inset-0 bg-accent-pink rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
                        <img
                            src="/maneesha.jpg"
                            alt="Maneesha"
                            className="w-full max-w-md mx-auto rounded-2xl border-4 border-black shadow-xl"
                        />
                        {/* Decorative elements on image */}
                        <div className="absolute -top-6 -left-6 text-accent-blue animate-spin-slow">
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
