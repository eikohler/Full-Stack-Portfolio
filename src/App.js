import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='main-container container mt-5'>
        <section className='row h-100'>
          <div className='col-1 h-100'>
            <Navbar />
          </div>
          <div className='col-11 h-100'>
            
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
