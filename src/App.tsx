import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageSlider from './components/ImageSlider';
import About from './components/About';
import Programs from './components/Programs';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Rainbow trail effect (Easter egg)
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    document.body.appendChild(cursor);

    const handleMouseMove = (e: MouseEvent) => {
      const trail = document.createElement('div');
      trail.className = 'trail-particle';
      trail.style.left = e.pageX + 'px';
      trail.style.top = e.pageY + 'px';
      document.body.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 1000);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cursor.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ImageSlider />
      <Hero />
      <About />
      <Programs />
      <Results />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;