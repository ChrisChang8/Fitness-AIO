import React from 'react'
import { motion } from 'framer-motion';

const Pilades = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart">
          {/* Title */}
          <div className="hero-title">
            <div />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Pilates
            </motion.h1>

            {/* Description */}
            <div style={{ marginTop: '20px' }} className="flexCenter">
              <span className="secondaryText">
                Difficulty: Warm-Ups <br />
                Goals: Weight Loss / Fat Loss <br />
                Equipment: Treadmill
              </span>
            </div>
          </div>
        </div>
        {/* Table */}
        <table className="paddings innerWidth" style={{ marginTop: '5px', borderCollapse: 'collapse', width: '100%', color: 'black', tableLayout: 'fixed' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th colSpan="6" style={{ padding: '8px', border: '1px solid #ddd' }}>Push Day</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Incline Bench Press <br/>
                3 sets at 6-8 reps <br/>
                <img src={"hero-gym.jpeg"} alt="Incline Bench Press" style={{ width: '50%' }} />
              </td>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Dumbbell Flyes <br/>
                3 sets at 8-10 reps <br/>
                <img src={"hero-gym.jpeg"} alt="Dumbbell Flyes" style={{ width: '50%' }} />
              </td>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Push-ups <br/>
                3 sets to failure <br/>
                <img src={"hero-gym.jpeg"} alt="Push-ups" style={{ width: '50%' }} />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Incline Bench Press <br/>
                3 sets at 6-8 reps <br/>
                <img src={"hero-gym.jpeg"} alt="Incline Bench Press" style={{ width: '50%' }} />
              </td>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Dumbbell Flyes <br/>
                3 sets at 8-10 reps <br/>
                <img src={"hero-gym.jpeg"} alt="Dumbbell Flyes" style={{ width: '50%' }} />
              </td>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Push-ups <br/>
                3 sets to failure <br/>
                <img src={"hero-gym.jpeg"} alt="Push-ups" style={{ width: '50%' }} />
              </td>
            </tr>
          </tbody>
        </table>        
      </div>


    </section>
  )
}

export default Pilades