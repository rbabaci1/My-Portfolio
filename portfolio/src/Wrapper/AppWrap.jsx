import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, sectionName, classNames) =>
  function HOC() {
    return (
      <div id={sectionName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <Component />

        <NavigationDots activeSection={sectionName} />
      </div>
    );
  };

export default AppWrap;
