// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Racing from './Racing'
import Basketball from './Basketball'
import Roundball from './Roundball'
import Polo from './Polo'
import Fooseball from './Fooseball'
import Cover from './Cover'
import Login from './Login'
import Hero from './Hero'
import Contact from './Contact'
import Cheatsheet from './Cheatsheet'
import Forum from './Forum'
import Blog from './Blog';
import Landing from './Landing';
import Skeleton from './Skeleton';

// function App() {
//   return (
//     <div className="App">
//       <h1>BONQUE</h1>
//     </div>
//   );
// }
//^^functional component (made out of a function)^^ newer syntax


class App extends Component {
  render() {
    return(
      <div className="App">
      {/* <Login /> */}
      {/* <Cover /> */}
      {/* <Hero /> */}
      {/* <Blog /> */}
      {/* <Landing /> */}
      <Skeleton />
      {/* <Forum /> */}
      {/* <Cheatsheet /><br></br><br></br> */}
      {/* <Contact /><br></br><br></br> */}
      {/* <Racing /><br></br><br></br>
      <Basketball /><br></br><br></br>
      <Roundball /><br></br><br></br>
      <Polo /><br></br><br></br>
      <Fooseball /><br></br><br></br>
      <h1>BONQUE</h1> */}
      </div>
    )
  }
}
//^^class component (made out of a class)^^




export default App;
// ES6 syntax for exports
