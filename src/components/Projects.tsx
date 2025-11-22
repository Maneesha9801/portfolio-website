import React from 'react';
import { Card } from './ui/Card';

interface ProjectsProps {
    onProjectClick: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
    const projects = [
        {
            id: 'netoptix',
            title: "NetOptix",
            category: "Network Visualization",
            description: "Reducing cognitive load in network debugging by transforming abstract CLI logs into a live, spatial topology.",
            image: `${import.meta.env.BASE_URL}netoptix-demo.webp`,
            tags: ["React Flow", "D3.js", "UX Research"],
            color: "bg-black text-white" // Dark theme for this card
        },
        {
            id: 'emotegan',
            title: 'EmoteGAN',
            category: 'AI & UX Research',
            image: 'https://placehold.co/600x400/1a1a1a/FFF?text=EmoteGAN',
            description: 'Engineering Empathy in Digital Interfaces'
        },
        {
            id: 'dry-sun',
            title: 'Dry Sun Logo',
            category: 'Branding',
            image: 'https://placehold.co/600x400/e2e2e2/1a1a1a?text=Dry+Sun',
            description: 'Minimalist brand identity'
        },
        {
            id: 'green-strike',
            title: 'Green Strike',
            category: 'Identity',
            image: 'https://placehold.co/600x400/d4d4d4/1a1a1a?text=Green+Strike',
            description: 'Eco-friendly product design'
        },
    ];

    return (
        <section id="projects" className="py-20 px-6 relative">
            {/* Decorative background element */}
            <div className="absolute top-40 right-0 w-64 h-64 bg-accent-blue/20 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif relative inline-block">
                        Selected Work
                        <span className="absolute -bottom-2 right-0 w-1/2 h-3 bg-accent-pink -z-10 transform rotate-1"></span>
                    </h2>
                    <span className="text-gray-500 hidden md:inline-block font-medium">2023 - Present</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} onClick={() => onProjectClick(project.id)}>
                            <Card className="group cursor-pointer overflow-hidden p-0 border-2 border-transparent hover:border-black transition-all duration-300 h-full bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
                                <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">{project.category}</p>
                                    <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
