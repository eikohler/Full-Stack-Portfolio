import React, { useEffect } from 'react';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const workVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

function WorkItem(props) {
    const {work, i} = props;

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);
  
    return (    
        <motion.div ref={ref} variants={workVariants} initial="hidden" animate={controls}>
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
        </motion.div>
    );
}

export default WorkItem;