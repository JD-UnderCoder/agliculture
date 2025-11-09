import { useState, useRef } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import DiseaseDetection from './components/DiseaseDetection';
import Weather from './components/Weather';
import Chatbot from './components/Chatbot';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  // Refs for each section
  const homeRef = useRef(null);
  const diseaseRef = useRef(null);
  const weatherRef = useRef(null);
  const chatbotRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      disease: diseaseRef,
      weather: weatherRef,
      chatbot: chatbotRef,
      about: aboutRef,
      contact: contactRef,
    };

    const targetRef = refs[section];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(section);
    }
  };

  return (
    <LanguageProvider>
      <div className="bg-white">
        <Header onNavigate={scrollToSection} />
        
        <main>
          <section ref={homeRef} id="home">
            <Hero onNavigate={scrollToSection} />
          </section>
          
          <section ref={diseaseRef} id="disease">
            <DiseaseDetection />
          </section>
          
          <section ref={weatherRef} id="weather">
            <Weather />
          </section>
          
          <section ref={chatbotRef} id="chatbot">
            <Chatbot />
          </section>
          
          <section ref={aboutRef} id="about">
            <About />
          </section>
          
          <section ref={contactRef} id="contact">
            <Contact />
          </section>
        </main>
        
        <Footer onNavigate={scrollToSection} />
      </div>
    </LanguageProvider>
  );
}

export default App;
