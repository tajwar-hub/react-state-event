import { use } from "react";
import UserCard from "./UserCard";

function Users({usersDataPromise}){

    const users = use(usersDataPromise);
    console.log(users);

    return (
        <div>
            <h2>Users: {users.length}</h2>
            {
                users.map(user => <UserCard user={user}></UserCard>)
            }
        </div>
    )
}

export default Users;

/**
 * 1. Suspense fallback
 * 2. create a promise function to load data
 * 3. send the promise to the component to load data
 * 
*/



/**
 * 1. data source || JSON 
 * JSON.stringify()
 * JSON.parse()
 * 
 * .json()
 * 
 * 
 * 
*/


// // callback
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => { console.log(data)})

// // async await
// async function loadData (){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     return data;
// }

// const loadData2 = async() =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     return data;
// }
