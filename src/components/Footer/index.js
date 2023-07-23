import React from 'react';

function Footer() {
  return (
    <footer>        
        <div className='container-fluid'>
          <section className='row mx-0 justify-content-center'>
            <div className='col-xl-10 col-lg-11 px-0 d-flex justify-content-sm-around justify-content-between'>
              <a href="mailto:erickohlerdev@gmail.com">contact</a>
              <a href="https://www.linkedin.com/in/erickohlerdev" target="_blank" rel="noopener noreferrer">linkedin</a>
              <a href="https://github.com/eikohler" target="_blank" rel="noopener noreferrer">github</a>
            </div>
          </section>
        </div>
    </footer>
  );
}

export default Footer;