import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <>
      <div className='main-container container mt-5'>
        <section className='row justify-content-between'>
          <div className='col-1'>
            <Navbar />
          </div>
          <div className='col-10'>
            <main>
              <Home />
            </main>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
