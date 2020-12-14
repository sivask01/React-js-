import React, { Component } from 'react'
import './sign-up.styles.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit =async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert(" password and confirm password dont match!!!")
            return
        }
        try {   
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log("Counldnt signup", error.message);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className='sign-up'>
                <h2>I dont have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type="text" label="Display Name" name="displayName" value={this.state.displayName} handleChange={this.handleChange} required/>
                    <FormInput type="email" label="Email" name="email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput type="password" label="Password" name="password" value={this.state.password} handleChange={this.handleChange} required/>
                    <FormInput type="password" label="Confirm Password" name="confirmPassword" value={this.state.confirmPassword} handleChange={this.handleChange} required/>
                
                    <CustomButton type="submit"> Sign Up </CustomButton>
                </form>

            </div>
        )
    }
}

export default SignUp;