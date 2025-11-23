import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer id="contact" className="py-10 px-6 bg-black text-white">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif mb-4">Lets talk!</h2>
                        <a
                            href="mailto:maneeshapillai9801@gmail.com"
                            className="text-xl md:text-2xl underline decoration-1 underline-offset-8 hover:text-gray-300 transition-colors"
                        >
                            maneeshapillai9801@gmail.com
                        </a>
                    </div>
                    <div className="flex flex-col justify-end items-start md:items-end">
                        <nav className="flex flex-col gap-2 text-base text-gray-400">
                            <a href="https://github.com/Maneesha9801" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                            <a href="https://www.linkedin.com/in/maneesha8901/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        </nav>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} Maneesha. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed & Built with Love</p>
                </div>
            </div>
        </footer>
    );
};
