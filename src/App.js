import React from 'react';
import './App.css';
import Header from './Header';
import Home  from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
     <div className="App">
       <Header/>
       <Switch>
         <route path="/checkout">
         <Checkout/>
         </route>
         <route path="/">
           <Home />
         </route>
       </Switch>
     </div>
    </Router>
  );
}

export default App;
