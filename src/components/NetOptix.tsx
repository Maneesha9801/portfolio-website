import React from 'react';

interface NetOptixProps {
    onBack: () => void;
}

export const NetOptix: React.FC<NetOptixProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-paper animate-fade-in-up selection:bg-accent-yellow selection:text-black">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        Back to Portfolio
                    </button>
                    <span className="font-serif font-bold text-xl">NetOptix</span>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-5xl">
                    {/* Hero Section */}
                    <header className="mb-20">
                        <h1 className="text-5xl md:text-7xl font-serif mb-8 relative inline-block">
                            NetOptix
                            <span className="absolute -bottom-2 left-0 w-full h-4 bg-accent-green -z-10 transform rotate-1 opacity-50"></span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed max-w-3xl">
                            Visualizing Invisible Infrastructure: Reducing cognitive load in network debugging by transforming abstract CLI logs into a live, spatial topology.
                        </p>
                    </header>

                    {/* Project Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border-y border-gray-200 py-12">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">My Role</h3>
                            <ul className="space-y-2 text-lg">
                                <li>Product Designer</li>
                                <li>Frontend Engineer</li>
                                <li>Network Analyst</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Timeline</h3>
                            <p className="text-lg">3 Days (Prototype)</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {['React.js', 'React Flow', 'D3.js', 'Python', 'WebSockets'].map(tech => (
                                    <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
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
                                src={`${import.meta.env.BASE_URL}netoptix-demo.png`}
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
                                <h2 className="text-3xl font-serif sticky top-32">The Problem</h2>
                            </div>
                            <div className="md:col-span-8 space-y-8">
                                <p className="text-xl leading-relaxed text-gray-700">
                                    Network Engineering is still stuck in the 1980s. To debug a slow network, an engineer must SSH into multiple nodes, read thousands of lines of black-and-white text (CLI logs), and mentally construct a map of the network in their head.
                                </p>
                                <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                                    <h3 className="text-lg font-bold mb-4 text-red-600">The Friction</h3>
                                    <ul className="space-y-4 text-gray-700">
                                        <li className="flex gap-3">
                                            <span className="text-red-500">⚠</span>
                                            <span><strong>High Cognitive Load:</strong> Engineers must memorize IP addresses and cable connections.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-red-500">⚠</span>
                                            <span><strong>Slow Diagnosis:</strong> Spotting a single "dropped packet" line in a 5,000-line log takes minutes.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-red-500">⚠</span>
                                            <span><strong>Lack of Context:</strong> Text logs show status, but they don't show flow.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">The Design Challenge</h3>
                                    <p className="text-lg text-gray-600">
                                        How might we transform network debugging from a task of reading and memorizing into a task of seeing and reacting?
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
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <h3 className="text-2xl font-serif font-medium text-slate-800 mb-4">The Setup</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        The visualization is built on a robust network configuration designed for high availability and traffic engineering:
                                    </p>
                                    <ul className="space-y-3 font-mono text-sm text-slate-600 bg-slate-50 p-6 rounded-xl border border-slate-200">
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                            IGP = ISIS ML
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                            Topology includes Multiple flex algo slices
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                            ISIS FRR - Ti-LFA enabled
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                            BFD configured = 10*3
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-xl leading-relaxed text-gray-700">
                                    I approached this not just as a dashboard, but as a translation layer. I applied Shneiderman’s Mantra of interaction design: "Overview first, zoom and filter, then details-on-demand."
                                </p>

                                <div className="space-y-8">
                                    <div className="group border-l-2 border-gray-200 pl-6 hover:border-accent-blue transition-colors">
                                        <h3 className="text-2xl font-serif mb-4 group-hover:text-accent-blue transition-colors">Intervention A: Topology as Geography</h3>
                                        <p className="text-gray-600 mb-2"><strong>The UX Decision:</strong> Instead of a list of IPs, I used a Force-Directed Graph. Nodes naturally space themselves out based on connection density.</p>
                                        <p className="text-gray-800"><strong>The Outcome:</strong> Instant spatial awareness. An engineer can see "The Core Router is central" immediately.</p>
                                    </div>

                                    <div className="group border-l-2 border-gray-200 pl-6 hover:border-red-500 transition-colors">
                                        <h3 className="text-2xl font-serif mb-4 group-hover:text-red-500 transition-colors">Intervention B: Traffic as Physiology</h3>
                                        <p className="text-gray-600 mb-2"><strong>The UX Decision:</strong> I used Biomimicry. Healthy links look like stable grey lines. Congested links pulse and turn red, mimicking inflammation.</p>
                                        <p className="text-gray-800"><strong>The Outcome:</strong> Pre-attentive processing. The user spots the problem in &lt;200ms.</p>
                                    </div>

                                    <div className="group border-l-2 border-gray-200 pl-6 hover:border-accent-green transition-colors">
                                        <h3 className="text-2xl font-serif mb-4 group-hover:text-accent-green transition-colors">Intervention C: Progressive Disclosure</h3>
                                        <p className="text-gray-600 mb-2"><strong>The UX Decision:</strong> CLI logs are useful, but overwhelming. I hid them behind a "Contextual Drill-down."</p>
                                        <p className="text-gray-800"><strong>The Outcome:</strong> The power of the CLI is preserved, but only accessed when needed. Reduces visual noise by 90%.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* The Result */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h2 className="text-3xl font-serif sticky top-32">The Result</h2>
                            </div>
                            <div className="md:col-span-8 space-y-8">
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                                    <p className="text-xl text-gray-700 mb-8">
                                        I tested this prototype with my colleagues at Ribbon Communications during a mock "Network Outage" scenario.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                            <div className="text-4xl font-bold text-accent-green mb-2 font-serif">40%</div>
                                            <div className="font-bold text-gray-800 mb-1">Faster Diagnosis</div>
                                            <p className="text-sm text-gray-500">Reduced time-to-diagnosis from ~15 mins to ~9 mins.</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                            <div className="text-4xl font-bold text-accent-blue mb-2 font-serif">3x</div>
                                            <div className="font-bold text-gray-800 mb-1">Fewer Errors</div>
                                            <p className="text-sm text-gray-500">Junior engineers made significantly fewer mistakes.</p>
                                        </div>
                                    </div>
                                </div>
                                <blockquote className="text-2xl font-serif italic text-gray-600 border-l-4 border-accent-green pl-6 py-2">
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
