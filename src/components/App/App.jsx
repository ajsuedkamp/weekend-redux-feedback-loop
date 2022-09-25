import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/">
         <Feeling />
        </Route>
        <Route exact path="/2">
          <Understanding />
        </Route>
        <Route exact path="/3">
          <Support />
        </Route>
        <Route exact path="/4">
          <Comments />
        </Route>
      </Router>
    </div>
  );
}

export default App;
