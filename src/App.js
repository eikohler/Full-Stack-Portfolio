import React, { useRef } from "react";
import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Work from "./components/Work";
import Contact from "./components/Contact";
import useOnScreen from "./hooks/useOnScreen"

function App() {
  const margin = "-50%";
  
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const me = useOnScreen(ref1, margin);
  const about = useOnScreen(ref2, margin);
  const work = useOnScreen(ref3, margin);
  const contact = useOnScreen(ref4, margin);

  return (
    <>
      <div className='container-fluid main-content'>
        <section className='row mx-0 justify-content-center h-100'>
          <div className='col-xl-10 col-lg-11 px-0 h-100'>
            <section className='row mx-0 h-100'>
              <div className='col-2 h-100'>
                <Navbar 
                me={me}
                about={about}
                work={work}
                contact={contact}
                />
              </div>
              <div className='col-10 h-100'>
                <main class="h-100">
                  <section id="home" className="section-container" ref={ref1}>
                    <Home />
                  </section>
                  <section id="about" className="section-container" ref={ref2}>
                    <About />
                  </section>
                  <section id="work" className="section-container" ref={ref3}>
                    <Work />
                  </section>
                  <section id="contact" className="section-container" ref={ref4}>
                    <Contact />
                  </section>
                </main>
              </div> 
            </section>      
          </div>        
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
