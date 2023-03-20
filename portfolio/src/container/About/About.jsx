import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import Techs from '../../components/Techs/Techs';
import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then(data => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__about-header'
      >
        <p className='p-text'>INTRODUCTION</p>
        <h2 className='head-text'>Overview</h2>
        <p className='p-text'>
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>
      </motion.div>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <Tilt
            key={`${about.title}-${index}`}
            scale={1.1}
            transitionSpeed={500}
            className='app__profile-item'
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />

            <div className='details'>
              <h2 className='bold-text' style={{ marginTop: 15 }}>
                {about.title}
              </h2>

              <p className='p-text' style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </div>
          </Tilt>
        ))}
      </div>

      <Techs />
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
