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
        {works.map((work, i) => (
          <div className='col-lg-4 col-sm-6 p-3' key={i+" "+work.name+" col"}>
            <div className='gallery-image-container' key={i+" "+work.name+" container"} 
            onClick={() => toggleModal(work)}>
              <h3 key={i+" "+work.name+" title"}>{work.name}</h3>
              <div className='overlay'></div>
              <img
                src={require(`../../assets/gifs/${work.image}`)}
                alt={work.name}
                className="gallery-image"                
                key={i+" "+work.name+" image"}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Work;