import React from 'react';

const AppWrap = (Component, sectionName, classNames) =>
  function HOC() {
    return (
      <div id={sectionName} className={`app__container ${classNames}`}>
        <Component />
      </div>
    );
  };

export default AppWrap;
