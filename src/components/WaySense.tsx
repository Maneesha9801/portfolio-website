import React from 'react';
import { Link } from 'react-router-dom';
import { WaySenseDesignBoard } from './WaySenseDesignBoard';

interface WaySenseProps {
    onBack?: () => void;
}

export const WaySense: React.FC<WaySenseProps> = () => {
    return (
        <div className="min-h-screen bg-paper animate-fade-in-up selection:bg-accent-yellow selection:text-black">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        Back to Portfolio
                    </Link>
                    <span className="font-serif font-bold text-xl">WaySense</span>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-8 md:px-12 lg:px-24">
                <div className="container mx-auto max-w-[90rem]">
                    {/* Hero Section */}
                    <header className="mb-20 max-w-5xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-serif mb-8 relative inline-block">
                            WaySense
                            <span className="absolute -bottom-2 left-0 w-full h-4 bg-orange-200 -z-10 transform rotate-1 opacity-50"></span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed">
                            Infrastructure-Light Indoor Navigation: Designing a scalable localization engine for GPS-denied environments by repurposing existing Wi-Fi infrastructure.
                        </p>
                    </header>

                    {/* Project Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border-y border-gray-200 py-12 max-w-5xl mx-auto">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">My Role</h3>
                            <ul className="space-y-2 text-lg">
                                <li>System Architect</li>
                                <li>Interaction Designer</li>
                                <li>IoT Lead</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Timeline</h3>
                            <p className="text-lg">Research Project</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Wi-Fi RSSI Fingerprinting', 'Python', 'SQL', 'Infrared Sensors', 'TP-Link Hardware'].map(tech => (
                                    <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-32">

                        {/* The Design Problem */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h2 className="text-3xl font-serif sticky top-32">The Design Problem: The "Blind Handoff"</h2>
                            </div>
                            <div className="md:col-span-8 space-y-8">
                                <p className="text-xl leading-relaxed text-gray-700">
                                    GPS is the global standard for navigation, but it has a critical failure mode: <strong>Signal occlusion</strong>. When a vehicle enters a concrete structure (like a basement or parking complex), GPS accuracy drops from &lt;5m to "No Signal."
                                </p>
                                <p className="text-lg text-gray-600">
                                    This creates a "Blind Handoff"—a jarring user experience where the driver is suddenly left without guidance in a complex, high-stress environment.
                                </p>
                                <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                                    <h3 className="text-lg font-bold mb-4 text-orange-800">The Constraints</h3>
                                    <ul className="space-y-4 text-gray-700">
                                        <li className="flex gap-3">
                                            <span className="text-orange-500">⚠</span>
                                            <span><strong>Cost:</strong> Deploying proprietary hardware (LiDAR, UWB, or BLE Beacons) is prohibitively expensive for large-scale public infrastructure.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-orange-500">?</span>
                                            <span><strong>The Challenge:</strong> How might we achieve reliable indoor localization using only the hardware that already exists (Wi-Fi)?</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Interactive Design Board */}
                        <section className="mb-20">
                            <h2 className="text-3xl font-serif text-center mb-8">Interactive Design System</h2>
                            <WaySenseDesignBoard />
                            <p className="text-center text-gray-500 text-sm mt-4">
                                Explore the engineering decisions, digital twin architecture, and system logic.
                            </p>
                        </section>

                        {/* The Engineering Logic */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h2 className="text-3xl font-serif sticky top-32">The Engineering Logic</h2>
                            </div>
                            <div className="md:col-span-8 space-y-12">

                                {/* Decision A */}
                                <div className="group">
                                    <h3 className="text-2xl font-serif mb-4 text-gray-800">Decision A: RSSI Fingerprinting vs. RTT</h3>
                                    <div className="space-y-4">
                                        <p className="text-gray-600"><strong>The Analysis:</strong> I evaluated Wi-Fi RTT (Round Trip Time), which offers superior precision (1-2m). However, it requires specific hardware (Android 9+ and expensive RTT-enabled APs).</p>
                                        <p className="text-gray-800"><strong>The Decision:</strong> I chose RSSI Fingerprinting (~5m precision).</p>
                                        <p className="text-gray-600"><strong>The Rationale:</strong> While less precise, RSSI is universal. By using standard TP-Link EAP225 Access Points, we prioritized Accessibility and Scalability over raw precision, ensuring the system works on any smartphone without custom hardware.</p>
                                    </div>
                                    <div className="mt-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                                        <img
                                            src={`${import.meta.env.BASE_URL}waysense-rtt-diagram.png`}
                                            alt="Wi-Fi RTT vs RSSI Diagram"
                                            className="w-full h-auto"
                                        />
                                        <p className="text-xs text-gray-500 p-2 bg-gray-50 text-center border-t border-gray-200">Wi-Fi RTT (Fine Timing Measurement) Mechanics</p>
                                    </div>
                                </div>

                                <hr className="border-gray-100" />

                                {/* Decision B */}
                                <div className="group">
                                    <h3 className="text-2xl font-serif mb-4 text-gray-800">Decision B: Spectrum Selection</h3>
                                    <div className="space-y-4">
                                        <p className="text-gray-600"><strong>The Analysis:</strong> 5GHz Wi-Fi offers speed but suffers from high attenuation through concrete walls.</p>
                                        <p className="text-gray-800"><strong>The Decision:</strong> I constrained the system to the 2.4GHz spectrum.</p>
                                        <p className="text-gray-600"><strong>The Rationale:</strong> This maximized signal range (20-100m) and wall penetration, reducing the number of APs required to cover the floor plan—a critical "Design for Manufacturing/Assembly" (DFMA) consideration.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* The Digital Twin Approach */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h2 className="text-3xl font-serif sticky top-32">The Digital Twin Approach</h2>
                            </div>
                            <div className="md:col-span-8 space-y-12">
                                <p className="text-xl text-gray-700">I treated the invisible signal environment as a topographic map.</p>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Intervention A: The Signal Heatmap</h3>
                                        <p className="text-gray-600 mb-4">We mapped the facility by recording RSSI values at reference points, storing them in a Fingerprinting Database. I visualized this data as a Signal Heatmap, creating a "Digital Twin" of the radio environment. This allowed us to identify "Dead Zones" and reposition Access Points for optimal coverage.</p>
                                        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                                            <img
                                                src={`${import.meta.env.BASE_URL}waysense-heatmap.png`}
                                                alt="Signal Heatmap Digital Twin"
                                                className="w-full h-auto"
                                            />
                                            <p className="text-xs text-gray-500 p-2 bg-gray-50 text-center border-t border-gray-200">RSSI Signal Heatmap Visualization</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Intervention B: The Context-Aware Handover</h3>
                                        <p className="text-gray-600">The system detects the specific "Signal Drop" (RSSI Threshold Hysteresis) pattern of entering the facility. Instead of showing a "GPS Signal Lost" error, the App automatically switches context to the "Floor Plan View," seamlessly handing over control to the local Wi-Fi grid.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* System Architecture */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h2 className="text-3xl font-serif sticky top-32">System Architecture</h2>
                            </div>
                            <div className="md:col-span-8 space-y-8">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <h3 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">Sequence Diagram: The Handover Loop</h3>
                                    <pre className="text-xs md:text-sm font-mono text-slate-700 overflow-x-auto whitespace-pre p-4 bg-white rounded-lg border border-slate-200">
                                        {`PHASE 1: THE HANDOVER
User -> App:    Enters Basement (GPS Signal Dies)
App  -> Server: Detects GPS Loss + Connects to Wi-Fi
Server -> App:  "Context Switch" Triggered
App  -> User:   Show Notification: "Switched to Indoor Mode"

PHASE 2: NAVIGATION
User -> App:    Moves forward 10 meters
App  -> Server: Sends RSSI Signal Strength (-65dBm)
Server -> Server: Triangulate Position via Fingerprint DB
Server -> App:  Returns Vector Path (x,y coordinates)
App  -> User:   Updates Map UI (Real-time Blue Dot)

PHASE 3: ARRIVAL
User -> Sensor: Parks in Spot #B24
Sensor -> Server: IR Sensor Detects Object
Server -> Server: Update Parking DB to "Occupied"
Server -> App:  Send "Arrival" Confirmation
App  -> User:   "You have arrived!"`}
                                    </pre>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <h3 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">System Logic Flow</h3>
                                    <div className="flex flex-col gap-4 text-sm text-slate-700">
                                        <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200">
                                            <div className="font-bold min-w-[120px]">Input</div>
                                            <div>Smartphone reads ambient RSSI + Occupancy Sensors detect vacancy</div>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200">
                                            <div className="font-bold min-w-[120px]">Logic</div>
                                            <div>Server triangulates position using the Fingerprint DB + Calculates shortest path to an Open spot</div>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200">
                                            <div className="font-bold min-w-[120px]">Output</div>
                                            <div>User receives a dynamic vector path</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Validation & Impact */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h2 className="text-3xl font-serif sticky top-32">Validation & Impact</h2>
                            </div>
                            <div className="md:col-span-8">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                                        <div className="text-4xl font-bold text-orange-400 mb-2 font-serif">~5m</div>
                                        <div className="font-bold text-gray-800 mb-1">Precision</div>
                                        <p className="text-sm text-gray-500">Achieved using standard hardware, sufficient for vehicle wayfinding.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                                        <div className="text-4xl font-bold text-blue-400 mb-2 font-serif">200+</div>
                                        <div className="font-bold text-gray-800 mb-1">Users/AP</div>
                                        <p className="text-sm text-gray-500">Validated architecture for high concurrency.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                                        <div className="text-4xl font-bold text-green-400 mb-2 font-serif">90%</div>
                                        <div className="font-bold text-gray-800 mb-1">Cost Reduction</div>
                                        <p className="text-sm text-gray-500">Compared to BLE Beacon solutions.</p>
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
