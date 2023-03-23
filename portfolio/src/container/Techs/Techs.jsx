import React from 'react';
import { motion } from 'framer-motion';

import { BallCanvas } from '../../components/canvas';
import { techs } from '../../constants';
import './Techs.scss';

const Techs = () => {
  return (
    <div className='app__flex app__techs'>
      <motion.div className='app__skills-list'>
        {techs.map((icon, i) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__skills-item app__flex'
            key={`${icon}-${i}`}
          >
            <BallCanvas icon={icon} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Techs;
