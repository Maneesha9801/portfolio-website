import { useState } from 'react';
import { Wifi, CheckCircle, ArrowRight, Layers, Bell, User, LayoutGrid, Search, ChevronRight, Database, GitBranch, Cpu, Settings } from 'lucide-react';

export const WaySenseDesignBoard = () => {
    const [activeTab, setActiveTab] = useState('matrix');

    return (
        <div className="flex h-[800px] bg-[#F2F0E4] text-[#1A202C] font-sans selection:bg-teal-100 overflow-hidden rounded-xl border border-gray-200 shadow-2xl my-12">

            {/* SIDEBAR DASHBOARD NAVIGATION */}
            <aside className="w-72 bg-[#004D40] text-[#FFFCF0] flex flex-col shadow-2xl z-20 flex-shrink-0 transition-all">
                {/* Brand Area */}
                <div className="h-20 flex items-center px-6 border-b border-[#FFFCF0]/10">
                    <WaySenseAppLogo />
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 py-8 px-4 space-y-2 overflow-y-auto">
                    <div className="px-4 text-xs font-bold text-[#FFFCF0]/40 uppercase tracking-widest mb-2">Project Assets</div>

                    <SidebarButton
                        icon={<LayoutGrid size={18} />}
                        label="Decision Matrix"
                        id="matrix"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                    <SidebarButton
                        icon={<Layers size={18} />}
                        label="Digital Twin Architecture"
                        id="heatmap"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                    <SidebarButton
                        icon={<GitBranch size={18} />}
                        label="System Logic Flow"
                        id="ui"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />

                    <div className="mt-8 px-4 text-xs font-bold text-[#FFFCF0]/40 uppercase tracking-widest mb-2">System Status</div>
                    <div className="mx-4 p-4 bg-[#00382E] rounded-lg border border-[#FFFCF0]/10">
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-[#FFFCF0]/70">Access Points</span>
                            <span className="text-green-400 font-mono">Active</span>
                        </div>
                        <div className="w-full h-1 bg-[#FFFCF0]/10 rounded-full mb-3">
                            <div className="w-full h-full bg-green-400 rounded-full"></div>
                        </div>

                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-[#FFFCF0]/70">Fingerprint DB</span>
                            <span className="text-green-400 font-mono">Synced</span>
                        </div>
                        <div className="w-full h-1 bg-[#FFFCF0]/10 rounded-full">
                            <div className="w-3/4 h-full bg-green-400 rounded-full"></div>
                        </div>
                    </div>
                </nav>

                {/* User Profile Footer */}
                <div className="p-4 border-t border-[#FFFCF0]/10 bg-[#00382E]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#FFFCF0] flex items-center justify-center text-[#004D40] font-bold">
                            SA
                        </div>
                        <div>
                            <div className="text-sm font-bold">System Architect</div>
                            <div className="text-xs text-[#FFFCF0]/50">View Portfolio</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* MAIN DASHBOARD CONTENT */}
            <div className="flex-1 flex flex-col h-full overflow-hidden relative">

                {/* Top Header Bar */}
                <header className="h-20 bg-[#FFFCF0] border-b border-[#004D40]/10 flex items-center px-8 justify-between shadow-sm z-10">
                    <div className="flex items-center gap-2 text-sm text-[#004D40]/60">
                        <span>WaySense Project</span>
                        <ChevronRight size={14} />
                        <span className="font-bold text-[#004D40] bg-[#004D40]/5 px-2 py-1 rounded">
                            {activeTab === 'matrix' && 'Design Research'}
                            {activeTab === 'heatmap' && 'System Architecture'}
                            {activeTab === 'ui' && 'Logic & Algorithms'}
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#004D40]/40" size={16} />
                            <input type="text" placeholder="Search assets..." className="pl-10 pr-4 py-2 bg-white border border-[#004D40]/10 rounded-full text-sm focus:outline-none focus:border-[#004D40]/30 w-64 text-[#004D40]" />
                        </div>
                        <button className="p-2 hover:bg-[#004D40]/5 rounded-full text-[#004D40]">
                            <Bell size={20} />
                        </button>
                        <button className="p-2 hover:bg-[#004D40]/5 rounded-full text-[#004D40]">
                            <Settings size={20} />
                        </button>
                    </div>
                </header>

                {/* Scrollable Canvas Area */}
                <main className="flex-1 overflow-y-auto p-8 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]">
                    <div className="max-w-7xl mx-auto">
                        {activeTab === 'matrix' && <VisualDirective2 />}
                        {activeTab === 'heatmap' && <VisualDirective3 />}
                        {activeTab === 'ui' && <VisualDirective4 />}
                    </div>
                </main>

            </div>
        </div>
    );
};

// Sidebar Button Component
const SidebarButton = ({ icon, label, id, activeTab, setActiveTab }: any) => (
    <button
        onClick={() => setActiveTab(id)}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === id
            ? 'bg-[#FFFCF0] text-[#004D40] shadow-lg transform scale-105'
            : 'text-[#FFFCF0]/70 hover:bg-[#FFFCF0]/10 hover:text-[#FFFCF0]'
            }`}
    >
        {icon}
        <span>{label}</span>
        {activeTab === id && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#004D40]"></div>}
    </button>
);

// --- DIRECTIVE 2: The "Research Wall" (Sticky Note Matrix) ---
const VisualDirective2 = () => {
    return (
        <div className="space-y-6 animate-fade-in-up duration-500">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-2xl font-bold text-[#1A202C]">Engineering Decision Matrix</h2>
                    <p className="text-slate-500 text-sm mt-1">
                        Comparative analysis of positioning technologies for indoor navigation.
                    </p>
                </div>
                <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500">Last Updated: Apr 2023</span>
                </div>
            </div>

            {/* The Research Wall Container */}
            <div className="bg-[#FFFCF0] p-8 rounded-xl shadow-sm border border-[#004D40]/10 min-h-[600px] relative overflow-hidden">
                {/* Corkboard Texture Simulation */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#004D40_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

                    {/* Column 1: BLE (Rejected) */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400 border-b-2 border-slate-200 pb-2 mb-2">Option A: BLE Beacons</h3>

                        <StickyNote color="bg-[#FFD6D6]" rotate="-rotate-1">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-400/30 border border-red-500 shadow-sm"></div>
                            <h4 className="font-bold text-red-800 text-sm mb-2">High Friction</h4>
                            <p className="text-xs text-red-900/80">
                                Requires installing thousands of battery-powered beacons. Maintenance nightmare.
                            </p>
                        </StickyNote>

                        <StickyNote color="bg-[#FFF4BD]" rotate="rotate-2">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-400/30 border border-yellow-500 shadow-sm"></div>
                            <h4 className="font-bold text-yellow-800 text-sm mb-2">Constraint</h4>
                            <p className="text-xs text-yellow-900/80">
                                Requires users to keep Bluetooth ON. High battery drain perception.
                            </p>
                        </StickyNote>

                        <div className="mt-2 text-center">
                            <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full uppercase tracking-wider">Rejected</span>
                        </div>
                    </div>

                    {/* Column 2: Wi-Fi RTT (Rejected) */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400 border-b-2 border-slate-200 pb-2 mb-2">Option B: Wi-Fi RTT</h3>

                        <StickyNote color="bg-[#D6E4FF]" rotate="rotate-1">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400/30 border border-blue-500 shadow-sm"></div>
                            <h4 className="font-bold text-blue-800 text-sm mb-2">Precision</h4>
                            <p className="text-xs text-blue-900/80">
                                Superior 1-2m accuracy using Time-of-Flight. The "perfect" engineering solution.
                            </p>
                        </StickyNote>

                        <StickyNote color="bg-[#FFD6D6]" rotate="-rotate-2">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-400/30 border border-red-500 shadow-sm"></div>
                            <h4 className="font-bold text-red-800 text-sm mb-2">Critical Flaw</h4>
                            <p className="text-xs text-red-900/80">
                                Hardware limitation: Only works on Android 9+ and requires expensive RTT-enabled routers.
                            </p>
                        </StickyNote>

                        <div className="mt-2 text-center">
                            <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full uppercase tracking-wider">Rejected</span>
                        </div>
                    </div>

                    {/* Column 3: WaySense (Selected) */}
                    <div className="flex flex-col gap-4 bg-white/50 -m-4 p-4 rounded-xl border-2 border-dashed border-[#004D40]/20">
                        <h3 className="font-bold text-sm uppercase tracking-wider text-[#004D40] border-b-2 border-[#004D40]/20 pb-2 mb-2 flex items-center gap-2">
                            <CheckCircle size={16} /> Selected: WaySense
                        </h3>

                        <StickyNote color="bg-[#D1FAE5]" rotate="rotate-0">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-green-400/30 border border-green-500 shadow-sm"></div>
                            <h4 className="font-bold text-green-800 text-sm mb-2">Accessibility</h4>
                            <p className="text-xs text-green-900/80">
                                Works on 99% of smartphones. No specific hardware required on the user side.
                            </p>
                        </StickyNote>

                        <StickyNote color="bg-[#D1FAE5]" rotate="rotate-0">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-green-400/30 border border-green-500 shadow-sm"></div>
                            <h4 className="font-bold text-green-800 text-sm mb-2">Infrastructure</h4>
                            <p className="text-xs text-green-900/80">
                                Utilizes existing standard Wi-Fi Access Points. Low implementation cost.
                            </p>
                        </StickyNote>

                        <StickyNote color="bg-[#FFF4BD]" rotate="rotate-1">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-400/30 border border-yellow-500 shadow-sm"></div>
                            <h4 className="font-bold text-yellow-800 text-sm mb-2">Trade-off</h4>
                            <p className="text-xs text-yellow-900/80">
                                ~5m precision. Acceptable for vehicle wayfinding contexts (car size {'>'} 2m).
                            </p>
                        </StickyNote>

                        <div className="mt-auto text-center">
                            <span className="inline-block px-4 py-1.5 bg-[#004D40] text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">Final Choice</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const StickyNote = ({ children, color, rotate }: any) => (
    <div className={`${color} p-5 shadow-lg text-slate-800 transform ${rotate} hover:scale-105 transition-transform duration-200 cursor-default min-h-[140px] relative`}>
        {children}
    </div>
);

// --- DIRECTIVE 3: The "Digital Twin" (Technical Diagram Style) ---
const VisualDirective3 = () => {
    return (
        <div className="space-y-6 animate-fade-in-up duration-500">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-2xl font-bold text-[#1A202C]">The Digital Twin Architecture</h2>
                    <p className="text-slate-500 text-sm mt-1">
                        Visualizing the "Invisible Map": Signal fingerprinting to coordinate translation.
                    </p>
                </div>
            </div>

            {/* Diagram Container - Styled like the 'Product Development' flowcharts */}
            <div className="bg-white p-1 rounded-xl shadow-sm border border-[#004D40]/10">
                <div className="bg-[#FFFBEB] p-8 rounded-lg min-h-[500px] relative">

                    {/* Sidebar Label */}
                    <div className="absolute left-0 top-10 bottom-10 w-12 bg-[#004D40] rounded-r-lg flex items-center justify-center text-white writing-mode-vertical transform rotate-180 font-bold tracking-widest text-sm shadow-lg">
                        <span style={{ writingMode: 'vertical-rl' }}>DATA PROCESSING LAYER</span>
                    </div>

                    <div className="ml-16 grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">

                        {/* Left Side: The "Invisible" Signal Map */}
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-[#004D40] font-bold uppercase text-sm tracking-wider">Input: Raw Signal Fingerprints</h3>
                                <div className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded font-mono">NOISY DATA</div>
                            </div>

                            <div className="flex-grow bg-white border-2 border-[#004D40]/20 rounded-lg p-4 relative overflow-hidden h-96 shadow-inner">
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-200 via-transparent to-transparent"></div>

                                {/* Grid */}
                                <div className="grid grid-cols-6 grid-rows-6 gap-2 h-full w-full">
                                    {[...Array(36)].map((_, i) => (
                                        <div key={i} className="border border-slate-100 bg-slate-50/50 flex items-center justify-center text-[8px] text-slate-300 font-mono transition-all duration-1000">
                                            {Math.floor(Math.random() * -40) - 50}dB
                                        </div>
                                    ))}
                                </div>

                                {/* Heatmap Blobs */}
                                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/30 rounded-full blur-xl animate-pulse"></div>
                                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/30 rounded-full blur-xl animate-pulse delay-75"></div>

                                {/* Floating Label */}
                                <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 text-[10px] font-mono text-slate-500 border border-slate-200 shadow-sm rounded">
                                    RSSI: Fluctuating
                                </div>
                            </div>
                        </div>

                        {/* Right Side: The "Visible" Coordinate Map */}
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-[#004D40] font-bold uppercase text-sm tracking-wider">Output: Navigable Grid</h3>
                                <div className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded font-mono">NORMALIZED</div>
                            </div>

                            <div className="flex-grow bg-[#E6FFFA] border-2 border-[#004D40] rounded-lg p-6 relative h-96 shadow-md">

                                {/* Floor Plan */}
                                <div className="absolute inset-4 border-2 border-[#004D40]/30 rounded flex flex-col bg-white/50">
                                    {/* Parking Spots */}
                                    <div className="h-20 border-b border-[#004D40]/30 flex">
                                        <div className="flex-1 border-r border-[#004D40]/30 flex items-center justify-center text-[#004D40]/50 font-bold">A1</div>
                                        <div className="flex-1 border-r border-[#004D40]/30 flex items-center justify-center text-[#004D40]/50 font-bold">A2</div>
                                        <div className="flex-1 flex items-center justify-center text-[#004D40]/50 font-bold">A3</div>
                                    </div>

                                    {/* Driveway */}
                                    <div className="flex-1 flex items-center justify-center text-[10px] text-[#004D40]/30 tracking-[1em] font-bold opacity-30 rotate-90 lg:rotate-0">
                                        DRIVEWAY
                                    </div>

                                    <div className="mt-auto h-20 border-t border-[#004D40]/30 flex">
                                        <div className="flex-1 border-r border-[#004D40]/30 flex items-center justify-center text-[#004D40]/50 font-bold">B1</div>
                                        <div className="flex-1 border-r border-[#004D40]/30 flex items-center justify-center text-[#004D40]/50 font-bold">B2</div>
                                        <div className="flex-1 flex items-center justify-center text-[#004D40]/50 font-bold">B3</div>
                                    </div>
                                </div>

                                {/* Car Pin */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                    <div className="w-4 h-4 bg-[#004D40] rounded-full ring-4 ring-[#004D40]/30 animate-ping absolute"></div>
                                    <div className="w-4 h-4 bg-[#004D40] rounded-full relative z-10 shadow-lg border-2 border-white"></div>
                                    <div className="mt-2 bg-white px-3 py-1.5 rounded-lg shadow-lg text-[10px] font-bold text-[#004D40] whitespace-nowrap border border-[#004D40]/20 flex items-center gap-1">
                                        <CheckCircle size={10} />
                                        Spot A2 Assigned
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Connection Arrow */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full border-2 border-[#004D40] z-10 lg:block hidden shadow-xl">
                        <ArrowRight className="text-[#004D40]" size={24} />
                    </div>

                </div>
            </div>
        </div>
    );
};

// --- DIRECTIVE 4: System Logic Flow (Replacing Mobile UX) ---
const VisualDirective4 = () => {
    return (
        <div className="space-y-6 animate-fade-in-up duration-500">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-2xl font-bold text-[#1A202C]">System Logic: Destination-Based Allocation</h2>
                    <p className="text-slate-500 text-sm mt-1">
                        Flowchart illustrating the backend logic for assigning optimal parking based on user destination.
                    </p>
                </div>
            </div>

            <div className="bg-[#FFFBEB] p-12 rounded-xl border border-[#004D40]/10 shadow-inner relative flex justify-center">

                {/* Flowchart Container */}
                <div className="flex flex-col items-center gap-8 relative max-w-2xl w-full">

                    {/* Start Node */}
                    <div className="bg-[#FDBA74] text-[#7C2D12] px-6 py-3 rounded-full font-bold shadow-md border-2 border-[#7C2D12]/10 z-10">
                        User Enters Complex
                    </div>
                    <Arrow />

                    {/* Action Node */}
                    <div className="bg-[#6CB3D3] text-[#0C4A6E] w-64 p-4 rounded-lg shadow-md border-2 border-[#0C4A6E]/10 z-10 text-center relative">
                        <div className="absolute -top-3 -right-3 bg-white p-1 rounded-full shadow border border-slate-100">
                            <User size={16} className="text-[#6CB3D3]" />
                        </div>
                        <h4 className="font-bold text-sm">Input Destination</h4>
                        <p className="text-xs opacity-70 mt-1">e.g. "Nike Store"</p>
                    </div>
                    <Arrow />

                    {/* Decision Node */}
                    <div className="relative z-10">
                        <div className="w-40 h-40 bg-[#F9A8D4] transform rotate-45 shadow-md border-2 border-[#831843]/10 flex items-center justify-center">
                            <div className="transform -rotate-45 text-center text-[#831843]">
                                <h4 className="font-bold text-sm">Lookup Zone Map</h4>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 -mt-4 text-xs font-bold text-slate-400">
                        <ArrowRight className="rotate-90" size={16} />
                    </div>

                    {/* Database Interaction Row */}
                    <div className="flex gap-8 w-full justify-center">
                        {/* Process Node */}
                        <div className="bg-[#6CB3D3] text-[#0C4A6E] flex-1 p-4 rounded-lg shadow-md border-2 border-[#0C4A6E]/10 z-10 text-center flex flex-col items-center gap-2">
                            <div className="flex gap-2">
                                <Database className="text-white/50" size={16} />
                                <span className="font-bold text-sm">Query DBs</span>
                            </div>
                            <p className="text-xs bg-white/20 px-2 py-1 rounded">Find Nearest Exit</p>
                            <p className="text-xs bg-white/20 px-2 py-1 rounded">Check Occupancy</p>
                        </div>

                        {/* Database Icons */}
                        <div className="flex flex-col gap-2">
                            <div className="bg-[#004D40] text-white p-3 rounded-lg shadow-md w-32 text-center text-xs font-mono">
                                Occupancy DB
                            </div>
                            <div className="bg-[#004D40] text-white p-3 rounded-lg shadow-md w-32 text-center text-xs font-mono">
                                Fingerprint DB
                            </div>
                        </div>
                    </div>
                    <Arrow />

                    {/* Decision Node */}
                    <div className="relative z-10">
                        <div className="w-40 h-40 bg-[#F9A8D4] transform rotate-45 shadow-md border-2 border-[#831843]/10 flex items-center justify-center">
                            <div className="transform -rotate-45 text-center text-[#831843]">
                                <h4 className="font-bold text-sm">Spot Available?</h4>
                            </div>
                        </div>

                        {/* No Branch */}
                        <div className="absolute top-1/2 -right-24 transform -translate-y-1/2 flex items-center">
                            <div className="h-0.5 w-12 bg-slate-300"></div>
                            <div className="bg-white border border-slate-200 px-2 py-1 text-xs rounded text-slate-500">No</div>
                            <div className="h-0.5 w-8 bg-slate-300"></div>
                            <div className="bg-slate-100 p-2 rounded text-xs border border-slate-200">Next Zone</div>
                        </div>
                    </div>

                    {/* Yes Branch (Down) */}
                    <div className="flex items-center justify-center gap-2 -mt-4 text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded border border-green-200 z-20">
                        Yes
                    </div>
                    <div className="h-8 w-0.5 bg-slate-300"></div>

                    {/* Action Node */}
                    <div className="bg-[#6CB3D3] text-[#0C4A6E] w-64 p-4 rounded-lg shadow-md border-2 border-[#0C4A6E]/10 z-10 text-center relative">
                        <div className="flex items-center justify-center gap-2 mb-1">
                            <Cpu size={16} />
                            <h4 className="font-bold text-sm">Calculate Path</h4>
                        </div>
                        <p className="text-xs bg-white/20 px-2 py-1 rounded inline-block">Route to Spot A4</p>
                    </div>
                    <Arrow />

                    {/* End Node */}
                    <div className="bg-[#FDBA74] text-[#7C2D12] px-6 py-3 rounded-full font-bold shadow-md border-2 border-[#7C2D12]/10 z-10 flex items-center gap-2">
                        <Wifi size={16} />
                        Navigation Started
                    </div>

                    {/* Connecting Lines (Background) */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-300 -z-0"></div>

                </div>
            </div>
        </div>
    );
};

const Arrow = () => (
    <div className="text-slate-300">
        <ArrowRight className="rotate-90" />
    </div>
);

// --- Custom Logo ---
const WaySenseAppLogo = () => (
    <div className="flex items-center gap-2 text-[#FFFCF0]">
        <span className="font-bold text-xl tracking-tight">WaySense</span>
    </div>
);
