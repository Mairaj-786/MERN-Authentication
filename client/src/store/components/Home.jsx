import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
const Home = (props) => {

    const { token } = useSelector(state => state.authReducers)

    useEffect(() => {
        if (!token) {
            props.history.push('/register')
        }
    }, [token])


    return (
        <div>
            Home
        </div>
    )
}

export default Home
