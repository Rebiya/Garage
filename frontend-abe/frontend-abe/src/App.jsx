import { Routes, Route } from "react-router-dom";
import Home from "./markup/pages/Home/Home.jsx";
import About from "./markup/pages/About/About.jsx";
import Contact from "./markup/pages/Contact/Contact.jsx";
import Header from "./markup/components/Header/Header";
import Footer from "./markup/components/Footer/Footer";
import "./assets/css/style.css";
import "./assets/css/color.css";
import "./assets/css/responsive.css";
import "./assets/css/bootstrap.css";
import "./assets/style/custom.css";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
