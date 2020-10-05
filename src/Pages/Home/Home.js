import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Works from '../../Components/Works/Works';
import './Home.css';

const Home = () => {
  return (
    <div className="firstBackImg">
      <div className="opacity-set">
        <Navbar></Navbar>
        <Works></Works>
      </div>
    </div>
  );
};

export default Home;