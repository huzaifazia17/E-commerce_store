import React from 'react';
import './App.css';
import Home from './Pages/Pages'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import SignUpPage from './Components/SignUp/SignUpPage';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} exact element={<Home />}/>
        <Route path="/signin" component={SignIn} exact element={<SignIn />} />
        <Route path="/signup" component={SignUp} exact element={<SignUp />}/>
        
      </Routes>
    </Router>
  );
}

export default App;
