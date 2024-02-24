import React from 'react';
import Food from './Food';

const Foods = (props) => {

    return (
        <div >
            {props.foods.map((food) => <Food food={food} style={props.style}/>)}
        </div>
    );
};

export default Foods;