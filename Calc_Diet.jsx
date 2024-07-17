import React, { useState } from 'react';
import './Calc_Diet.css';

const Calc_Diet = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState(null);

    const calculateBMI = () => {
        const heightInInches = ((parseInt(heightFeet) * 12) + parseInt(heightInches));
        const weightInlb = parseInt(weight);
        const bmi = 703 * (weightInlb / (heightInInches* heightInInches));
        setResult(bmi.toFixed(2));
    };

    const clearInputs = () => {
        setAge('');
        setGender('');
        setHeightFeet('');
        setHeightInches('');
        setWeight('');
        setResult(null);
    };

    function getBMIClassification(bmi) {
        if (bmi < 16) {
            return "Severe Thinness";
        } else if (bmi >= 16 && bmi < 17) {
            return "Moderate Thinness";
        } else if (bmi >= 17 && bmi < 18.5) {
            return "Mild Thinness";
        } else if (bmi >= 18.5 && bmi <= 25) {
            return "Normal";
        } else if (bmi > 25 && bmi <= 30) {
            return "Overweight";
        } else if (bmi > 30 && bmi <= 35) {
            return "Mild Obesity";
        } else if (bmi > 35 && bmi <= 40) {
            return "Moderate Obesity";
        } else if (bmi > 40) {
            return "Severe Obesity";
        } else {
            return "NaN";
        }
    };

    return (
        <div className="innerWidth flexCenter ">
            <div>
                <div className="calc-container flexColStart">
                    <h2>BMI Calculator</h2>
                    <div className="input-container">
                        <label>Age:</label>
                        <input type="number" placeholder="Years" value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label>Gender:</label>
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <label style={{ marginRight: '10px' }}>Height:</label>
                    <div className="input-container" style={{ display: 'flex' }}>
                        <input type="number" placeholder="Feet" value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} />
                        <input type="number" placeholder="Inches" value={heightInches} onChange={(e) => setHeightInches(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label>Weight:</label>
                        <input type="number" placeholder="Pounds" value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        BMI: {result && <p style={{ display: 'inline', fontWeight: 'bold' }}>{result} {getBMIClassification(result)}</p>}
                    </div>
                    <div className="button-container">
                        <button onClick={calculateBMI}>Calculate</button>
                        <button onClick={clearInputs}>Clear</button>
                    </div>
                </div>
            </div>
            
            <div className="">
                <table className="table-container">
                    <tr>
                        <td>Classification</td>
                        <td>BMI Range</td>
                    </tr>
                    <tr>
                        <td>Severe Thinness</td>
                        <td>&lt;16</td>
                    </tr>
                    <tr>
                        <td>Moderate Thinness</td>
                        <td>16 - 17</td>
                    </tr>
                    <tr>
                        <td>Mild Thinness</td>
                        <td>17 - 18.5</td>
                    </tr>
                    <tr>
                        <td>Normal</td>
                        <td>18.5 - 25</td>
                    </tr>
                    <tr>
                        <td>Overweight</td>
                        <td>25 - 30</td>
                    </tr>
                    <tr>
                        <td>Mild Obesity</td>
                        <td>30 - 45</td>
                    </tr>
                    <tr>
                        <td>Moderate Obesity</td>
                        <td>35 - 45</td>
                    </tr>
                    <tr>
                        <td>Severe Obesity</td>
                        <td>&gt;40</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Calc_Diet;
