import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <div className='relative z-0'>
            <Hero />
            <StarsCanvas />
          </div>
        </div>
        <div className='relative z-0'>
          <About />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Tech />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Experience />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Works />
          <StarsCanvas />
        </div>
        {/* <div className='relative z-0'>
          <Feedbacks />
          <StarsCanvas />
        </div> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
