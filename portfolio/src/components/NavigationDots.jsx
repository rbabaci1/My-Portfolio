import React, { useState } from 'react';

const NavigationDots = () => {
  const [active, setActive] = useState('home');

  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'experiences', 'testimonial', 'contact'].map(
        (item, index) => (
          <a
            onClick={() => setActive(item)}
            href={`#${item}`}
            key={item + index}
            className='app__navigation-dot'
            style={active === item ? { backgroundColor: '#313BAC' } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
