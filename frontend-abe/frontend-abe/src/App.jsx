import { Routes, Route } from "react-router-dom";
import Home from "./markup/pages/Home/Home.jsx";
import About from "./markup/pages/About/About.jsx";
import Contact from "./markup/pages/Contact/Contact.jsx";
import Header from "./markup/components/Header/Header";
import Footer from "./markup/components/Footer/Footer";
import "./assets/css/style.css";
import "./assets/css/color.css";
import "./assets/css/responsive.css";
import "./assets/style/custom.css";
import NotFound from "./markup/pages/404/NotFound.jsx";
import AddEmployee from "./markup/pages/Admin/AddEmployee/AddEmployee.jsx";
import Services from "./markup/pages/Services/Services.jsx";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/services" element={<Services />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
