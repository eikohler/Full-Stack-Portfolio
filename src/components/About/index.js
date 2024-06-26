import React, { useEffect } from 'react';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  visible: { opacity: 1, y: "0px", transition: { duration: 1 } },
  hidden: { opacity: 0, y: "50px" }
};

function About() {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
    controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="row mx-0 justify-content-center">        
      <div className="col-lg-7 col-sm-10 text-center">
        <motion.div ref={ref} variants={variants} initial="hidden" animate={controls}>
          <p><span>Hello!</span> I'm a Vancouver-based Full Stack Developer with advanced skills in HTML, CSS, 
          JavaScript, jQuery, SCSS, Bootstrap, React, TypeScript and PHP.
          I also specialize in building eCommerce and user-friendly websites through WordPress and Shopify.</p>
          <p>My background is in Computer Science and Visual Arts from Brock University. 
            As well, I've completed the Full Stack Coding BootCamp from Carleton University 
            and further went on to assist in teaching the same course at the University of Richmond. 
            I also have a strong interest in UI/UX design.</p>
          <p>I have over 3 years experience working alongside designers and developers to bring client's 
            ideas and design concepts to life.</p>
          <p>See my work and personal projects <a href="#work">below.</a></p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;