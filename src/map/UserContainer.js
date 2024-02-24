import React from 'react';
import { useAsync } from 'react-async'
import Users from './Users';

// UserContainer
// Users
// User

// react-async
// yarn add react-async
// npm install react-async

// fetch api 사용

const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return users;
}

// getUsers().then(console.log)
// 전달할 때 promise 타입으로 전달된다.

    // console.log(useAsync({promiseFn: getUsers}))

    // 비구조화할당
    // Object.name
    // Object.age
    // Object.height
    // const {name, age, height} = Object;
    
    // 실습 컨테이너 분리하기. 40분까지 


const UserContainer = () => {
    
    const {value, isResolved} = useAsync({promiseFn: getUsers})
    console.log(value)
    return (
        <div>
            <ul>
                {/* { isResolved && value.map( (user) => <li>{user.name}</li>) } */}
                { isResolved && <Users value={value} isResolved={isResolved}/>}
            </ul>
        </div>
    );
};

export default UserContainer;