import React, { useEffect } from 'react';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
    visible: { opacity: 1, y: "0px", transition: { duration: 1 } },
    hidden: { opacity: 0, y: "50px" }
};

function WorkItem(props) {
    const {work, i} = props;

    const domain = work.url.replace('https://','').replace('/','');

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);
  
    return (    
        <motion.div ref={ref} variants={variants} initial="hidden" animate={controls}>
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
                    <p className="mb-0">{domain}</p>
                </div>
            </a>
        </motion.div>
    );
}

export default WorkItem;