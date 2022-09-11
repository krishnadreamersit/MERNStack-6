import React, { useState, useEffect } from 'react'

const Persons = () => {
    const [post, getPost] = useState([]);
    const API = 'http://127.0.0.1:8000/api/persons/';
    
    const fetchPost = () => {
        fetch(API)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                getPost(res)
            })
    }
    
    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <>
            <h2>All Persons</h2>
            <ul>
                {
                    post.map((item, i) => {
                        return <li key={i}>{item.name}</li>
                    })
                }
            </ul>
        </>
    )
};

export default Persons