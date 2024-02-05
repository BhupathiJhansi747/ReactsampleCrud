import { useEffect, useState } from "react";
import empservice from "../Service/Empservice";
import { useLocation, useNavigate } from "react-router-dom";

const Add = () => {
    const location = useLocation();

    const values = {
        firstname: '',
        lastname: '',
        address: ''

    }
    const [formData, setFormData] = useState<any>(location?.state?.item || values)
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const navigate = useNavigate();

    const handlesubmit = (e: any) => {
        e.preventDefault()
        if (isEditing) {
            empservice.UpdateEmployee(formData);
        } else {
            empservice.AddEmploye(formData);
        }
        setFormData(values)
        navigate("/")

    }
    useEffect(() => {
        if (location?.state?.item) {
            setIsEditing(true)

        }
    }, [])

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    return (
        <>
            <div className="card container mt-3 w-50">
                <form onSubmit={handlesubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="firstname">FirstName</label>
                        <input type="text" name="firstname" id="firstname" className="form-control" onChange={handleChange} value={formData?.firstname} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="firstname">LastName</label>
                        <input type="text" name="lastname" id="lastname" className="form-control" onChange={handleChange} value={formData?.lastname} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="firstname">Address</label>
                        <input type="text" name="address" id="address" className="form-control" onChange={handleChange} value={formData?.address} />
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">{isEditing ? "Update" : "submit"}</button>
                </form>

            </div>
        </>
    );
}

export default Add;