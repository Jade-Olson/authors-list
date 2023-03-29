import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const AuthorList = (props) => {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    },[])

    const deleteAuthor = (id) => {
        axios.delete("http://localhost:8000/api/authors/" + id)
            .then(res => setAuthors(authors.filter(author => author._id !== id)))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div>
                <p className="display-3">Favorite Authors</p>
                <Link to="/new">Add an author</Link>
                <p>We have quotes by:</p>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Author</th>
                            <th>Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.length > 0 && authors.map((author, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{author.name}</td>
                                        <td>
                                            <button className="btn btn-primary m-1" onClick={e => navigate(`/edit/${author._id}`)}>Edit</button>
                                            <button className="btn btn-danger" onClick={e => deleteAuthor(author._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AuthorList;