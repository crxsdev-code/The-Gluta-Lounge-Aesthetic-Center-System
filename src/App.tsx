import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Treatments from './components/Treatments';
import About from './components/About';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import PromotionalBanner from './components/PromotionalBanner';
import AppointmentCTA from './components/AppointmentCTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Treatments />
        <About />
        <Reviews />
        <Gallery />
        <PromotionalBanner />
        <AppointmentCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App