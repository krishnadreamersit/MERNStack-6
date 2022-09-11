import React, {Component} from 'react';
import { useEffect, useState } from "react";
import Persons from './components/Persons';

class App2 extends Component {       
    render() {
        return (
            <Persons/>
        )
    }

    useState = {
        persons: []
    };
    componentDidMount() {
        // https://jsonplaceholder.typicode.com/posts?_limit=10
        // http://127.0.0.1:8000/api/persons/

        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(res => res.json())
            .then((data) => {
                alert(data);
                this.setState({ persons: data })
            })
            .catch(console.log)
    }
}
export default App2;