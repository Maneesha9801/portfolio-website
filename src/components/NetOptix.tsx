import React from 'react';
import { Network, Router, Activity } from 'lucide-react';

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
                <div className="container mx-auto max-w-[90rem]">
                    {/* Hero Section */}
                    <header className="mb-20 max-w-5xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-serif mb-8 relative inline-block">
                            NetOptix
                            <span className="absolute -bottom-2 left-0 w-full h-4 bg-accent-green -z-10 transform rotate-1 opacity-50"></span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed">
                            Visualizing Invisible Infrastructure: Reducing cognitive load in network debugging by transforming abstract CLI logs into a live, spatial topology.
                        </p>
                    </header>

                    {/* Project Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border-y border-gray-200 py-12 max-w-5xl mx-auto">
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
                            <p className="text-lg">2 Day Ribbon Technothon</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {['C/C++', 'React', 'OSI Model Layer', 'MPLS', 'Layer 2', 'Layer 3 Networks'].map(tech => (
                                    <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Project Demo */}
                    <section className="mb-20">
                        <div className="rounded-2xl overflow-hidden bg-white max-w-4xl mx-auto h-[600px]">
                            <iframe
                                src={`${import.meta.env.BASE_URL}netoptix-sim.html`}
                                title="NetOptix Simulation"
                                className="w-full h-full border-0"
                            />
                        </div>
                        <div className="flex flex-col items-center mt-4 gap-2">
                            <p className="text-center text-gray-500 text-sm font-mono">
                                Live topology visualization with real-time traffic health indicators.
                            </p>
                            <p className="text-xs text-gray-400">
                                Source: Live Interactive Simulation | <a href="https://github.com/Maneesha9801/netoptix" target="_blank" rel="noopener noreferrer" className="hover:text-black underline">View on GitHub</a>
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                Note: The actual working product mentioned is currently being used in the company as a debugging tool.
                            </p>
                        </div>
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
                                    Network Engineering often feels stuck in a terminal-first world. At Ribbon Communications, I commonly faced a critical invisibility problem: routing protocols when configured without traffic engineering blindly prefer the 'Shortest Path' metric, often flooding a single link while alternative, higher-cost paths sit idle. When such issues were raised, diagnosing this congestion was a very exhausting process. It required SSH-ing into dozens of disjointed nodes, parsing thousands of lines of monochrome CLI logs, and manually correlating asynchronous timestamps to understand what was going on in the network. Essentially, I was forced to mentally render a complex, dynamic topology inside my head because the tools offered no visual spatial awareness.
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
                                    <h3 className="text-2xl font-serif font-medium text-[#7b8064] mb-4">The Setup</h3>
                                    <p className="text-[#5d5d5d] leading-relaxed mb-6">
                                        The visualization will directly reflect the logs shared by the tester/reporter.
                                    </p>
                                    <ul className="space-y-3 font-mono text-sm text-[#5d5d5d] bg-[#f9fdf5] p-6 rounded-xl border border-[#C3C7A6]">
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-[#C3C7A6] rounded-full"></span>
                                            IGP = ISIS ML
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-[#9ab0d6] rounded-full"></span>
                                            Topology includes Multiple flex algo slices
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-[#D7C59F] rounded-full"></span>
                                            ISIS FRR - Ti-LFA enabled
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-[#7b8064] rounded-full"></span>
                                            BFD configured = 10*3
                                        </li>
                                    </ul>
                                </div>

                                {/* UX Research Cards Section */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-serif font-medium text-[#7b8064]">UX Research: Topology Cards</h3>
                                    <p className="text-[#5d5d5d] leading-relaxed">
                                        I also designed a UI framework for network operators to always get a quick health summary of the topology based on the terminal logs, that will be updated on a live basis.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#EEF1DE] p-6 rounded-2xl border border-[#C3C7A6]">
                                        {/* Card 1: TechnoCore */}
                                        <div className="bg-white p-5 rounded-xl shadow-sm border border-[#D9E4E0] hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="flex gap-3 items-center">
                                                    <div className="p-2 bg-[#EEF1DE] rounded-lg text-[#7b8064]">
                                                        <Network size={20} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-[#5d5d5d] text-sm">TechnoCore</h4>
                                                        <span className="text-xs text-[#888]">Deployment</span>
                                                    </div>
                                                </div>
                                                <div className="text-[#C3C7A6]">•••</div>
                                            </div>

                                            {/* Mini Topology */}
                                            <div className="flex justify-center items-center gap-2 mb-8 relative h-16">
                                                <div className="w-8 h-8 rounded-full bg-[#E9ECCF] text-[#7b8064] flex items-center justify-center z-10"><Router size={14} /></div>
                                                <div className="w-12 h-0.5 bg-[#D9E4E0] absolute"></div>
                                                <div className="w-8 h-8 rounded-full bg-[#F1F0C8] text-[#D7C59F] flex items-center justify-center z-10"><Activity size={14} /></div>
                                                <div className="w-8 h-8 rounded-full bg-[#D9E4E0] text-[#5d5d5d] flex items-center justify-center z-10 ml-8"><Network size={14} /></div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-2 text-center mb-6">
                                                <div>
                                                    <div className="text-lg font-bold text-[#5d5d5d]">10</div>
                                                    <div className="text-[10px] text-[#888] uppercase tracking-wide">Security</div>
                                                </div>
                                                <div>
                                                    <div className="text-lg font-bold text-[#5d5d5d]">16</div>
                                                    <div className="text-[10px] text-[#888] uppercase tracking-wide">Switching</div>
                                                </div>
                                                <div>
                                                    <div className="text-lg font-bold text-[#5d5d5d]">4</div>
                                                    <div className="text-[10px] text-[#888] uppercase tracking-wide">SD-WAN</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#7b8064] bg-[#E9ECCF] py-2 rounded-lg">
                                                <div className="w-2 h-2 bg-[#7b8064] rounded-full"></div>
                                                51 Sites Synced
                                            </div>
                                        </div>

                                        {/* Card 2: Hyperion */}
                                        <div className="bg-white p-5 rounded-xl shadow-sm border border-[#D9E4E0] hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="flex gap-3 items-center">
                                                    <div className="p-2 bg-[#EEF1DE] rounded-lg text-[#7b8064]">
                                                        <Network size={20} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-[#5d5d5d] text-sm">Hyperion</h4>
                                                        <span className="text-xs text-[#888]">WorldWeb</span>
                                                    </div>
                                                </div>
                                                <div className="px-2 py-0.5 bg-[#F1F0C8] text-[#D7C59F] text-[10px] font-bold rounded uppercase">Updated</div>
                                            </div>

                                            {/* Mini Topology */}
                                            <div className="flex justify-center items-center gap-2 mb-8 relative h-16">
                                                <div className="w-8 h-8 rounded-full bg-[#E9ECCF] text-[#7b8064] flex items-center justify-center z-10"><Router size={14} /></div>
                                                <div className="w-12 h-0.5 bg-[#D9E4E0] absolute"></div>
                                                <div className="w-8 h-8 rounded-full bg-[#D7C59F] text-white flex items-center justify-center z-10"><Activity size={14} /></div>
                                                <div className="w-8 h-8 rounded-full bg-[#D9E4E0] text-[#5d5d5d] flex items-center justify-center z-10 ml-8"><Network size={14} /></div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-2 text-center mb-6">
                                                <div>
                                                    <div className="text-lg font-bold text-[#5d5d5d]">1</div>
                                                    <div className="text-[10px] text-[#888] uppercase tracking-wide">Security</div>
                                                </div>
                                                <div>
                                                    <div className="text-lg font-bold text-[#5d5d5d]">2</div>
                                                    <div className="text-[10px] text-[#888] uppercase tracking-wide">Switching</div>
                                                </div>
                                                <div>
                                                    <div className="text-lg font-bold text-[#5d5d5d]">3</div>
                                                    <div className="text-[10px] text-[#888] uppercase tracking-wide">SD-WAN</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#D7C59F] bg-[#F1F0C8] py-2 rounded-lg">
                                                <div className="w-2 h-2 bg-[#D7C59F] rounded-full animate-pulse"></div>
                                                145 Sites Out-of-Sync
                                            </div>
                                        </div>

                                        {/* Card 3: Hegemony */}
                                        <div className="bg-white p-5 rounded-xl shadow-sm border border-[#D9E4E0] hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="flex gap-3 items-center">
                                                    <div className="p-2 bg-[#EEF1DE] rounded-lg text-[#7b8064]">
                                                        <Network size={20} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-[#5d5d5d] text-sm">Hegemony</h4>
                                                        <span className="text-xs text-[#888]">Colony Sites</span>
                                                    </div>
                                                </div>
                                                <div className="px-2 py-0.5 bg-[#E9ECCF] text-[#7b8064] text-[10px] font-bold rounded uppercase">New</div>
                                            </div>

                                            {/* Mini Topology */}
                                            <div className="flex justify-center items-center gap-2 mb-8 relative h-16">
                                                <div className="w-12 h-12 rounded-full bg-[#F1F0C8] text-[#D7C59F] flex items-center justify-center z-10 shadow-sm border-4 border-white"><Activity size={24} /></div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-2 text-center mb-6">
                                                <div>
                                                    <div className="text-lg font-bold text-[#5d5d5d]">19</div>
                                                    <div className="text-[10px] text-[#888] uppercase tracking-wide">Security</div>
                                                </div>
                                                <div>
                                                    <div className="text-lg font-bold text-[#5d5d5d]">8</div>
                                                    <div className="text-[10px] text-[#888] uppercase tracking-wide">Switching</div>
                                                </div>
                                                <div>
                                                    <div className="text-lg font-bold text-[#5d5d5d]">12</div>
                                                    <div className="text-[10px] text-[#888] uppercase tracking-wide">SD-WAN</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#9ab0d6] bg-[#eef3fa] py-2 rounded-lg">
                                                <div className="w-2 h-2 bg-[#9ab0d6] rounded-full animate-spin"></div>
                                                79 Sites Syncing
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="space-y-12">

                                    <p className="text-lg text-[#5d5d5d] mb-8">
                                        I designed this tool as a translation layer between machine protocols and human perception. The goal was to shift the user's cognitive mode from "Reading & Memorizing" (System 2 thinking) to "Seeing & Reacting" (System 1 thinking).
                                    </p>

                                    <div className="group border-l-2 border-[#D9E4E0] pl-6 hover:border-[#9ab0d6] transition-colors">
                                        <h3 className="text-2xl font-serif mb-4 text-[#7b8064] group-hover:text-[#9ab0d6] transition-colors">Intervention A: Logic-First Topology (The Overview)</h3>
                                        <p className="text-[#5d5d5d] mb-2"><strong>The UX Decision:</strong> Physical maps create noise. I designed a Logical Topology that spatially groups nodes by their routing hierarchy (ISIS Level 1 Aggregation vs. Level 2 Core).</p>
                                        <p className="text-[#5d5d5d] mb-2"><strong>The Engineering:</strong> I utilized Flex Algorithms to color-code paths based on intent (e.g., Green = Low Latency, Blue = IGP Metric), allowing engineers to distinguish "Core Traffic" from "Edge Traffic" instantly.</p>
                                        <p className="text-[#7b8064] font-medium"><strong>The Outcome:</strong> Instant architectural awareness. The user understands the network's behavior, not just its wiring.</p>
                                    </div>

                                    <div className="group border-l-2 border-[#D9E4E0] pl-6 hover:border-[#D7C59F] transition-colors">
                                        <h3 className="text-2xl font-serif mb-4 text-[#7b8064] group-hover:text-[#D7C59F] transition-colors">Intervention B: Visualizing Stress (The Feedback)</h3>
                                        <p className="text-[#5d5d5d] mb-2"><strong>The UX Decision:</strong> I replaced static lines with Biomimetic Interfaces. Healthy links are thin and stable; congested links physically thicken and pulse, mimicking inflammation in a biological system.</p>
                                        <p className="text-[#5d5d5d] mb-2"><strong>The Engineering:</strong> I implemented a physics-based congestion engine where Utilization &gt; 100% triggers a "Stress Animation" and visually slows packet velocity to represent latency.</p>
                                        <p className="text-[#7b8064] font-medium"><strong>The Outcome:</strong> Pre-attentive processing. The user spots the bottleneck in &lt;200ms—before they even read the data.</p>
                                    </div>

                                    <div className="group border-l-2 border-[#D9E4E0] pl-6 hover:border-[#C3C7A6] transition-colors">
                                        <h3 className="text-2xl font-serif mb-4 text-[#7b8064] group-hover:text-[#C3C7A6] transition-colors">Intervention C: Contextual Reconstruction (The Details)</h3>
                                        <p className="text-[#5d5d5d] mb-2"><strong>The UX Decision:</strong> Raw CLI configs are overwhelming but necessary for validation. Instead of dumping static logs, I built a "Just-in-Time" information architecture.</p>
                                        <p className="text-[#5d5d5d] mb-2"><strong>The Engineering:</strong> I built a parser that dynamically reconstructs the specific router configuration and CLI commands (e.g., set protocols isis...) based on the node's active role, accessible via a context menu.</p>
                                        <p className="text-[#7b8064] font-medium mb-6"><strong>The Outcome:</strong> The full power of the terminal is preserved but scoped. Visual noise is reduced by 90%, keeping the canvas clean for decision-making.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                            <div className="rounded-xl overflow-hidden border border-[#D9E4E0] shadow-sm">
                                                <img
                                                    src={`${import.meta.env.BASE_URL}netoptix-topology-guide.png`}
                                                    alt="Network Topology & Flex Algo Guide"
                                                    className="w-full h-auto"
                                                />
                                                <p className="text-xs text-[#888] p-2 bg-[#f9fdf5] text-center border-t border-[#D9E4E0]">Topology Guide</p>
                                            </div>
                                            <div className="rounded-xl overflow-hidden border border-[#D9E4E0] shadow-sm">
                                                <img
                                                    src={`${import.meta.env.BASE_URL}netoptix-config-modal.png`}
                                                    alt="Router Configuration Modal"
                                                    className="w-full h-auto"
                                                />
                                                <p className="text-xs text-[#888] p-2 bg-[#f9fdf5] text-center border-t border-[#D9E4E0]">Contextual Config</p>
                                            </div>
                                        </div>
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
                                            <div className="text-4xl font-bold text-[#C3C7A6] mb-2 font-serif">40%</div>
                                            <div className="font-bold text-gray-800 mb-1">Faster Diagnosis</div>
                                            <p className="text-sm text-gray-500">Reduced time-to-diagnosis from ~15 mins to ~9 mins.</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                            <div className="text-4xl font-bold text-[#9ab0d6] mb-2 font-serif">3x</div>
                                            <div className="font-bold text-gray-800 mb-1">Fewer Errors</div>
                                            <p className="text-sm text-gray-500">Junior engineers made significantly fewer mistakes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </main>
        </div>
    );
};
