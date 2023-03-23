import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Portfolio.scss';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then(data => {
      setProjects(data);
      setFilteredProjects(data);
    });
  }, []);

  // Filter Work depending on the clicked tag
  const handleWorkFilter = item => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(
          projects.filter(project => project.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className='head-text'>
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className='app__project-filter app__flex'>
        {['All', 'React JS', 'Web App', 'UI/UX'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__project-filter-item app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__project-portfolio'
      >
        {filteredProjects.map((project, index) => (
          <Tilt
            className='app__project-item app__flex'
            scale={1.1}
            transitionSpeed={500}
            key={`${project.title}-${index}`}
          >
            <div className='app__project-img app__flex'>
              <img src={urlFor(project.imgUrl)} alt={project.title} />

              <div className='app__project-hover app__flex'>
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className='app__flex'
                >
                  <a
                    href={project.projectLink}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <AiFillEye />
                  </a>
                </motion.div>

                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className='app__flex'
                >
                  <a href={project.codeLink} target='_blank' rel='noreferrer'>
                    <AiFillGithub />
                  </a>
                </motion.div>
              </div>
            </div>

            <div className='app__project-content app__flex'>
              <h4 className='bold-text'>{project.title}</h4>

              <p className='p-text' style={{ marginTop: 10 }}>
                {project.description}
              </p>

              <div className='app__project-tag app__flex'>
                <p className='p-text'>{project?.tags[0]}</p>
              </div>
            </div>
          </Tilt>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Portfolio, 'app__projects'),
  'portfolio',
  'app__primarybg'
);
