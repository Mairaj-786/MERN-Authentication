import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

const Navbar = (props) => {
    const dispatch = useDispatch();
    const { token, user } = useSelector(state => state.authRegister)

    const logout = () => {
        localStorage.removeItem('mytoken');
        dispatch({ type: "LOGOUT" })
    }



    return (
        <div>
            <h2>Logo</h2>
            <div className="list w-100">
                {user ? <ul >
                    <li><Link>Welcome</Link></li>
                    <li><span>{user.name}</span></li>
                    <li><span onClick={logout}>Logout</span></li>
                </ul> :
                    <ul >
                        <li><Link>Register</Link></li>
                        <li><span>Login</span></li>
                    </ul>}
            </div>
        </div>
    )
}

export default Navbar
