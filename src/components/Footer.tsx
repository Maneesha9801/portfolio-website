import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer id="contact" className="py-20 px-6 bg-black text-white">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif mb-8">Let's work together</h2>
                        <a
                            href="mailto:hello@example.com"
                            className="text-2xl md:text-3xl underline decoration-1 underline-offset-8 hover:text-gray-300 transition-colors"
                        >
                            hello@example.com
                        </a>
                    </div>
                    <div className="flex flex-col justify-end items-start md:items-end">
                        <nav className="flex flex-col gap-4 text-lg text-gray-400">
                            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-white transition-colors">Twitter</a>
                            <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        </nav>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Maneesha. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed & Built with Love</p>
                </div>
            </div>
        </footer>
    );
};
