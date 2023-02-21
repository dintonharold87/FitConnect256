import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CoachRegistration from './components/CoachRegistration';
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Faqs />
      <Contact />
      <CoachRegistration />
      <Footer />
    </>
  );
}

export default App;
