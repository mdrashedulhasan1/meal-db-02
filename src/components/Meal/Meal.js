import React from 'react';
import './Meal.css';
import {useNavigate} from 'react-router-dom';
const Meal = (props) => {
    const navigate = useNavigate();
    const {idMeal,strMeal,strCategory,strMealThumb} = props.meal;
    const handleInfo = ()=>{
        navigate(`/meal/${idMeal}`)
    }
    return (
        <div className='meal-container'>
            <h1>{strMeal}</h1>
            <p>{strCategory}</p>
            <img src={strMealThumb} alt="" /><br />
            <button onClick={handleInfo}>More Info</button>
        </div>
    );
};

export default Meal;