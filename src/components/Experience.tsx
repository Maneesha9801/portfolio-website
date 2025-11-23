import React from 'react';

export const Experience: React.FC = () => {
    const experiences = [
        {
            role: 'Senior Technical Analyst',
            company: 'Network Systems Inc.',
            period: '2023 - Present',
            description: 'I design next-generation L2/L3 network systems in the MPLS domain, helping build resilient, high-performance infrastructures that keep global communication running seamlessly.'
        },
        {
            role: 'Design Head',
            company: 'Literary & Debating Club (NIT Calicut)',
            period: '2020 - 2021',
            description: 'I directed visual strategy for large-scale initiatives like mental health week, and pride week; engaging over 3,000 students. Pioneered "Humans of NIT Calicut," a digital storytelling campaign that blended visual design and illustration to foster community connection.'
        },
        {
            role: 'Design Intern',
            company: 'Digital Arts Studio',
            period: 'Summer 2018',
            description: 'Supported the design team in various projects, gaining hands-on experience in web and app interface design.'
        }
    ];

    return (
        <section id="experience" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-serif mb-16">My Experience</h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6 border-b border-gray-200 pb-12 last:border-0">
                            <div className="md:col-span-3">
                                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">{exp.period}</span>
                            </div>
                            <div className="md:col-span-9">
                                <h3 className="text-2xl font-medium mb-2">{exp.role}</h3>
                                <p className="text-lg text-gray-600 mb-4">{exp.company}</p>
                                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
