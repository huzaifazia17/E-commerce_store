import React from 'react';
import './App.css';
import Home from './Pages/Pages'
import SignIn from './Pages/SignIn'

import SignUpPage from './Components/SignUp/SignUpPage'
import SignInPage from './Components/SignIn/SignInPage'


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} exact element={<Home />}/>
        <Route path="/signin" component={SignInPage} exact element={<SignInPage />} />
        <Route path="/signup" component={SignUpPage} exact element={<SignUpPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
