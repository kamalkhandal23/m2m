import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
// import Schedule from "./pages/Schedule";
// import About from "./pages/About";
// import Fleet from "./pages/Fleet";
// import Explore from "./pages/Explore";
// import FAQ from "./pages/FAQ";
// import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        {/* <Route path="/schedule" element={<Schedule />} />
        <Route path="/about" element={<About />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} /> */}

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;