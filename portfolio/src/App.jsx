import {
  About,
  Footer,
  Header,
  Skills,
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
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
