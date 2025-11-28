import React from 'react';
import Sparks from './components/Sparks';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-fire selection:text-white">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-blood/20 to-black z-0 pointer-events-none" />
      
      {/* Particles */}
      <Sparks />

      {/* Main Content */}
      <Hero />
    </main>
  );
};

export default App;