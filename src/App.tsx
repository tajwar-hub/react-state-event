
import { Suspense } from 'react'
import './App.css'
// import Cart from './Cart'
// import Counter from './Counter'
// import Batter from './Batter'
import Users from './Users'
import Posts from './Posts';


const usersDataPromise = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
}

const postDataPromise = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

function App() {
  // const handleClick = () => {
  //   alert('click me 3')
  // }

  // const handleAddToCart = (id) =>{
  //   alert('buying item '+ id)
  // }

  return (
    <>

      

      <Suspense fallback={<p>Loading...</p>}>
        <Users usersDataPromise={usersDataPromise()}></Users>
      </Suspense>

      <Suspense fallback={<p>Loading Posts Data...</p>}>
        <Posts postsDataPromise={postDataPromise()}></Posts>
      </Suspense>

      {/* <Counter></Counter>
      <Batter></Batter> */}
      {/* <Cart></Cart> */}
      {/* <button onclick="handleClick()">Click Me</button> */}
      {/* <button onClick={handleClick}>Click Me 2</button>
      <button onClick={handleClick}>Click Me3</button>

      <button onClick={() => alert('click 4')}>Click Me 4</button>

      <button onClick={() => handleAddToCart(65)}>Buy this</button> */}


    </>
  )
}

export default App
