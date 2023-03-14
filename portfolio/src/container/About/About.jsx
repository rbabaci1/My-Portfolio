import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './About.scss';
// import { urlFor, client } from '../../client';

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  const { about01, about02, about03, about04 } = images;

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then(data => {
  //     setAbouts(data);
  //   });
  // }, []);

  // create me some dummy data of an array of objects to test the map function
  const abouts = [
    {
      title: 'Our Mission',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan sagittis ex, in porta quam commodo in. Sed euismod massa nec urna feugiat efficitur.',
      imgUrl: about01,
    },
    {
      title: 'Meet the Team',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan sagittis ex, in porta quam commodo in. Sed euismod massa nec urna feugiat efficitur.',
      imgUrl: about02,
    },
    {
      title: 'Our Values',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan sagittis ex, in porta quam commodo in. Sed euismod massa nec urna feugiat efficitur.',
      imgUrl: about03,
    },
    {
      title: 'Our History',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan sagittis ex, in porta quam commodo in. Sed euismod massa nec urna feugiat efficitur.',
      imgUrl: about04,
    },
  ];

  return (
    <>
      <h2 className='head-text'>
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className='app__profile-item'
            key={`${about.title}-${index}`}
          >
            {/* <img src={urlFor(about.imgUrl)} alt={about.title} /> */}
            <img src={about.imgUrl} alt={about.title} />

            <h2 className='bold-text' style={{ marginTop: 15 }}>
              {about.title}
            </h2>

            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
