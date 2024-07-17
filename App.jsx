import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Workouts from "./pages/Workouts/Workouts";
import Calculators from "./pages/Calculators/Calculators";
import AI from "./pages/AI/AI";
import Tips from "./pages/Tips/Tips";
import Shop from "./pages/Shop/Shop";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/workouts" element={<Workouts/>}/>
        <Route path="/calculators" element={<Calculators/>}/>
        <Route path="/ai" element={<AI/>}/>
        <Route path="/tips" element={<Tips/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
