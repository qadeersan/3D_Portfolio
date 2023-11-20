import { BrowserRouter } from "react-router-dom"

import { MouseFollower, About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {

  return (
    <BrowserRouter>
      
      <div className="relative z-0 bg-primary overflow-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          
          <Navbar />
          <Hero />
          <MouseFollower />
        </div>
        

        <About />
        <Tech />

        <Works />
        <Experience />
        {/* <Feedbacks /> */}
        <div className="relative z-0 ">
          <Contact />
          <StarsCanvas />
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
