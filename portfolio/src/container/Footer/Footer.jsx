import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
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

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch(err => console.log(err));

    // Reset form after 10 seconds
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 10000);
  };

  return (
    <div>
      <h2 className='head-text'>
        Let's chat over a <span>coffee</span>
      </h2>

      <div className='app_contact-main'>
        <div>
          <div className='app__footer-cards'>
            <div className='app__footer-card '>
              <img src={images.email} alt='email' />

              <a href='4rabah@gmail.com' className='p-text'>
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
            <div className='app__footer-form app__flex'>
              <div className='app__flex'>
                <input
                  className='p-text'
                  type='text'
                  placeholder='Your Name'
                  name='username'
                  value={username}
                  onChange={handleChangeInput}
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
                />
              </div>

              <div>
                <textarea
                  className='p-text'
                  placeholder='Your Message'
                  value={message}
                  name='message'
                  onChange={handleChangeInput}
                />
              </div>

              <button type='button' className='p-text' onClick={handleSubmit}>
                {!loading ? 'Send Message' : 'Sending...'}
              </button>
            </div>
          ) : (
            <div>
              <h3 className='head-text'>Thanks for getting in touch!</h3>
            </div>
          )}
        </div>

        <div className='app__3d-earth'></div>
      </div>

      <div className='copyright'>
        <p className='p-text'>@2023 Rabah</p>
        <p className='p-text'>All rights reserved</p>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
