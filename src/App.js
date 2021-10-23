import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Routes
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
// import Card from './pages/Card';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/:id" component={ProductPage}></Route>
        <Route exact path="/" component={Home}></Route>
      </div>
    </Router>
  );
}

export default App;
