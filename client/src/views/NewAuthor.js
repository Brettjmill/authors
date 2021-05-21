import React, { useState } from 'react';

import axios from 'axios';
import { Link, navigate } from '@reach/router';

const NewAuthor = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newAuthor = {
            name: name,
        };

        axios
            .post('http://localhost:8000/api/authors', newAuthor)
            .then((res) => {
                navigate('/');
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
            <p>Add a new author:</p>
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
                    />
                </div>
                <button><Link to = '/'>Cancel</Link></button>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default NewAuthor;