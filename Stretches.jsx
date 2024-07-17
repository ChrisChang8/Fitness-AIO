import React from 'react'
import { motion } from 'framer-motion';

const Stretches = () => {
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
              Stretches
            </motion.h1>

            {/* Description */}
            <div style={{ marginTop: '20px' }} className="flexCenter">
              <span className="secondaryText">
                Remeber to always strech!<br />
                Goals: So you don't pull anything <br />
                Equipment: None
              </span>
            </div>
          </div>
        </div>
        {/* Table */}
        <table className="paddings innerWidth" style={{ marginTop: '5px', borderCollapse: 'collapse', width: '100%', color: 'black', tableLayout: 'fixed' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th colSpan="6" style={{ padding: '8px', border: '1px solid #ddd' }}>Full-Body Stretch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Neck Stretch <br/>
                Hold for 20-30 secs <br/>
                <img src={"hero-gym.jpeg"} alt="Incline Bench Press" style={{ width: '50%' }} />
              </td>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Shoulder Stretch <br/>
                Hold for 20-30 secs <br/>
                <img src={"hero-gym.jpeg"} alt="Dumbbell Flyes" style={{ width: '50%' }} />
              </td>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Hamstring Stretch <br/>
                Hold for 20-30 secs <br/>
                <img src={"hero-gym.jpeg"} alt="Push-ups" style={{ width: '50%' }} />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Forward Fold <br/>
                Hold for 20-30 secs <br/>
                <img src={"hero-gym.jpeg"} alt="Incline Bench Press" style={{ width: '50%' }} />
              </td>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Quad Stretch <br/>
                Hold for 20-30 secs  <br/>
                <img src={"hero-gym.jpeg"} alt="Dumbbell Flyes" style={{ width: '50%' }} />
              </td>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Calf Stretch <br/>
                Hold for 20-30 secs <br/>
                <img src={"hero-gym.jpeg"} alt="Push-ups" style={{ width: '50%' }} />
              </td>
            </tr>
          </tbody>
        </table>        
      </div>


    </section>
  )
}

export default Stretches