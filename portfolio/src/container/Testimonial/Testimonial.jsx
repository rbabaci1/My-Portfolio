import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { brands } from '../../constants';
import './Testimonial.scss';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const handleClick = value => {
    if (value === -1) {
      setCurrentIndex(
        currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
      );
    } else if (value === 1)
      setCurrentIndex(
        currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
      );
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then(data => {
      setTestimonials(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>Testimonials</h2>

      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img
              src={urlFor(testimonials[currentIndex].imgurl)}
              alt={testimonials[currentIndex].name}
            />
            <div className='app__testimonial-content'>
              <p className='p-text'>{testimonials[currentIndex].feedback}</p>

              <div>
                <h4 className='bold-text'>{testimonials[currentIndex].name}</h4>
                <h5 className='p-text'>{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div className='app__flex' onClick={() => handleClick(-1)}>
              <HiChevronLeft />
            </div>

            <div className='app__flex' onClick={() => handleClick(1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className='app__testimonial-brands app__flex'>
        {brands.map((brand, i) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={`${brand}-${i}`}
          >
            <img src={brand} alt={brand} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg'
);
