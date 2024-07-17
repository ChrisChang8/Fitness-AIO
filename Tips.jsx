import React from 'react'
import Home_Header from '../../components/Home/Home_Header';
import Home_Footer from '../../components/Home/Home_Footer';
import Tips_Hero from '../../components/Tips/Tips_Hero';
import Tips_Main from '../../components/Tips/Tips_Main';

const Tips = () => {
  return (
    <div>
        <div>
          <Home_Header/>
          <Tips_Hero/>
        </div>

        <Tips_Main/>
        <div className="separator"></div>
        <Home_Footer/>
    </div>
  )
}

export default Tips