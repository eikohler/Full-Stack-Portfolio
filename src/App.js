import React from "react";
import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import ScrollBar from "./components/ScrollBar";

function App() {
  return (
    <>
      <div className='container my-5'>
        <section className='row justify-content-between'>
          <div className='col-1'>
            <Navbar />
          </div>
          <div className='col-10'>
            <section className='row'>
                <div className='col-11'>
                  <main>
                    <section className="section-container">
                      <Home />
                    </section>
                    <section className="section-container">
                      <Home />
                    </section>
                    <section className="section-container">
                      <Home />
                    </section>
                    <section className="section-container">
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
