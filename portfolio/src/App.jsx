import {
  About,
  Footer,
  Header,
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
      <Portfolio />
      <Experience />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
