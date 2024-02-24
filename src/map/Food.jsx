import React from 'react';

const Food = (props) => {
    // 음식의 종류를 객체 담아보자

    return (
        <li style={props.style}>
            {props.food.name}
        </li>
    );
};

export default Food;
