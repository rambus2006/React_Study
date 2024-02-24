import React from 'react';

const PassComponent = (props) => {
   
    // console.log(props)
    //props는 object 
    return (
        <div>
            {props.pass}
            {props.massage}
        </div>
    );
};

export default PassComponent;