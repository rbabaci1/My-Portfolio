import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, sectionName, classNames) =>
  function HOC() {
    return (
      <div id={sectionName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <Component />

        {/* <div className='app__wrapper app__flex'>

          <div className='copyright'>
            <p className='p-text'>@2023 Rabah</p>
            <p className='p-text'>All rights reserved</p>
          </div>
        </div> */}

        <NavigationDots activeSection={sectionName} />
      </div>
    );
  };

export default AppWrap;
