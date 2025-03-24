import './index.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Team from './pages/Team';
import Students from './pages/Students';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
