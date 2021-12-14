import React from "react";

import "./sign-in-sytles.scss";

import SignIn from "../../components/sign-in/sign-in-component";
import Signup from "../../components/sign-up/sign-up-component";

const SignInSignOut = () => (
    <div className="sign-in-and-sign-up">
        <Signup/>
        <SignIn/>        
    </div>
)

export default SignInSignOut;