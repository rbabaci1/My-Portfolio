import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../client';
import './Experience.scss';

import 'react-vertical-timeline-component/style.min.css';

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then(data => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <div className='app__exp-header'>
        <p className='p-text'>WHAT I HAVE DONE SO FAR</p>
        <h2 className='head-text'>Work Experience</h2>
      </div>

      <div className='app__experiences-container'>
        <VerticalTimeline className='app__exp' lineColor='#edf2f8'>
          {experiences.map(experience => (
            <VerticalTimelineElement
              contentStyle={{
                background: '#edf2f8',
                color: '#313bac',
                padding: '1rem 2rem',
              }}
              contentArrowStyle={{ borderRight: '7px solid  #313bac' }}
              icon={
                <div className='app__exp-icon'>
                  <img
                    src={urlFor(experience.imgUrl)}
                    alt={`${experience.company} logo`}
                  />
                </div>
              }
              date={experience.year}
              iconStyle={{ background: '#edf2f8' }}
              key={experience._id}
            >
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__exp-item'
              >
                <div className='exp-item-header'>
                  <h4 className='bold-text'>{experience.title}</h4>
                  <p className='p-text'>{experience.company}</p>
                </div>

                <p className='p-text'>{experience.desc}</p>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experiences, 'app__experiences'),
  'experiences',
  'app__whitebg'
);
