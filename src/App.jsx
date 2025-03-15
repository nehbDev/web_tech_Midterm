import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Explore from "./pages/Explore";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Book" element={<Book />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
