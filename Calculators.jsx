import React from 'react'
import './Calculators.css';
import Home_Header from '../../components/Home/Home_Header';
import Home_Footer from '../../components/Home/Home_Footer';

import Calc_Hero from '../../components/Calculators/Calc_Hero';
import Calc_Diet from '../../components/Calculators/Calc_Diet';

const Calculator = () => {
  return (
    <div>
        <div>
          <Home_Header/>
          <Calc_Hero/>
        </div>

        <Calc_Diet/>
        <div className="separator"></div>
        <Home_Footer/>
    </div>
  )
}

export default Calculator