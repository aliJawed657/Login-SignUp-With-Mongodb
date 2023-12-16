import React, { useState } from "react";
import Signup from "./Signup";
import { Link } from "react-router-dom";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css"



function Login({ onLogin }) {
    const [emails, setEmail] = useState('');
    const [passwords, setPassword] = useState('');


    async function loginBtn() {
        onLogin(emails, passwords)

        try {

            const result = await axios.post("http://localhost:3001/Login", { username: emails, password: passwords });

            console.log("Login successfully", result.data)
            setEmail(result.data.username);
            setPassword(result.data.password);

        } catch (err) {
            console.log(err)
        }

    }
    return (
        <div className="Login">
            <Form className='shadow-none p-3 mb-5 bg-light rounded newForm'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="inpu" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="inpu" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Link to={"/success"}> <Button variant="primary" onClick={loginBtn} type="submit">
                    Login
                </Button> </Link>
            </Form>
        </div >
    );
}

export default Login;
















