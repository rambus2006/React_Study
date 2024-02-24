import React from 'react';

const User = ({ id, name }) => {
    return (
        <li key={id}>
            {name}
        </li>
    );
};

export default User;