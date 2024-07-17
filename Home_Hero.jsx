import React from 'react'
import './Home_Hero.css'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'
import Home_Features from './Home_Features';



const Home_Hero = () => {
  return (
    <section className="hero-wrapper" style={{marginTop:'100px'}}>
        <div className="paddings innerWidth flexCenter hero-container">
            
            {/* Left Side */}
            <div className="flexColStart hero-left">
                {/* Title */}
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <motion.h1 
                        initial={{y:"2rem", opacity : 0}}
                        animate={{y: 0, opacity:1}}
                        transition={{duration: 2, type: "spring"}}
                    >
                        Exercising <br/>
                        Made Simple

                    </motion.h1>

                    {/* Description */}
                    <div style={{marginTop: '20px'}} className="flexCenter">
                        <span class="secondaryText">An All In One Gym Library. <br/>I hope you learn something!</span>
                    </div>
                    
                    {/* Stats
                    <div style={{marginTop: '20px'}} className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span> 
                                <CountUp start={500} end={1000} duration={4}/> 
                                <span>+</span>
                            </span>
                            <span class="secondaryText">Active Users</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span> 
                                <CountUp start={1500} end={2000} duration={4}/> 
                                <span>+</span>
                            </span>
                            <span class="secondaryText">Downloads</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span> 
                                <CountUp start={0} end={100} duration={4}/> 
                                <span>+</span>
                            </span>
                            <span class="secondaryText">Exercises</span>
                        </div>
                    </div>
                    */}

                </div>

            </div>

            {/* Right Side 
            <div className="flexCenter hero-right">
                <motion.div
                initial ={{x: "7rem",opacity:0}}
                animate ={{x: 0, opacity:1}} 
                transition={{duration:2, type:"spring"}}
                className="image-container"
                >
                    <img src="./hero-gym.jpeg" alt="" />
                </motion.div>
            </div>
            */}



        </div>
    </section>
  )
}

export default Home_Hero