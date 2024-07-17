import React from 'react'
import Home_Header from '../../components/Home/Home_Header';
import Home_Footer from '../../components/Home/Home_Footer';
import Shop_Hero from '../../components/Shop/Shop_Hero';
import Shop_Items from '../../components/Shop/Shop_Items';


const Shop = () => {
  return (
    <div>
        <div>
          <Home_Header/>
          <Shop_Hero/>
        </div>

        <Shop_Items/>
        <div className="separator"></div>
        <Home_Footer/>
    </div>
  )
}

export default Shop