import { useState } from "react";
import loginService from "../Service/LoginService";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { LoginAction } from "../store/Actions/Login";

const Login = ({ isAuth, LoginAction }: any) => {
    const [formData, setFormData] = useState<any>();
    const [users, setUsers] = useState<any>();
    const navigate = useNavigate();
    const handleLogin = async (e:any) => {
        e.preventDefault();
        loginService.GetAllUsers().then(async (res: any) => {
            setUsers(res);
            let result = findUser(formData);
            if (result) {
                const resultdata = JSON.stringify(result);
                localStorage.setItem('userData', resultdata);
                const resp = await LoginAction(formData)
                navigate('/');
            }
        });
    }
    const findUser = (credentials: { email?: string, mobile?: string, password: string }) => {
        if (credentials.email) {
            return users?.find((user: any) => user.email === credentials.email && user.password === credentials.password);
        } else if (credentials.mobile) {
            return users?.find((user: any) => user.mobile === credentials.mobile && user.password === credentials.password);
        }
        return null;
    }
    const handleChange = (e: any) => {
        const { name, value } = e?.target;
        setFormData({ ...formData, [name]: value })
    }
    return (
        <>
            <div className="card container mt-3 w-50">
                <form onSubmit={handleLogin}>
                    <div className="form-group mb-3">
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" id="email" className="form-control" onChange={handleChange} value={formData?.email} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" id="password" className="form-control" onChange={handleChange} value={formData?.password} />
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">Login</button>
                </form>

            </div>
        </>
    );
}
const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth
}) 
export default connect(mapStateToProps, { LoginAction })(Login);