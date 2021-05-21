import React, { useEffect, useState } from 'react';

import { Link } from '@reach/router';
import axios from 'axios';

const AllAuthors = (props) => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/authors')
            .then((res) => {
                setAuthors(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deleteAuthor = (authorToDel) => {
        axios
            .delete('http://localhost:8000/api/authors/' + authorToDel._id)
            .then((res) => {
                const filteredAuthors = authors.filter((auth) => {
                    return auth !== authorToDel;
                });
                
                setAuthors(filteredAuthors);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div style = {{ width: '50%', margin: '0 auto' }}>
            <h1>Favorite authors</h1>
            <Link to = '/authors/new'>Add an author</Link>
            <p>We have quotes by:</p>
            <div key= { authors._id }>
                <table>
                    <thead>
                        <tr>
                            <td>Author</td>
                            <td>Actions available</td>
                        </tr>
                    </thead>
                    {authors.sort().map((auth) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{ auth.name }</td>
                                    <td>
                                        <button><Link to = {`/authors/${auth._id}/edit`}>Edit</Link></button>
                                        <button onClick = {(event) => { deleteAuthor(auth) }}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
        </div>
    )

};

export default AllAuthors;