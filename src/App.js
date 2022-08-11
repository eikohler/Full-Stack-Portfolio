import React, { useRef } from "react";
import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Work from "./components/Work";
import ScrollBar from "./components/ScrollBar";
import useOnScreen from "./hooks/useOnScreen"

function App() {
  const margin = "-400px";
  
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
      <div className='container my-5'>
        <section className='row justify-content-between'>
          <div className='col-1'>
            <Navbar 
            me={me}
            about={about}
            work={work}
            contact={contact}
            />
          </div>
          <div className='col-10'>
            <section className='row'>
                <div className='col-11'>
                  <main>
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
                      <Home />
                    </section>
                    <div className='bottom-spacer'></div>
                  </main>
                </div>
                <div className='col-1'>
                  <ScrollBar />
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
