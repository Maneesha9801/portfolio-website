import React, { useEffect, useRef } from 'react';
import styles from './NetOptixDashboard.module.css';

export const NetOptixDashboard: React.FC = () => {
    const canvas1Ref = useRef<HTMLCanvasElement>(null);
    const canvas2Ref = useRef<HTMLCanvasElement>(null);
    const canvas3Ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const drawMiniTopology = (canvas: HTMLCanvasElement | null, nodeCount: number, colorTheme: string) => {
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            // Set canvas resolution
            const rect = (canvas.parentNode as HTMLElement)?.getBoundingClientRect();
            if (rect) {
                canvas.width = rect.width;
                canvas.height = rect.height;
            }

            const nodes: { x: number; y: number }[] = [];
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = 40;

            // Generate nodes in a circle
            for (let i = 0; i < nodeCount; i++) {
                const angle = (i / nodeCount) * Math.PI * 2;
                nodes.push({
                    x: centerX + Math.cos(angle) * radius,
                    y: centerY + Math.sin(angle) * radius
                });
            }

            // Draw Links
            ctx.strokeStyle = '#e5e5e5';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            // Connect all to center or mesh
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    // Randomly connect some nodes
                    if (Math.random() > 0.4) {
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                    }
                }
            }
            ctx.stroke();

            // Draw Nodes
            nodes.forEach(node => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
                ctx.fillStyle = colorTheme;
                ctx.fill();
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 2;
                ctx.stroke();
            });
        };

        drawMiniTopology(canvas1Ref.current, 5, '#C3C7A6'); // Greenish for TechnoCore
        drawMiniTopology(canvas2Ref.current, 6, '#D7C59F'); // Tan for Hyperion
        drawMiniTopology(canvas3Ref.current, 4, '#9ab0d6'); // Blue for Hegemony

    }, []);

    return (
        <div className={styles.dashboardGrid}>
            {/* Card 1: Bharti Network */}
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>☊</div>
                    <div className={styles.cardTitleGroup}>
                        <h2 className={styles.cardTitle}>Bharti Network</h2>
                        <div className={styles.cardSubtitle}>ISIS MD scale • Scale testing</div>
                    </div>
                    <div className={styles.cardOptions}>•••</div>
                </div>

                <div className={styles.topologyPreview}>
                    <canvas ref={canvas1Ref} />
                    <div className={styles.demoOverlay}>
                        <button className={styles.btnDemo} onClick={() => alert("This would navigate to the detailed Simulation view.")}>View Live Simulation</button>
                    </div>
                </div>

                <div className={styles.statsRow}>
                    <div className={styles.statItem}>
                        <div className={styles.statIcon} style={{ background: '#eef2ff', color: '#6366f1' }}>T</div>
                        <span className={styles.statVal}>10</span>
                        <span className={styles.statLabel}>TEQ</span>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statIcon} style={{ background: '#f0fdf4', color: '#166534' }}>S</div>
                        <span className={styles.statVal}>16</span>
                        <span className={styles.statLabel}>Switch</span>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statIcon} style={{ background: '#fff7ed', color: '#9a3412' }}>N</div>
                        <span className={styles.statVal}>4</span>
                        <span className={styles.statLabel}>Nodes</span>
                    </div>
                </div>

                <div className={`${styles.statusFooter} ${styles.statusGood}`}>
                    <span className={styles.statusDot}></span> 51 Sites Synced
                </div>
            </div>

            {/* Card 2: EANTC Test */}
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>⫗</div>
                    <div className={styles.cardTitleGroup}>
                        <h2 className={styles.cardTitle}>EANTC Test</h2>
                        <div className={styles.cardSubtitle}>SR-MPLS with traffic engineering • Customer Production</div>
                    </div>
                    <span className={`${styles.badge} ${styles.badgeUpdate}`}>Updated</span>
                </div>

                <div className={styles.topologyPreview}>
                    <canvas ref={canvas2Ref} />
                    <div className={styles.demoOverlay}>
                        <button className={styles.btnDemo} onClick={() => alert("This would navigate to the detailed Simulation view.")}>View Live Simulation</button>
                    </div>
                </div>

                <div className={styles.statsRow}>
                    <div className={styles.statItem}>
                        <div className={styles.statIcon} style={{ background: '#fefce8', color: '#854d0e' }}>T</div>
                        <span className={styles.statVal}>12</span>
                        <span className={styles.statLabel}>TEQ</span>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statIcon} style={{ background: '#ecfeff', color: '#0e7490' }}>S</div>
                        <span className={styles.statVal}>24</span>
                        <span className={styles.statLabel}>Switch</span>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statIcon}>N</div>
                        <span className={styles.statVal}>8</span>
                        <span className={styles.statLabel}>Nodes</span>
                    </div>
                </div>

                <div className={`${styles.statusFooter} ${styles.statusWarn}`}>
                    <span className={styles.statusDot}></span> 145 Sites Out-of-Sync
                </div>
            </div>

            {/* Card 3: MVPN */}
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>❖</div>
                    <div className={styles.cardTitleGroup}>
                        <h2 className={styles.cardTitle}>MVPN</h2>
                        <div className={styles.cardSubtitle}>RSVP-TE site • DevOps stage</div>
                    </div>
                    <span className={`${styles.badge} ${styles.badgeNew}`}>New</span>
                </div>

                <div className={styles.topologyPreview}>
                    <canvas ref={canvas3Ref} />
                    <div className={styles.demoOverlay}>
                        <button className={styles.btnDemo} onClick={() => alert("This would navigate to the detailed Simulation view.")}>View Live Simulation</button>
                    </div>
                </div>

                <div className={styles.statsRow}>
                    <div className={styles.statItem}>
                        <div className={styles.statIcon}>T</div>
                        <span className={styles.statVal}>19</span>
                        <span className={styles.statLabel}>TEQ</span>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statIcon}>S</div>
                        <span className={styles.statVal}>8</span>
                        <span className={styles.statLabel}>Switch</span>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statIcon}>N</div>
                        <span className={styles.statVal}>12</span>
                        <span className={styles.statLabel}>Nodes</span>
                    </div>
                </div>

                <div className={`${styles.statusFooter} ${styles.statusSync}`}>
                    <span className={styles.statusDot}></span> 79 Sites Syncing...
                </div>
            </div>

            {/* Add New Card */}
            <div className={`${styles.card} ${styles.addCard}`}>
                <div className={styles.plusIcon}>+</div>
                <div style={{ fontWeight: 600, marginTop: '10px' }}>Add New Site</div>
            </div>
        </div>
    );
};
