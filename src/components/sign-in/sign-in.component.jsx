import React, {useState} from 'react';

import FormInput from "../form-input/form-input.component";

import './sign-in.styles.scss'
import CustomButton from "../custom-button/custom-button.component";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
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

                <CustomButton type='submit'>Sign In</CustomButton>
            </form>
        </div>
    )

};

export default SignIn;