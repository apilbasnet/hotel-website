import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function loginpage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();



    const handleChange = (e) => {
        // console.log(e.target.name);

        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);

        }


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, 'email');
        console.log(password, 'password');


    }
    return (
        <div className='flex w-[100vw] h-[60vh] justify-center items-center'>


            <Form className='w-[30%]' onSubmit={handleSubmit} onChange={handleChange}>

                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 flex gap-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me " />
                    

                    <Link className='font-semibold ' to="/register"> Sign up</Link>
                    
                </Form.Group>

                <Button variant="primary" type="submit" className='outline-none bg-purple-500 text-white rounded-none'>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default loginpage;