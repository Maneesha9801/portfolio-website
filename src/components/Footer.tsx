import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer id="contact" className="py-20 px-6 bg-black text-white">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif mb-8">Lets talk!</h2>
                        <a
                            href="mailto:maneeshapillai9801@gmail.com"
                            className="text-2xl md:text-3xl underline decoration-1 underline-offset-8 hover:text-gray-300 transition-colors"
                        >
                            maneeshapillai9801@gmail.com
                        </a>
                    </div>
                    <div className="flex flex-col justify-end items-start md:items-end">
                        <nav className="flex flex-col gap-4 text-lg text-gray-400">
                            <a href="https://github.com/Maneesha9801" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                            <a href="https://www.linkedin.com/in/maneesha8901/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
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
