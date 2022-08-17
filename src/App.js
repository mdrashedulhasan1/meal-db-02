import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Meals from './components/Meals/Meals';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import MealDetail from './components/MealDetail/MealDetail';
function App() {
  return (
    <div className="App">
      <Header></Header>
       <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/meals" element={<Meals></Meals>} />
        <Route path="/meal/:mealId" element={<MealDetail></MealDetail>} />
      </Routes>
    </div>
  );
}

export default App;
