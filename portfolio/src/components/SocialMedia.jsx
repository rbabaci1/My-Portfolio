import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className='app__social'>
    <div className='twitter'>
      <BsTwitter />
    </div>
    <div className='facebook'>
      <FaFacebookF />
    </div>
    <div className='instagram'>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
