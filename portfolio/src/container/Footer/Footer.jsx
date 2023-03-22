import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { EarthCanvas } from '../../components/canvas';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    //! send email

    // Reset form after 10 seconds
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 10000);
  };

  return (
    <>
      <h2 className='head-text'>
        Get in <span>touch!</span>
      </h2>

      <div className='app__contact-main'>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='app__contact-form-container'
        >
          <div className='app__footer-cards'>
            <div className='app__footer-card '>
              <img src={images.email} alt='email' />

              <a
                href='mailto:4rabah@gmail.com'
                target='_blank'
                className='p-text'
              >
                4rabah@gmail.com
              </a>
            </div>

            <div className='app__footer-card'>
              <img src={images.mobile} alt='phone' />

              <a href='tel:+1 (510) 646-7743' className='p-text'>
                +1 (510) 646-7743
              </a>
            </div>
          </div>

          {!isFormSubmitted ? (
            <form
              className='app__footer-form app__flex'
              onSubmit={handleSubmit}
            >
              <div className='app__flex'>
                <input
                  className='p-text'
                  type='text'
                  placeholder='Your Name'
                  name='username'
                  value={username}
                  onChange={handleChangeInput}
                  required
                />
              </div>

              <div className='app__flex'>
                <input
                  className='p-text'
                  type='email'
                  placeholder='Your Email'
                  name='email'
                  value={email}
                  onChange={handleChangeInput}
                  required
                />
              </div>

              <div>
                <textarea
                  className='p-text'
                  placeholder='Your Message'
                  value={message}
                  name='message'
                  onChange={handleChangeInput}
                  required
                />
              </div>

              <button type='submit' className='p-text'>
                {!loading ? 'Send Message' : 'Sending...'}
              </button>
            </form>
          ) : (
            <div>
              <h3 className='head-text'>Thanks for getting in touch!</h3>
            </div>
          )}
        </motion.div>

        <motion.div
          className='app__3d-earth'
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <div className='copyright'>
        <p className='p-text'>@2023 Rabah</p>
        <p className='p-text'>All rights reserved</p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
