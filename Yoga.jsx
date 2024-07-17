import React from 'react';
import { motion } from 'framer-motion';

const Yoga = () => {
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
              Yoga
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
              <th colSpan="6" style={{ padding: '8px', border: '1px solid #ddd' }}>Yoga Exercises</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Downward-Facing Dog <br/>
                Hold for 30 sec, repeat 3 times <br/>
                <img src={"hero-gym.jpeg"} alt="Downward-Facing Dog" style={{ width: '50%' }} />
              </td>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Warrior I <br/>
                Hold for 30 sec on each side, repeat 3 times <br/>
                <img src={"hero-gym.jpeg"} alt="Warrior I" style={{ width: '50%' }} />
              </td>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Tree Pose <br/>
                Hold for 30 sec on each side, repeat 3 times <br/>
                <img src={"hero-gym.jpeg"} alt="Tree Pose" style={{ width: '50%' }} />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Cobra Pose <br/>
                Hold for 30 sec, repeat 3 times <br/>
                <img src={"hero-gym.jpeg"} alt="Cobra Pose" style={{ width: '50%' }} />
              </td>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Child's Pose <br/>
                Hold for 30 sec, repeat 3 times <br/>
                <img src={"hero-gym.jpeg"} alt="Child's Pose" style={{ width: '50%' }} />
              </td>
              <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                Seated Forward Bend <br/>
                Hold for 30 sec, repeat 3 times <br/>
                <img src={"hero-gym.jpeg"} alt="Seated Forward Bend" style={{ width: '50%' }} />
              </td>
            </tr>
          </tbody>
        </table>        
      </div>
    </section>
  )
}

export default Yoga;
