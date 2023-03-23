import React from 'react';

const NavigationDots = ({ activeSection, setActiveSection }) => {
  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'experiences', 'testimonial', 'contact'].map(
        (item, index) => (
          <a
            onClick={() => setActiveSection(item)}
            href={`#${item}`}
            key={item + index}
            className='app__navigation-dot'
            style={activeSection === item ? { backgroundColor: '#313BAC' } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
