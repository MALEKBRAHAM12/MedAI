import React from 'react';
import AboutUs from '../Components/AboutUs'
import Navbar from '../Components/Navbar';
import HeroImage from '../Components/HeroImage'
import GenerateAI from '../Components/GenerateAI'
import Contact from '../Components/Contact'
const Login: React.FC = () => {
  return (
    <div >
      <Navbar/>
      <HeroImage/>
      <AboutUs/>
      <GenerateAI/>
      <Contact/>
    </div>
  );
}

export default Login;

