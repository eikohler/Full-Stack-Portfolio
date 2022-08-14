import React, { useState } from 'react';
import db from '../../assets/json/work.json';

function Work() {
  const [works] = useState(db.works);
    
  return (
    <section className="row">
      {works.map((work) => (
        <div className='col-md-4 p-2' key={work.name}>
          <div className='gallery-image-container'>
            <h3>{work.name}</h3>
            <div className='overlay'></div>
            <img
              src={require(`../../assets/gifs/${work.image}`)}
              alt={work.name}
              className="gallery-image"
              // onClick={() => toggleModal(work)}
              key={work.name}
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Work;