import React from 'react';

const NavigationDots = ({ activeSection }) => (
  <div className='app__navigation'>
    {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className='app__navigation-dot'
          style={activeSection === item ? { backgroundColor: '#313BAC' } : {}}
        />
      )
    )}
  </div>
);

export default NavigationDots;
