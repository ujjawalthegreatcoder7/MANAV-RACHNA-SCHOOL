import './App.css';
import ContactUs from './components/ContactUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Vision from './homeSections/Vision';
import AboutTCF from './homeSections/AboutTCF';
import WhyTCF from './homeSections/WhyTCF';
import Navbar from './components/navbar';
import Organiser from './homeSections/Organizer';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>

      {/* 🔥 All pages render here */}
        <Navbar/>

      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/vision" element={<Vision/>} />
        <Route path="/about" element={<AboutTCF/>} />
        <Route path="/why" element={<WhyTCF/>} />
        <Route path="/Organiser" element={<Organiser/>} />
      </Routes>
      <Footer/>
      {/* 🔥 Yeh har page pe dikhega */}
      <ContactUs />

    </BrowserRouter>
  );
}

export default App;