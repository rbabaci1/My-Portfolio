import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
import 'react-vertical-timeline-component/style.min.css';

import amazon from '../../assets/amazon.png';

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
        {/* <motion.div className='app__skills-list'>
          {skills.map(skill => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div> */}

        <div className='app__skills-exp'>
          <VerticalTimeline>
            {experiences.map((experience, i) => (
              <VerticalTimelineElement
                contentStyle={{
                  background: '#fff',
                  color: '#313bac',
                  padding: '1rem 2rem',
                }}
                contentArrowStyle={{ borderRight: '7px solid  #313bac' }}
                date={experience.year}
                iconStyle={{ background: '#fff' }}
                icon={
                  <div className='exp-icon'>
                    <img src={amazon} alt={'test' + i} />
                  </div>
                }
                key={experience._id}
              >
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
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__primarybg'
);
