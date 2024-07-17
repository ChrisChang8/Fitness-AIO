import React from 'react'
import './Workouts_Hero.css'
import {motion} from 'framer-motion'

const Workouts_Hero = () => {
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
                        Workouts
                    </motion.h1>

                    {/* Description */}
                    <div style={{marginTop: '10px'}} className="flexCenter">
                        <span class="secondaryText">Click & scroll down for the workout plans! <br/>Enjoy the scuff visuals, and remeber to stretch!</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Workouts_Hero