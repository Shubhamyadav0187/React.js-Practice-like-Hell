// import React from 'react'
// import React, {Component} from 'react';
import ContactForm from './ContactForm';
import ExpensiveCalculator from './ExpensiveCalculator';
import LightDarkMode from './LightDarkMode';
import Login from './Login';
import UsersList from './UsersList';
import Welcome from './Welcome';
import PropsChildren from './PropsChildren';
import OnlineUser from './OnlineUser';
import ReactMemo from './ReactMemo';
import { useState } from 'react';

// its a functional component 
function App() {

  // const userData = {
  //   name: "shubham yadav",
  //   email: "shubham@gmail.com",
  //   age: "22"
  // }
  console.log("parent render ");

  const [count, setcount] = useState(0)
  return (
    <>
      {/* <h1>Hello, Shubham!</h1> */}
      {/* // <Welcome name="Shubham"  surname = "yadav"/> */}
      {/* <Login /> */}
      {/* <UsersList/> */}
      {/* <ExpensiveCalculator/> */}

      {/* <LightDarkMode/> */}
      {/* <ContactForm/> */}
      {/* <PropsChildren data={userData} >
        <h3>Email: shubahmayadav@gmail.com</h3>
        </PropsChildren> */}
      {/* <OnlineUser/> */}
      <ReactMemo name="Shubham yadav" />
      <button onClick={() => setcount(count + 1)}>Count: {count}</button>


    </>


  )
}

export default App;


// its a class based component 


// class Greeting extends Component {
//   render(){
//     return <h1>Hello, Shubham!</h1>
//   }
// }

