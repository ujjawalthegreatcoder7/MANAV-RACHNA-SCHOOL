import './App.css';
import ContactUs from './components/ContactUs';
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Vision from './homeSections/Vision';
import AboutTCF from './homeSections/AboutTCF';
import WhyTCF from './homeSections/WhyTCF';
import Navbar from './components/navbar';
import Organiser from './homeSections/Organizer';
import Footer from './components/footer';

function App() {
  return (
    <HashRouter>
      
      {/* 🔥 Navbar har page pe */}
      <Navbar />

      {/* 🔥 Routes */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vision" element={<Vision fullPage={true} />} />
        <Route path="/about" element={<AboutTCF />} />
        <Route path="/why" element={<WhyTCF />} />
        <Route path="/organiser" element={<Organiser />} />
      </Routes>

      {/* 🔥 Footer har page pe */}
      <Footer />

      {/* 🔥 Contact form har page pe */}
      <ContactUs />

    </HashRouter>
  );
}

export default App;