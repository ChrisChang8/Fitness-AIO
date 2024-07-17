import React, { useState } from 'react';
import './Workouts_Temp.css';
import data from '../../utils/workouts.json';
import PPL from './PPL';
import TTT from './TTT';


const Workouts_Temp = () => {
    const [selectedWorkout, setSelectedWorkout] = useState('Push-Pull-Legs'); // Default to PPL

    const handleClick = (workout) => {
        setSelectedWorkout(workout);
    };

    return (
        <section>
            <div className='innerWidth'>
                {/*Title*/}
                <div className="feature-head">
                    {/* <span className="orangeText">7 Unique Features</span> 
                    <span className="primaryText flexCenter">Check Out These Features!</span>
                    */}
                </div>

                {/*Grid*/}
                <div className="workout-grid">
                    {data.map((card, i) => (
                        <div key={i} className="workout-card" onClick={() => handleClick(card.name)}>
                            <img src={card.image} alt="template" />
                            <span className="workout-primaryText">{card.name}</span>
                            <span className="workout-secondaryText">{card.detail}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="separator"></div>

            {/* Render PPL or TTT based on selected workout */}
            {selectedWorkout === 'Push-Pull-Legs' && <PPL />}
            {selectedWorkout === '12-3-30' && <TTT />}
        </section>
    );
}

export default Workouts_Temp;
