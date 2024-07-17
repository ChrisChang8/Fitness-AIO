import React from 'react'
import { motion } from 'framer-motion';

const Cardio = () => {
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
              Cardio
            </motion.h1>

            {/* Description */}
            <div style={{ marginTop: '20px' }} className="flexCenter">
              <span className="secondaryText">
                Difficulty: Intermediate <br />
                Goals: Weight Loss / Fat Loss <br />
                NOTE: PICK UR POISON!
              </span>
            </div>
          </div>
        </div>
        {/* Table */}
          <table className="paddings innerWidth" style={{ marginTop: '5px', borderCollapse: 'collapse', width: '100%', color: 'black', tableLayout: 'fixed' }}>
            <thead>
              <tr style={{ backgroundColor: '#f2f2f2' }}>
                <th colSpan="6" style={{ padding: '8px', border: '1px solid #ddd' }}>Cardio Workouts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                  Running <br />
                  Distance: 3 miles <br />
                  Pace: Moderate (6-7 mph) <br />
                  Duration: 30 minutes
                </td>
                <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                  Cycling <br />
                  Distance: 10 miles <br />
                  Resistance: Moderate <br />
                  Duration: 45 minutes
                </td>
                <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                  Jump Rope <br />
                  Sets: 3 <br />
                  Reps: 3 minutes per set <br />
                  Rest: 1 minute between sets
                </td>
              </tr>
              <tr>
                <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                  Stair Climbing <br />
                  Floors: 20 <br />
                  Pace: Steady <br />
                  Duration: 20 minutes
                </td>
                <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                  High-Intensity Interval Training (HIIT) <br />
                  Intervals: 30s work, 30s rest <br />
                  Exercises: Jumping Jacks, Burpees, Mountain Climbers <br />
                  Sets: 5 <br />
                  Total Duration: 15 minutes
                </td>
                <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
                  Swimming <br />
                  Style: Freestyle <br />
                  Distance: 500 meters <br />
                  Pace: Moderate <br />
                  Duration: 20 minutes
                </td>
              </tr>
            </tbody>
          </table> 
      </div>


    </section>
  )
}

export default Cardio