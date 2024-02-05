const url = 'http://localhost:3000/users'
class LoginService {
    Login(payload: any) {
        console.log("payload", payload)
        return fetch(url+`?email=${payload?.email}&password=${payload?.password}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => 
            {return json} );

    }
    GetAllUsers() {
        return fetch(url).then((res) => res.json()).then((json) => {
            return json;
        })
    }
}
let loginService = new LoginService();
export default loginService;