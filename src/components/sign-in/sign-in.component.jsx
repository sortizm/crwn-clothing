import React, {useState} from 'react';

import FormInput from "../form-input/form-input.component";

import './sign-in.styles.scss'
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../firebase/firebase.utils";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();


        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    label='Email'
                    value={email}
                    required
                    onChange={event => setEmail(event.target.value)}/>
                <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    value={password}
                    required
                    onChange={event => setPassword(event.target.value)}/>

                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
    )

};

export default SignIn;