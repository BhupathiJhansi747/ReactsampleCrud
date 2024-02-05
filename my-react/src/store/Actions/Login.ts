import loginService from "../../Service/LoginService";

export const LoginAction = (payload: any) => async (dispatch: any) => {
    try {
        const response = await loginService.Login(payload);
        dispatch({ type: 'LOGIN_SUCCESS', payload: response });
        return response;
    }
    catch (err: any) {
        dispatch({ type: 'LOGIN_FAIL', payload: 'Unable to Login at this moment'});
    }
}