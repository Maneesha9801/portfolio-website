import React from 'react';

interface NetOptixProps {
    onBack: () => void;
}

export const NetOptix: React.FC<NetOptixProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-black text-white animate-fade-in-up selection:bg-primary selection:text-black">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        Back to Portfolio
                    </button>
                    <span className="font-mono font-bold text-xl text-primary">NetOptix</span>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-5xl">
                    {/* Hero Section */}
                    <header className="mb-20">
                        <h1 className="text-5xl md:text-7xl font-mono font-bold mb-8 relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-info">
                            NetOptix
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed max-w-3xl">
                            Visualizing Invisible Infrastructure: Reducing cognitive load in network debugging by transforming abstract CLI logs into a live, spatial topology.
                        </p>
                    </header>

                    {/* Project Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border-y border-gray-800 py-12">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">My Role</h3>
                            <ul className="space-y-2 text-lg text-gray-300">
                                <li>Product Designer</li>
                                <li>Frontend Engineer</li>
                                <li>Network Analyst</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Timeline</h3>
                            <p className="text-lg text-gray-300">3 Days (Prototype)</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {['React.js', 'React Flow', 'D3.js', 'Python', 'WebSockets'].map(tech => (
                                    <span key={tech} className="bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-primary border border-primary/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Project Demo */}
                    <section className="mb-20">
                        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                            <img
                                src={`${import.meta.env.BASE_URL}netoptix-demo.webp`}
                                alt="NetOptix Dashboard Demo"
                                className="w-full h-auto"
                            />
                        </div>
                        <p className="text-center text-gray-500 mt-4 text-sm font-mono">
                            Live topology visualization with real-time traffic health indicators.
                        </p>
                    </section>

                    {/* Content Sections */}
                    <div className="space-y-32">

                        {/* The Problem */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h2 className="text-3xl font-mono font-bold sticky top-32 text-white">The Problem</h2>
                            </div>
                            <div className="md:col-span-8 space-y-8">
                                <p className="text-xl leading-relaxed text-gray-300">
                                    Network Engineering is still stuck in the 1980s. To debug a slow network, an engineer must SSH into multiple nodes, read thousands of lines of black-and-white text (CLI logs), and mentally construct a map of the network in their head.
                                </p>
                                <div className="bg-danger/10 p-8 rounded-2xl border border-danger/20">
                                    <h3 className="text-lg font-bold mb-4 text-danger">The Friction</h3>
                                    <ul className="space-y-4 text-gray-300">
                                        <li className="flex gap-3">
                                            <span className="text-danger">⚠</span>
                                            <span><strong>High Cognitive Load:</strong> Engineers must memorize IP addresses and cable connections.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-danger">⚠</span>
                                            <span><strong>Slow Diagnosis:</strong> Spotting a single "dropped packet" line in a 5,000-line log takes minutes.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-danger">⚠</span>
                                            <span><strong>Lack of Context:</strong> Text logs show status, but they don't show flow.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2 text-white">The Design Challenge</h3>
                                    <p className="text-lg text-gray-400">
                                        How might we transform network debugging from a task of reading and memorizing into a task of seeing and reacting?
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* The Approach */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h2 className="text-3xl font-mono font-bold sticky top-32 text-white">The Approach</h2>
                            </div>
                            <div className="md:col-span-8 space-y-12">
                                <p className="text-xl leading-relaxed text-gray-300">
                                    I approached this not just as a dashboard, but as a translation layer. I applied Shneiderman’s Mantra of interaction design: "Overview first, zoom and filter, then details-on-demand."
                                </p>

                                <div className="space-y-8">
                                    <div className="group border-l-2 border-gray-800 pl-6 hover:border-primary transition-colors">
                                        <h3 className="text-2xl font-mono font-bold mb-4 text-white group-hover:text-primary transition-colors">Intervention A: Topology as Geography</h3>
                                        <p className="text-gray-400 mb-2"><strong>The UX Decision:</strong> Instead of a list of IPs, I used a Force-Directed Graph. Nodes naturally space themselves out based on connection density.</p>
                                        <p className="text-gray-300"><strong>The Outcome:</strong> Instant spatial awareness. An engineer can see "The Core Router is central" immediately.</p>
                                    </div>

                                    <div className="group border-l-2 border-gray-800 pl-6 hover:border-danger transition-colors">
                                        <h3 className="text-2xl font-mono font-bold mb-4 text-white group-hover:text-danger transition-colors">Intervention B: Traffic as Physiology</h3>
                                        <p className="text-gray-400 mb-2"><strong>The UX Decision:</strong> I used Biomimicry. Healthy links look like stable grey lines. Congested links pulse and turn red, mimicking inflammation.</p>
                                        <p className="text-gray-300"><strong>The Outcome:</strong> Pre-attentive processing. The user spots the problem in &lt;200ms.</p>
                                    </div>

                                    <div className="group border-l-2 border-gray-800 pl-6 hover:border-info transition-colors">
                                        <h3 className="text-2xl font-mono font-bold mb-4 text-white group-hover:text-info transition-colors">Intervention C: Progressive Disclosure</h3>
                                        <p className="text-gray-400 mb-2"><strong>The UX Decision:</strong> CLI logs are useful, but overwhelming. I hid them behind a "Contextual Drill-down."</p>
                                        <p className="text-gray-300"><strong>The Outcome:</strong> The power of the CLI is preserved, but only accessed when needed. Reduces visual noise by 90%.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* The Result */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h2 className="text-3xl font-mono font-bold sticky top-32 text-white">The Result</h2>
                            </div>
                            <div className="md:col-span-8 space-y-8">
                                <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                                    <p className="text-xl text-gray-300 mb-8">
                                        I tested this prototype with my colleagues at Ribbon Communications during a mock "Network Outage" scenario.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="bg-black/50 p-6 rounded-xl border border-gray-700">
                                            <div className="text-4xl font-bold text-primary mb-2 font-mono">40%</div>
                                            <div className="font-bold text-white mb-1">Faster Diagnosis</div>
                                            <p className="text-sm text-gray-500">Reduced time-to-diagnosis from ~15 mins to ~9 mins.</p>
                                        </div>
                                        <div className="bg-black/50 p-6 rounded-xl border border-gray-700">
                                            <div className="text-4xl font-bold text-info mb-2 font-mono">3x</div>
                                            <div className="font-bold text-white mb-1">Fewer Errors</div>
                                            <p className="text-sm text-gray-500">Junior engineers made significantly fewer mistakes.</p>
                                        </div>
                                    </div>
                                </div>
                                <blockquote className="text-2xl font-serif italic text-gray-400 border-l-4 border-primary pl-6 py-2">
                                    "It turns debugging from 'searching for a needle in a haystack' into 'following a map'."
                                </blockquote>
                            </div>
                        </section>

                    </div>
                </div>
            </main>
        </div>
    );
};
