import React from 'react'
import {motion} from 'framer-motion'

const Calc_Hero = () => {
  return (
    <section className="hero-wrapper">
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
                        Calculators
                    </motion.h1>

                    {/* Description */}
                    <div style={{marginTop: '10px'}} className="flexCenter">
                        <span class="secondaryText">Calculates: <br/>Protien / Calorie Consumption / Calorie Loss / Protein Consumption / Water Consumption</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Calc_Hero