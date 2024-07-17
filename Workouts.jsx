import React from 'react';
import './Workouts.css';
import Home_Header from '../../components/Home/Home_Header';
import Home_Footer from '../../components/Home/Home_Footer';
import Workouts_Hero from '../../components/Workouts/Workouts_Hero';
import Workouts_Temp from '../../components/Workouts/Workouts_Temp';


const Workouts = () => {
  return (
    <div>
        <div>
          <Home_Header/>       
          <Workouts_Hero/>
        </div>

        <Workouts_Temp/>
        <div className="separator"></div>
        <Home_Footer/>
    </div>
  )
}

export default Workouts