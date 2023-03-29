import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const AuthorForm = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", {name})
            .then(res => {
                console.log(res);
                navigate("/home")
            })
            .catch(err => setErrors(err.response.data.errors))
        setName("");
    }
    
    return (
        <div>
            <div>
            <p className="display-3">Favorite Authors</p>
                <Link to="/home">Home</Link>
                <p>Add a new author:</p>
            </div>
            <form className="mx-auto w-25 mt-4 border p-3" onSubmit={onSubmit}>
                <label>Name:</label>
                <input type="text" className="form-control mt-2" onChange={e => setName(e.target.value)} value={name}></input>
                {errors.name ? 
                <p className="text-danger">{errors.name.message}</p>
                : null
                }
                <div className="mt-2">
                    <input type="submit" className="btn btn-primary"></input>
                    <button className="btn btn-danger" onClick={e => navigate("/")}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default AuthorForm;