import { Container, FormWrap, Icon, Form, FormButton, FormContent, FormH1, FormInput, FormLabel } from './SignInPageElements'
import ScrollToTop from '../ScrollToTop'
import { useNavigate } from "react-router-dom";

import { useState, useContext } from "react";
import axios from "axios";

import '../SignUp/SignUp.css';

const SignInPage = () => {

    const onSubmit = () => {
        navigate("/");
        
    };

    //function to redirect to home page
    const navigate = useNavigate();

  
    return (
        <div className="container">
      <Icon to="/" >Orange</Icon>
            
            <div className="login">
                <h1>LOGIN</h1>
                Username: <input type="text"/>
                    
                Password: <input type="password"/>
                <button onClick={onSubmit} className="login-btn"> Login </button>

            </div>
        </div>

    )
}

export default SignInPage