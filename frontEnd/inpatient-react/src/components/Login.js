import React, { useState, useEffect } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useFetchLogin } from '../hooks';
import './Login.css'

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const updateUserName = event => {
        setUserName(event.target.value);
    }
    const updatePassword = event => {
        setPassword(event.target.value);
    }
    function validateForm() {
        return (userName.length > 0 && password.length > 0);
    }

    const loginResponse = useFetchLogin('http://localhost:3000/user/login', { 'userName': userName, 'password': password });
    const response = () => {
        console.log(loginResponse);
    }
    return (
        <div className='Login'>
            <h2> Login</h2>
            <form onSubmit={response()}>
                <FormGroup controlId='userName' bsSize='large' >
                    <ControlLabel>UserName</ControlLabel>
                    <FormControl
                        autoFocus
                        value={userName}
                        type='text'
                        onChange={updateUserName} />
                </FormGroup>
                <FormGroup controlId='userName' bsSize='large'>
                    <ControlLabel>
                        Password
            </ControlLabel>
                    <FormControl 
                    autoFocus
                        value={password}
                        type='password'
                        onChange={updatePassword} />
                </FormGroup>

                <br />
                <Button block bsSize='large' type='submit' disabled={!validateForm()}>
                    Login
                    </Button>
            </form>
        </div>
    )
}

export default Login;