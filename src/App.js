import { useState } from 'react';
import './index.css';
import Nav from './components/Navbar';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import Stories from './components/Stories';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  return (
    <div>
      <header>
        <Nav openSidebar={openSidebar} />
        <Sidebar closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />
      </header>
      <main>
        <HeroSection />
        <About />
        <Features />
        <Services />
        <Stories />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
