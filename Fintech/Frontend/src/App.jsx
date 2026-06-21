import React from 'react';
import NavBar from './components/Navbar.jsx';
import Hero_Section from './components/HeroSection.jsx';
import WhyThisMatter from './components/WhyThisMatter.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Features from './components/features.jsx';
import WhyChoose from './components/whyChoose.jsx';
import GetStartBtn from './components/getStartBtn.jsx';
import Footer from './components/footer.jsx';
const App = () => {
  return <>
    <div className="App">
      <NavBar />
      <Hero_Section />
      <WhyThisMatter />
      <HowItWorks />
      <Features />
      <WhyChoose />
      <GetStartBtn />
      <Footer />
    </div>

  </>

};

export default App;
