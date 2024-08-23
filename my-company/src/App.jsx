import { BrowserRouter,  Route, Routes } from "react-router-dom";

BrowserRouter
Route 
Routes
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contacts";
 
function layout () {
        return (
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </Router>
        );
      }
      
      export default layout;