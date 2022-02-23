import React from 'react';
import './App.css';
import Home from './Pages/Pages'
import SignIn from './Pages/SignIn'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} exact element={<Home />}/>
        <Route path="/signin" component={SignIn} exact element={<SignIn />}/>
      </Routes>
    </Router>
  );
}

export default App;
