import React, { useState } from 'react';
import db from '../../assets/db/work.json';

function Work() {
  const [works] = useState(db.works);
  
  return (
    <>
      <section className="row mx-0 justify-content-center">
        {works.map((work, i) => (
          <div className={`col-md-6 col-sm-10 px-sm-5 mb-5 pb-5`} key={i+" "+work.name+" col"}>
            <a target="_blank" rel="noopener noreferrer" href={`${work.url}`}
             className='no-highlight' key={i+" "+work.name+" container"}>        
             <div className="mb-4 px-lg-4 work-image-wrapper">
                <img
                  src={require(`../../assets/images/websites/${work.image}`)}
                  alt={work.name}
                  key={i+" "+work.name+" image"}
                />
              </div>
              <div className='text-center work-info'>
                <span className="mb-1" key={i+" "+work.name+" title"}>{work.name}</span>
                <p className="mb-0">Built on {work.cms}</p>
              </div>
            </a>
          </div>
        ))}
      </section>
    </>
  );
}

export default Work;