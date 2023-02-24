import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CoachRegistration from "./components/CoachRegistration";
import AdminRegistration from "./components/AdminRegistration";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/coach_registration" element={<CoachRegistration />} />
        <Route path="/admin_registration" element={<AdminRegistration />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
