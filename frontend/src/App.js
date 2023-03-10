import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CoachRegistration from "./components/CoachRegistration";
import AdminRegistration from "./components/AdminRegistration";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CoachView from "./components/CoachView";
import CoachList from "./components/CoachList";
function App() {
   const location = useLocation();
   const isDashboardRoute = location.pathname.startsWith("/dashboard");
  return (
    <>
      {isDashboardRoute ? null : <Navbar />}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/coach/:id" element={<CoachView />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coaches" element={<CoachList />} />
        <Route path="/coach_registration" element={<CoachRegistration />} />
        <Route path="/admin_registration" element={<AdminRegistration />} />
      </Routes>

      {isDashboardRoute ? null : <Footer />}
    </>
  );
}

export default App;
