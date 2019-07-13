import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import NavBar from '../src/components/Landing Page/NavBar'
import routes from './routes/routes'
import './App.scss';

function App() {
  return (
  <Router>
    <div>
      {/* <NavBar /> */}
      {routes}
    </div>
  </Router>
  );
}

export default App;
