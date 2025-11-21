import React from 'react';
import { Button } from './ui/Button';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-20 px-6">
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 md:order-1">
                        <div className="absolute inset-0 bg-accent-green rounded-full transform -translate-x-4 translate-y-4 -z-10"></div>
                        <div className="aspect-square rounded-full overflow-hidden border-4 border-black">
                            <img
                                src={`${import.meta.env.BASE_URL}maneesha.jpg`}
                                alt="Maneesha"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl md:text-5xl font-serif mb-8 relative inline-block">
                            About Me
                            <span className="absolute -bottom-2 left-0 w-full h-3 bg-accent-yellow -z-10 transform -rotate-1"></span>
                        </h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Hello! I’m Maneesha, a design engineer based in Bengaluru with a knack for bringing creative visions to life.
                            With a background in technical analysis and a passion for design, I bridge the gap between complex systems and intuitive user experiences.
                        </p>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            I love collaborating with clients and creatives alike to push boundaries and produce work that not only meets but exceeds expectations.
                        </p>
                        <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8" onClick={() => window.location.href = 'mailto:hello@example.com'}>
                            Let's Connect
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
