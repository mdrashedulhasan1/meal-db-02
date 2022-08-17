import React from 'react';

const MealInfo = (props) => {
    const {idMeal,strMeal,strArea,strMealThumb} = props.meal;
    return (
        <div>
            <h1>{idMeal}</h1>
            <h2>{strMeal}</h2>
            <h3>{strArea}</h3>
            <img src={strMealThumb} alt="" />
        </div>
    );
};

export default MealInfo;