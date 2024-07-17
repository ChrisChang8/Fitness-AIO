import React from 'react'
import {motion} from 'framer-motion'

const Shop_Hero = () => {
  return (
    <section className="hero-wrapper" style={{marginTop:'100px'}}>
        <div className="paddings innerWidth flexCenter hero-container">
            
            <div className="flexColStart">
                {/* Title */}
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <motion.h1 
                        initial={{y:"2rem", opacity : 0}}
                        animate={{y: 0, opacity:1}}
                        transition={{duration: 2, type: "spring"}}
                    >
                        Shop
                    </motion.h1>

                    {/* Description */}
                    <div style={{marginTop: '10px'}} className="flexCenter">
                        <span class="secondaryText">You don't need!<br/>But it sure helps!</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Shop_Hero