import React from 'react';
import logo from './logo.svg';
import './App.css';
import Race from './components/Race';
import Results from './components/Results';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <Router>
      <nav>
        <ul>
        <li>
            <Link to="/results">Results</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          
        </ul>
      </nav>
      <Switch>
        
        <Route path="/results">
          <Results></Results>
        </Route>
        <Route path="/">
          <div className="App">
            <header className="App-header">
              <Race></Race>
            </header>
          </div>

        </Route>
      </Switch>
      
    </Router>

    
  );
}

export default App;
