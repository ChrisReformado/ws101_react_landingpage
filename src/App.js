import React from 'react';
import './App.css'; // Import your CSS file
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

const App = () => (
   <div>
       <Navbar />
       <Hero />
       <About />
       <Contacts />
       <Footer />
   </div>
);

export default App;
