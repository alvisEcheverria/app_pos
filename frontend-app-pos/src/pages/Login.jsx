import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { setRole } from '../store/slices/role.slice';
import { useDispatch } from 'react-redux';

const Login = () => {

    const {register, handleSubmit, reset} = useForm();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const submit = (data) => {
        axios.post('http://localhost:8000/api/v1/auth/login', data)
            .then(res =>{ 
                    localStorage.setItem('token', res.data.token)
                    dispatch(setRole(res.data))
                    navigate('/dashboard')
                })
            .catch(error => {
                if(error.response.status === 400){
                    alert(error.response.data.message)
                }
            })

       reset({
            userName: '',
            password: ''
       })
    };

    return (

        <div>
            <h1 className='text-center m-3'>SIGN IN</h1>
                <p className='border text-center'>
                    Test User
                    <br />
                    User: admin
                    <br />
                    Password: admin123
                </p>
            <form onSubmit={handleSubmit(submit)}>
                < fieldset className="m-3">
                    <label>User</label>
                    <input type="text" placeholder="Enter email" 
                    {...register('userName')}
                    style={{height: '40px'}}
                    />
                </fieldset>

                <fieldset className="m-3">
                    <label>Password</label>
                    <input type="password" placeholder="Password" 
                    {...register('password')}
                    style={{height: '40px'}}
                    />
                </fieldset>
                <button type="submit" style={{width: '100%'}}>
                        Submit
                </button>
            </form>
        </div>
    );
};

export default Login;