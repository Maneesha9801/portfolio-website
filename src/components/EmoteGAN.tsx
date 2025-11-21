import React from 'react';

interface EmoteGANProps {
    onBack: () => void;
}

export const EmoteGAN: React.FC<EmoteGANProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-paper animate-fade-in-up selection:bg-accent-yellow selection:text-black">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        Back to Portfolio
                    </button>
                    <span className="font-serif font-bold text-xl">EmoteGAN</span>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-5xl">
                    {/* Hero Section */}
                    <header className="mb-20">
                        <h1 className="text-5xl md:text-7xl font-serif mb-8 relative inline-block">
                            EmoteGAN
                            <span className="absolute -bottom-2 left-0 w-full h-4 bg-accent-blue -z-10 transform rotate-1 opacity-50"></span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed max-w-3xl">
                            Engineering Empathy in Digital Interfaces by bridging the "Uncanny Valley" with high-fidelity, emotionally resonant avatars.
                        </p>
                    </header>

                    {/* Project Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border-y border-gray-200 py-12">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">My Role</h3>
                            <ul className="space-y-2 text-lg">
                                <li>Interaction Researcher</li>
                                <li>Deep Learning Engineer</li>
                                <li>Systems Architect</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Timeline</h3>
                            <p className="text-lg">2023 - Present</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Python', 'PyTorch', 'OpenCV', 'MTCNN', 'BSRGAN', 'Docker'].map(tech => (
                                    <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-32">

                        {/* The Problem */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h2 className="text-3xl font-serif sticky top-32">The Problem</h2>
                            </div>
                            <div className="md:col-span-8 space-y-8">
                                <p className="text-xl leading-relaxed text-gray-700">
                                    Voice assistants (Siri/Alexa) are audibly intelligent but visually "blind." When we try to give them faces, they fall into the <strong>Uncanny Valley</strong>—they look robotic, display "dead eyes," and lack genuine emotional reactivity.
                                </p>
                                <div className="bg-accent-pink/10 p-8 rounded-2xl border border-accent-pink/20">
                                    <p className="text-xl font-serif italic text-gray-800">
                                        "A therapist avatar cannot help a patient if it looks like a glitchy robot."
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">The Design Challenge</h3>
                                    <p className="text-lg text-gray-600">
                                        How might we engineer a generative system that doesn't just "lip-sync" audio, but actually performs emotion to create a genuine human connection?
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* The Approach */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h2 className="text-3xl font-serif sticky top-32">The Approach</h2>
                            </div>
                            <div className="md:col-span-8 space-y-12">
                                <p className="text-xl leading-relaxed text-gray-700">
                                    My approach was not just to stack neural networks, but to treat algorithmic failures as <strong>User Experience (UX) bugs</strong>. I identified three critical "Trust Breakers" and engineered specific technical solutions.
                                </p>

                                <div className="space-y-8">
                                    <div className="group">
                                        <h3 className="text-2xl font-serif mb-4 group-hover:text-accent-blue transition-colors">Intervention A: Fixing the "Dead Eye" Stare</h3>
                                        <p className="text-gray-600 mb-2"><strong>The UX Friction:</strong> Standard GANs ignore eye movement, creating a "zombie-like" stare.</p>
                                        <p className="text-gray-800"><strong>The Engineering Solution:</strong> Integrated MTCNN to isolate the eye region and devised a specific Eye Loss Function to penalize gaze drift.</p>
                                    </div>
                                    <hr className="border-gray-100" />
                                    <div className="group">
                                        <h3 className="text-2xl font-serif mb-4 group-hover:text-accent-blue transition-colors">Intervention B: Solving "Blurry Trust"</h3>
                                        <p className="text-gray-600 mb-2"><strong>The UX Friction:</strong> Low-res 128px output signals "low quality."</p>
                                        <p className="text-gray-800"><strong>The Engineering Solution:</strong> Engineered a post-processing pipeline using BSRGAN to upscale to crisp 512x512 video.</p>
                                    </div>
                                    <hr className="border-gray-100" />
                                    <div className="group">
                                        <h3 className="text-2xl font-serif mb-4 group-hover:text-accent-blue transition-colors">Intervention C: Emotional Nuance</h3>
                                        <p className="text-gray-600 mb-2"><strong>The UX Friction:</strong> Models confuse subtle emotions.</p>
                                        <p className="text-gray-800"><strong>The Engineering Solution:</strong> Embedded Squeeze-and-Excitation (SE) Networks to allow the AI to "pay attention" to mouth curves and brow furrows.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* The Process (Workflow Image) */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h2 className="text-3xl font-serif sticky top-32">The Process</h2>
                            </div>
                            <div className="md:col-span-8">
                                <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-lg mb-8">
                                    <img
                                        src="/workflow.jpg"
                                        alt="EmoteGAN Design Workflow"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-lg text-gray-700">
                                    The architecture decouples "Identity" from "Emotion," allowing us to drive the same face with different emotional states (Anger, Happiness, Fear) using only voice intensity.
                                </p>
                            </div>
                        </section>

                        {/* Validation */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h2 className="text-3xl font-serif sticky top-32">Validation</h2>
                            </div>
                            <div className="md:col-span-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="p-8 bg-black text-white rounded-2xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/20 rounded-full blur-3xl"></div>
                                        <div className="relative z-10">
                                            <div className="text-5xl font-bold text-accent-green mb-2">86.8%</div>
                                            <div className="text-lg font-medium mb-4">Reduction in FID Score</div>
                                            <p className="text-sm text-gray-400">Proves generated images are statistically indistinguishable from real photos.</p>
                                        </div>
                                    </div>
                                    <div className="p-8 bg-black text-white rounded-2xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-yellow/20 rounded-full blur-3xl"></div>
                                        <div className="relative z-10">
                                            <div className="text-5xl font-bold text-accent-yellow mb-2">79.3%</div>
                                            <div className="text-lg font-medium mb-4">Rated "Realistic"</div>
                                            <p className="text-sm text-gray-400">Compared to only 18% for the baseline model in user studies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Impact */}
                        <section className="bg-accent-yellow/10 rounded-3xl p-12 text-center">
                            <h2 className="text-3xl font-serif mb-6">Reflection & Impact</h2>
                            <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
                                This project bridged the gap between backend logic and frontend experience. It demonstrated that "Empathy" in AI isn't magic—it's a series of intentional engineering decisions.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <span className="bg-white px-6 py-3 rounded-full font-medium border border-gray-200 shadow-sm">Digital Therapy</span>
                                <span className="bg-white px-6 py-3 rounded-full font-medium border border-gray-200 shadow-sm">Accessible Content</span>
                                <span className="bg-white px-6 py-3 rounded-full font-medium border border-gray-200 shadow-sm">Human-AI Interaction</span>
                            </div>
                        </section>

                    </div>
                </div>
            </main>
        </div>
    );
};
