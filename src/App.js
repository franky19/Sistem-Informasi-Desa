import React,{Component} from 'react';
import SejarahDesa from "./Component/ProfilDesa/SejarahDesa"
import{Route, BrowserRouter as Router} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';


export default class App extends Component{
render(){
  return(
    <Router>
    <Route Path="/SejarahDesa"><SejarahDesa /></Route>
    </Router>
  )
}
} 

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
