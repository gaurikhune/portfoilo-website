import React from 'react';
import './App.css';
import Profile from './Portfolio Container/Home/Profile';
import Footer from './Portfolio Container/Home/Footer/Footer';
import Home from './Portfolio Container/Home/home';
import Service from './Portfolio Container/Home/Service';
import Testimonial from './Portfolio Container/Home/Testimonial';
import Contact from './Portfolio Container/Home/contact';

function App() {
  return (
    <div className="App">
      <Profile />
      <Footer />
      <Home />
      <Service />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
