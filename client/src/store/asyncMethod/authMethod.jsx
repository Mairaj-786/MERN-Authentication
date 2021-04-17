
import axios from 'axios';


export const userRegister = (state) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        dispatch({ type: "SET_LOADER" })
        try {
            const { data } = await axios.post('http://127.0.0.1:5000/register', state, config)
            console.log(data)
            localStorage.setItem('mytoken', data.token)
            dispatch({ type: "SET_TOKEN", payload: data.token })
        } catch (error) {
            dispatch({ type: "CLOSE_LOADER" })
            dispatch({ type: "REGISTER_ERROR", payload: error.response.data.errors })
            console.log(error.response)
        }

    }
}