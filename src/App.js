import React, { useRef } from "react";
import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Work from "./components/Work";
import useOnScreen from "./hooks/useOnScreen"

function App() {
  const margin = "-50%";
  
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const me = useOnScreen(ref1, margin);
  const about = useOnScreen(ref2, margin);
  const work = useOnScreen(ref3, margin);
  return (
    <>
      <header className="pl-sm-3 pl-1">        
        <div className='pl-lg-4 pl-0 py-sm-5 py-1 h-100 d-flex flex-column justify-content-between align-items-start'>
          <Navbar 
          me={me}
          about={about}
          work={work}
          />
        </div>
      </header>
      <main className='container-fluid'>        
        <section className='row mx-0 justify-content-center'>          
          <div className='col-lg-10 col-sm-11 px-0'>
            <section id="home" className="section-container" ref={ref1}>
              <Home />
            </section>
            <section id="about" className="section-container" ref={ref2}>
              <About />
            </section>
            <section id="work" className="section-container" ref={ref3}>
              <Work />
            </section>
          </div>      
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
