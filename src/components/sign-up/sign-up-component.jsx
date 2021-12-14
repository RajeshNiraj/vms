import React from "react";
import FormInput from "../form-input/form-input-component";
import CustomButtom from "../custom-button/custom-button-component";

import "./sign-up-styles.scss"

class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:'',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        //if(password )
    }

    handleChange = event => {
        const { value, name} = event.target;

        this.setState({ [name]: value });
    }

    render(){
        const {displayName, email, password, confirmPassword} = 
                        this.state
        return(
            <div className="sign-up">
                <h2 className="title ">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" 
                    onSubmit={this.handleSubmit}>
                <FormInput type="text" name="displayName"
                    value={displayName} 
                    onChange={this.handleChange} 
                    label='Display Name' required >
                </FormInput>
                <FormInput type="text" name="email"
                    value={email} 
                    onChange={this.handleChange} 
                    label='Email' required >
                </FormInput>
                <FormInput type="password" name="password"
                    value={password} 
                    onChange={this.handleChange} 
                    label='Password' required >
                </FormInput>
                <FormInput type="password" name="confirmPassword"
                    value={confirmPassword} 
                    onChange={this.handleChange} 
                    label='Confirm Password' required >
                </FormInput>
                <CustomButtom type="submit">SIGN UP</CustomButtom>
                </form>
            </div>
        )
    }
    
}

export default Signup;
