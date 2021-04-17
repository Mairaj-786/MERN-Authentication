import jwt_decode from "jwt-decode";
const initState = {
    loading: false,
    registerError: [],
    registerSuccess: [],
    loginMessage: [],
    token: '',
    user: ''
};

const verifyToken = (token) => {
    const decodedToken = jwt_decode(token);
    const expireIn = new Date(decodedToken.exp * 1000);
    if (new Date() > expireIn) {
        localStorage.removeItem('token')
    } else {
        return decodedToken
    }


    // else {

    //     initState.token = token;
    //     const { user } = decodedToken;
    //     initState.user = user;

    // }

}

const token = localStorage.getItem('mytoken');
if (token) {
    const decoded = verifyToken(token);

    initState.token = token;
    const { user } = decoded;
    initState.user = user;
}



const authRegister = (state = initState, action) => {
    if (action.type === 'SET_LOADER') {
        return {
            ...state,
            loading: true
        }
    } else if (action.type === 'CLOSE_LOADER') {
        return {
            ...state,
            loading: false
        }
    } else if (action.type === "REGISTER_SUCCESS") {
        return {
            ...state,
            registerSuccess: action.payload
        }
    }
    else if (action.type === 'REGISTER_ERROR') {
        return {
            ...state,
            registerError: action.payload
        }
    }
    // logout
    else if (action.type === "LOGOUT") {
        return {
            ...state,
            token: '',
            user: ''
        }

    }
    // instantly Redirect to home page after login or register
    else if (action.type === "SET_TOKEN") {
        const decoded = verifyToken(action.payload)
        const { user } = decoded
        return {
            ...state,
            token: action.payload,
            user: user
        }
    } else {

        return state;
    }

};

export default authRegister;
