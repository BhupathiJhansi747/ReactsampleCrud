const initialValues: any = {
    user: {},
    isAuth: false,
    error: ''
}
const LoginReducer = (state = initialValues, action: any) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isAuth: true,
                error: ''
            }
        case 'LOGIN_FAIL':
            return {
                ...state,
                user:{},
                isAuth: false,
                error: action.payload
            }
        default: return state;
    }
}
export default LoginReducer;