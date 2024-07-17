import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PPL = () => {
  const [currentTable, setCurrentTable] = useState(0);
  const tables = [
    // Push Day Table
    <table key={0} className="paddings innerWidth" style={{ marginTop: '20px', borderCollapse: 'collapse', width: '100%', color: 'black', tableLayout: 'fixed' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <th colSpan="6" style={{ padding: '8px', border: '1px solid #ddd' }}>Push Day</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Incline Bench Press <br />
            3 sets at 6-8 reps <br />
            <img src={"hero-gym.jpeg"} alt="Incline Bench Press" style={{ width: '50%' }} />
          </td>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Dumbbell Flyes <br />
            3 sets at 8-10 reps <br />
            <img src={"hero-gym.jpeg"} alt="Dumbbell Flyes" style={{ width: '50%' }} />
          </td>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Push-ups <br />
            3 sets to failure <br />
            <img src={"hero-gym.jpeg"} alt="Push-ups" style={{ width: '50%' }} />
          </td>
        </tr>
        <tr>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Tricep Dips <br />
            3 sets at 8-10 reps <br />
            <img src={"hero-gym.jpeg"} alt="Tricep Dips" style={{ width: '50%' }} />
          </td>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Overhead Press <br />
            3 sets at 6-8 reps <br />
            <img src={"hero-gym.jpeg"} alt="Overhead Press" style={{ width: '50%' }} />
          </td>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Lateral Raises <br />
            3 sets at 10-12 reps <br />
            <img src={"hero-gym.jpeg"} alt="Lateral Raises" style={{ width: '50%' }} />
          </td>
        </tr>
      </tbody>
    </table>,

    // Pull Day Table
    <table key={1} className="paddings innerWidth" style={{ marginTop: '20px', borderCollapse: 'collapse', width: '100%', color: 'black', tableLayout: 'fixed' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <th colSpan="6" style={{ padding: '8px', border: '1px solid #ddd' }}>Pull Day</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Pull-ups <br />
            3 sets to failure <br />
            <img src={"hero-gym.jpeg"} alt="Pull-ups" style={{ width: '50%' }} />
          </td>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Barbell Rows <br />
            3 sets at 6-8 reps <br />
            <img src={"hero-gym.jpeg"} alt="Barbell Rows" style={{ width: '50%' }} />
          </td>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Dumbbell Curls <br />
            3 sets at 8-10 reps <br />
            <img src={"hero-gym.jpeg"} alt="Dumbbell Curls" style={{ width: '50%' }} />
          </td>
        </tr>
        <tr>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Lat Pulldowns <br />
            3 sets at 8-10 reps <br />
            <img src={"hero-gym.jpeg"} alt="Lat Pulldowns" style={{ width: '50%' }} />
          </td>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Face Pulls <br />
            3 sets at 10-12 reps <br />
            <img src={"hero-gym.jpeg"} alt="Face Pulls" style={{ width: '50%' }} />
          </td>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Hammer Curls <br />
            3 sets at 8-10 reps <br />
            <img src={"hero-gym.jpeg"} alt="Hammer Curls" style={{ width: '50%' }} />
          </td>
        </tr>
      </tbody>
    </table>,

    // Leg Day Table
    <table key={2} className="paddings innerWidth" style={{ marginTop: '20px', borderCollapse: 'collapse', width: '100%', color: 'black', tableLayout: 'fixed' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <th colSpan="6" style={{ padding: '8px', border: '1px solid #ddd' }}>Leg Day</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Squats <br />
            3 sets at 8-10 reps <br />
            <img src={"hero-gym.jpeg"} alt="Squats" style={{ width: '50%' }} />
          </td>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Lunges <br />
            3 sets at 10-12 reps <br />
            <img src={"hero-gym.jpeg"} alt="Lunges" style={{ width: '50%' }} />
          </td>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Calf Raises <br />
            3 sets at 12-15 reps <br />
            <img src={"hero-gym.jpeg"} alt="Calf Raises" style={{ width: '50%' }} />
          </td>
        </tr>
        <tr>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Leg Press <br />
            3 sets at 8-10 reps <br />
            <img src={"hero-gym.jpeg"} alt="Leg Press" style={{ width: '50%' }} />
          </td>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Romanian Deadlifts <br />
            3 sets at 8-10 reps <br />
            <img src={"hero-gym.jpeg"} alt="Romanian Deadlifts" style={{ width: '50%' }} />
          </td>
          <td colSpan="2" style={{ padding: '8px', border: '1px solid #ddd' }}>
            Standing Calf Raises <br />
            3 sets at 12-15 reps <br />
            <img src={"hero-gym.jpeg"} alt="Standing Calf Raises" style={{ width: '50%' }} />
          </td>
        </tr>
      </tbody>
    </table>
  ];

  const handleNext = () => {
    setCurrentTable((prevIndex) => (prevIndex + 1) % tables.length);
  };

  const handlePrev = () => {
    setCurrentTable((prevIndex) => (prevIndex - 1 + tables.length) % tables.length);
  };

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart">
          {/* Title */}
          <div className="hero-title">
            <div className="" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Push-Pull-Legs
            </motion.h1>

            {/* Description */}
            <div style={{ marginTop: '20px' }} className="flexCenter">
              <span className="secondaryText">
                Difficulty: Intermediate <br />
                Goals: Strength / Tone / Muscle Growth <br />
                Equipment: Barbells / Dumbells / Gym Access
              </span>
            </div>

            {/* Navigation Arrows */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <button class='button' onClick={handlePrev}>Previous</button>
              <button class='button' onClick={handleNext}>Next</button>
            </div>
            {/* Current Table */}
            {tables[currentTable]}

          </div>
        </div>
      </div>
    </section>
  );
};

export default PPL;
