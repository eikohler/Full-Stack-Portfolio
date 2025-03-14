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
          <p><span>Hello!</span> I'm a Vancouver-based Senior Full Stack Developer with skills in HTML, CSS3, 
          JavaScript, TypeScript, React, SASS, NextJS, GSAP, jQuery, and PHP.</p>
          <p>I specialize in building custom user-friendly eCommerce websites through WordPress.</p>
          <p>My background is in Computer Science and Visual Arts.</p>
          <p>I have a strong passion for UI/UX design and I love designing personal projects on Figma.</p>
          <p>I have over 4 years of experience working alongside designers and developers to bring client's 
            ideas to life.</p>
          <p>See some of my past work and personal projects <a href="#work">below.</a></p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;