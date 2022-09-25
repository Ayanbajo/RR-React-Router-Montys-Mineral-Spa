import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Signup from "./components/signupmodal"
import ControlledCarousel from './components/Carousel';

 
  function App() {
  
    const packages = ['Activate your Crystals', 
    'Monkey Meditation', 
    'Soak in the Hotsprings', 
    'Hypnotherapy', 
    'Mineral Bath']
    
      return (
        <div className="App">
          <Router>
          <Container>
                  <Nav defaultActiveKey="/" variant="tabs" fill>
                      <Nav.Item>
                          <Nav.Link href="/"> 
                              <Link to="/">Home</Link>
                          </Nav.Link>
                      </Nav.Item>
                      <Nav.Item >
                          <Nav.Link eventKey={"aboutPage"}> 
                              <Link to="/about">About Us</Link>
                          </Nav.Link>
                      </Nav.Item>
                      <Nav.Item >
                          <Nav.Link eventKey={"packagesPage"}> 
                              <Link to="/packages">Our Packages</Link> 
                          </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Signup />
                      </Nav.Item>
                  </Nav>
          </Container>

          <div className="display">
            <ControlledCarousel />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/packages" element={<Packages packages={packages} />} />
              </Routes>
          </div>         
          </Router>
        </div>
      );
  }
    
    export default App;
    