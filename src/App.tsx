import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { EmoteGAN } from './components/EmoteGAN';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'emotegan'>('home');

  const handleProjectClick = (projectId: string) => {
    if (projectId === 'emotegan') {
      setCurrentView('emotegan');
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  if (currentView === 'emotegan') {
    return <EmoteGAN onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-paper text-primary font-sans selection:bg-accent-yellow selection:text-black overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Projects onProjectClick={handleProjectClick} />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
