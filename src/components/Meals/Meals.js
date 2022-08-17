import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';
const Meals = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setmeals] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setmeals(data.meals))
    }, [searchText]);
    const searchFood = (e) => {
        console.log(e.target.value);
        setSearchText(e.target.value);
    };
    return (
        <div>
            <h1>Find the food you want</h1>
            <input onChange={searchFood} type="text" name="" id="" placeholder='search your favourite food' />
            <h1>Meals Result:{meals.length}</h1>
            <div className='meals-container'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;