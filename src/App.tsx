import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { EmoteGAN } from './components/EmoteGAN';
import { NetOptix } from './components/NetOptix';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'emotegan' | 'netoptix'>('home');

  if (currentView === 'emotegan') {
    return <EmoteGAN onBack={() => {
      setCurrentView('home');
      window.scrollTo(0, 0);
    }} />;
  }

  if (currentView === 'netoptix') {
    return <NetOptix onBack={() => {
      setCurrentView('home');
      window.scrollTo(0, 0);
    }} />;
  }

  return (
    <div className="min-h-screen bg-paper text-black font-sans selection:bg-accent-yellow selection:text-black">
      <Header />
      <main>
        <Hero />
        <Projects onProjectClick={(id) => {
          if (id === 'emotegan') setCurrentView('emotegan');
          if (id === 'netoptix') setCurrentView('netoptix');
        }} />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
