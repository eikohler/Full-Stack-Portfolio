import React, { useState } from 'react';

import WorkItem from "../WorkItem";
import db from '../../assets/db/work.json';

function Work() {
  const [works] = useState(db.works);
  
  return (
    <>
      <section className="row mx-0 justify-content-center">
        {works.map((work, i) => (
          <div className={`col-md-6 col-sm-10 px-sm-5 mb-5 pb-5`} key={i+" "+work.name+" col"}>
            <WorkItem work={work} i={i} />
          </div>
        ))}
      </section>
    </>
  );
}

export default Work;