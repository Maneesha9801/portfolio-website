import puppeteer from 'puppeteer';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const BASE_PATH = '/portfolio-website';
const DIST_DIR = path.join(__dirname, '../dist');

const routes = [
    '/',
    '/netoptix',
    '/emotegan'
];

async function prerender() {
    // 1. Start a local server serving the dist folder
    const app = express();
    // Serve static files from dist at the base path
    app.use(BASE_PATH, express.static(DIST_DIR));

    // Fallback for SPA routing during crawling
    app.use((req, res) => {
        res.sendFile(path.join(DIST_DIR, 'index.html'));
    });

    const server = app.listen(PORT, () => {
        console.log(`Prerender server started at http://localhost:${PORT}${BASE_PATH}`);
    });

    // 2. Launch Puppeteer
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // 3. Iterate over routes
    for (const route of routes) {
        const url = `http://localhost:${PORT}${BASE_PATH}${route}`;
        console.log(`Prerendering: ${url}`);

        try {
            await page.goto(url, { waitUntil: 'networkidle0' });

            // Wait for a key element to ensure React has rendered
            // We'll wait for the 'root' div to have content
            await page.waitForFunction('document.getElementById("root").innerHTML.length > 0');

            // Get the HTML
            const html = await page.content();

            // 4. Save to file
            // Determine file path: / -> index.html, /netoptix -> netoptix/index.html
            let filePath;
            if (route === '/') {
                filePath = path.join(DIST_DIR, 'index.html');
            } else {
                const routeDir = path.join(DIST_DIR, route.substring(1));
                if (!fs.existsSync(routeDir)) {
                    fs.mkdirSync(routeDir, { recursive: true });
                }
                filePath = path.join(routeDir, 'index.html');
            }

            fs.writeFileSync(filePath, html);
            console.log(`Saved: ${filePath}`);

        } catch (error) {
            console.error(`Error prerendering ${route}:`, error);
        }
    }

    await browser.close();
    server.close();
    console.log('Prerendering complete.');
    process.exit(0);
}

prerender();
