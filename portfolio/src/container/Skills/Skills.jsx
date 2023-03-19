import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import amazon from '../../assets/amazon.png';
import './Skills.scss';

import 'react-vertical-timeline-component/style.min.css';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then(data => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then(data => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <div className='app__exp-header'>
        <p className='p-text'>WHAT I HAVE DONE SO FAR</p>
        <h2 className='head-text'>Work Experience</h2>
      </div>

      <div className='app__skills-container'>
        <VerticalTimeline className='app__skills-exp' lineColor='#edf2f8'>
          {experiences.map((experience, i) => (
            <VerticalTimelineElement
              contentStyle={{
                background: '#edf2f8',
                color: '#313bac',
                padding: '1rem 2rem',
              }}
              contentArrowStyle={{ borderRight: '7px solid  #313bac' }}
              icon={
                <div className='exp-icon'>
                  <img src={amazon} alt={'test' + i} />
                </div>
              }
              date={experience.year}
              iconStyle={{ background: '#edf2f8' }}
              key={experience._id}
            >
              <div>Test</div>
              <motion.div className='app__skills-exp-item'>
                <motion.div className='app__skills-exp-works'>
                  {experience.works.map(work => (
                    <div key={work._key}>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className='app__skills-exp-work'
                      >
                        <h4 className='bold-text'>{work.name}</h4>
                        <p className='p-text'>{work.company}</p>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
