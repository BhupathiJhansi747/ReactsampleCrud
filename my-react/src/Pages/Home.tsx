import { useEffect, useState } from "react";
import empservice from "../Service/Empservice";
import { useNavigate } from "react-router-dom";
import { Router } from "react-router-dom";

const Home = ({name}:any) => {
    const [employe, setEmploye] = useState<any>([])
    const navigate=useNavigate();
    const handleEdit = (item: any) => {
        navigate("/edit",{state:{item}})
    }
    const GetAllEmploye = () => {
        empservice.GetAllEmploye().then((res: any) => {
            setEmploye(res)
        })
    }
    const handleDelete = (id: any) => {
        empservice.DeleteEmploye(id);
        GetAllEmploye()


    }
    useEffect(() => {
        GetAllEmploye()

    }, [])
    


    return (<>
        <div className="card container mt-3">
            <h1>{name}</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        employe?.map((item: any) =>
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.address}</td>
                                <th><button className="btn btn-primary" onClick={() => handleEdit(item)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button></th>
                            </tr>
                        )}



                </tbody>
            </table>
        </div>

        
    </>);
}

export default Home;