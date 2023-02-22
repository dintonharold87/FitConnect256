import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CoachRegistration from "./components/CoachRegistration";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CoachRegistration" element={<CoachRegistration />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
