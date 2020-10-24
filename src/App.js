import React from 'react';
import './App.css';
import Header from './Header';
import Home  from './Home'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
     <div className="App">
       <Switch>
         <route path="/checkout">
           <Header/>
           <h1>Iam the checkout page, please hit the smash button</h1>
         </route>
         <route path="/">
           <Header />
           <Home />
         </route>
       </Switch>
     </div>
    </Router>
  );
}

export default App;
