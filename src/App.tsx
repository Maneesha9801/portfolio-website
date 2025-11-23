import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { EmoteGAN } from './components/EmoteGAN';
import { NetOptix } from './components/NetOptix';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;
      const element = document.getElementById(targetId);
      if (element) {
        // Small timeout to ensure rendering is complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router basename="/portfolio-website/">
      <div className="min-h-screen bg-paper text-black font-sans selection:bg-accent-yellow selection:text-black">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/netoptix" element={<NetOptix onBack={() => { }} />} />
          <Route path="/emotegan" element={<EmoteGAN onBack={() => { }} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
