import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link, navigate } from '@reach/router';

const EditAuthor = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/authors/' + props.id)
            .then((res) => {
                setName(res.data.name);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newAuthor = {
            name: name,
        };

        axios
            .put('http://localhost:8000/api/authors/' + props.id, newAuthor)
            .then((res) => {
                navigate('/authors/');
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    };

    return (
        <div style = {{ width: '50%', margin: '0 auto' }}>
            <h1>Favorite authors</h1>
            <Link to = '/'>Home</Link>
            <p>Edit this author:</p>
            <form 
                onSubmit = {(event) => {
                    handleSubmit(event);
                }}
            >
                <div>
                    <label>Name: </label>
                    {errors?.name && (
                        <span style={{ color: 'red' }}>{errors?.name?.message}</span>
                    )}
                    <input
                        onChange = {(event) => {
                            setName(event.target.value);
                        }}
                        type = 'text'
                        value = {name}
                    />
                </div>
                <button><Link to = '/'>Cancel</Link></button>
                <button>Update</button>
            </form>
        </div>
    );
};

export default EditAuthor;