import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import MealInfo from '../MealInfo/MealInfo';
const MealDetail = () => {
    const [meal,setMeal] = useState([]);
    const {mealId} = useParams();
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => 
            setMeal(data.meals))
    },[])
    return (
        <div>
            {
                meal.map(meal => <MealInfo key={meal.idMeal} meal={meal}></MealInfo>)
            }
        </div>
    );
};

export default MealDetail;