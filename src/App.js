import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import routes from './routes/routes'
import './App.css';

function App() {
  return (
  <Router>
    <div>
      {routes}
    </div>
  </Router>
  );
}

export default App;
