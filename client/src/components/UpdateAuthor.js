import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

const UpdateAuthor = (props) => {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => setName(res.data.name))
            .catch(err => console.log(err))
    },[])

    const onSubmitUpdate = (e) => {
        axios.put("http://localhost:8000/api/authors/" + id, {name})
            .then(res => {
                console.log(res)
                navigate("/home")
            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
        e.preventDefault();
    }

    return(
        <div>
            <div>
            <p className="display-3">Favorite Authors</p>
                <Link to="/home">Home</Link>
                <p>Edit an author:</p>
            </div>
            <form className="mx-auto w-25 mt-4 border p-3" onSubmit={onSubmitUpdate}>
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
export default UpdateAuthor;