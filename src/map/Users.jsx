import React from 'react';
import User from './User';

const Users = ({ value, isResolved }) => {

    // const {value, isResolve }= props;

    return (
        <div>
            {/* {isResolved && value.map((user) => <li>{user.name}</li>)} */}
            {isResolved && value.map(({ name, id }) => <User id={id} name={name} />)}
        </div>
    );
};

export default Users;