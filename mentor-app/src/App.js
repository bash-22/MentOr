import React from "react";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Body from "./components/Body";



class App extends Component {
    render(){
        return(
            <div className="App">
            <Router>
                <div>
                    <Route exact path="/" Component={LoginForm}/>
                    <Route exact path="/Feed" Component={Body}/>
                </div>
            </Router>
            </div>
        )
    }
}
export default App;


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
