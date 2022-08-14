import React, { useState } from 'react';
import db from '../../assets/json/work.json';
import Modal from '../Modal';

function Work() {
  const [works] = useState(db.works);
  const [currentWork, setCurrentWork] = useState();

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = (work) => {
    setCurrentWork(work);
    setModalOpen(!modalOpen);
  }
    
  return (
    <>
      {modalOpen && (
        <Modal currentWork={currentWork} onClose={toggleModal} />
      )}
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
                onClick={() => toggleModal(work)}
                key={work.name}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Work;