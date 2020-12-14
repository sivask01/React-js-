import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit =async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch (error) {
            console.log("counldnt signIn", error.message)
        }
        
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className='sign-in'>
                <h2> I already have an account </h2>
                <span>Sign In with your emaail and password </span>

                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput type="email" name="email" value={this.state.email} label="Email" handleChange={this.handleChange} required />
                    
                    <FormInput type="password" name="password" value={this.state.password} label="Password" handleChange={this.handleChange} required />
                    
                    <div className='buttons'>
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={ SignInWithGoogle } isGoogleSignIn> sign in with Google  </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}
export default SignIn;