import React from 'react'
import Home_Header from '../components/Home/Home_Header';
import Home_Hero from '../components/Home/Home_Hero';
import Home_Features from '../components/Home/Home_Features';
import Home_Footer from '../components/Home/Home_Footer';

const Home = () => {
  return (
    <div>
        <div>
            <Home_Header/>
            <Home_Hero/>
        </div>
        
        <Home_Features/>
        <div className="separator"></div>
        <Home_Footer/>
    </div>
  )
}

export default Home