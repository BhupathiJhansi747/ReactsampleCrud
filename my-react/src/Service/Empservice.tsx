const url='http://localhost:3000/Employe'
class Empservice{
GetAllEmploye(){
    return fetch(url).then((res)=>res.json()).then((json)=>{
        return json;
    })
}

AddEmploye(payload: any) {
        console.log("payload", payload)
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                firstname: payload.firstname,
                lastname: payload.lastname,
                address:payload.address,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => 
            {return json} );

    }
UpdateEmployee(payload:any){
    return fetch(url+`/${payload.id}`,{
        method:'PUT',
        body:JSON.stringify({
            firstname:payload.firstname,
            lastname:payload.lastname,
            address:payload.address
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
        

    }).then((res)=>res.json()).then((json)=>{
        return json;
    });
}
DeleteEmploye(id:any){
   return fetch(url+`/${id}`,
   {
    method:'DELETE',
   })
}


}
let empservice=new Empservice();
export default empservice;