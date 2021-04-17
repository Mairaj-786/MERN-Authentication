import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// RegisterMethod
import { userRegister } from '../asyncMethod/authMethod';


const Register = (props) => {

    const dispatch = useDispatch();
    const { registerError, registerSuccess, loading, token } = useSelector(state => state.authRegister)


    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handleInput = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (registerError.length > 0) {
            registerError.map((error) => toast.error(error.msg))
        }
        if (token) {
            props.history.push('/')
        }
    }, [registerError, token])

    const submitForm = async (e) => {
        e.preventDefault();
        dispatch(userRegister(state))
    }
    return (
        <div className="mt-5 pt-5">
            <form onSubmit={submitForm} className="m-auto w-50 pt-5 mt-5 mb-4 p-4 border">
                <div class="form-group">
                    <input type="text" value={state.name} onChange={handleInput} name="name" class="form-control" placeholder="Name" />
                </div>
                <div class="form-group">
                    <input type="text" value={state.email} onChange={handleInput} name="email" class="form-control" placeholder="Email" />
                </div>
                <div class="form-group">
                    <input type="passowrd" value={state.password} onChange={handleInput} name="password" class="form-control" placeholder="passowrd" />
                </div>

                <div class="form-group">
                    <input type="submit" class="btn btn-success" value="Create" />
                </div>


            </form>
            <ToastContainer />
        </div>
    )
}

export default Register
