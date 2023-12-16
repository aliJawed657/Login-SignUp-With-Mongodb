import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./index.css"

function Signup({ onSignup }) {
  const [newEm, newEmail] = useState('')
  const [newpassword, newPassword] = useState('')

  async function signup() {
    onSignup(newEm, newpassword)

    try {
      const result = await axios.post("http://localhost:3001/", { username: newEm, password: newpassword });

      console.log("user created successfully", result.data)

      newEmail(result.data.username);
      newPassword(result.data.password);


    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='Signup'>
      <Form className='shadow-none p-3 mb-5 bg-light rounded newform'>
        <Form.Group className="mb-3" >
          <Form.Label>Username</Form.Label>
          <Form.Control className='input' type="user" placeholder="Enter Username" />
          <Form.Label>Email address</Form.Label>
          <Form.Control className='input' onChange={(e) => newEmail(e.target.value)} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className='input' onChange={(e) => newPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Link to={"/Login"}> <Button variant="primary" onClick={signup} type="submit">
          Sign Up
        </Button> </Link>
      </Form>

    </div>
  );
}

export default Signup;





















