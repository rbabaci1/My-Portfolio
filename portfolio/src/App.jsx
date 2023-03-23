import {
  Header,
  Techs,
  About,
  Footer,
  Experience,
  Testimonial,
  Portfolio,
} from './container';
import { Navbar } from './components';

import './App.scss';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Techs />
      <Portfolio />
      <Experience />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
