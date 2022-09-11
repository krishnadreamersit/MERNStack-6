import React, { Component } from 'react';

class App5 extends Component {
    render() {
        return (
            <div>
                <h1>List of Fruits</h1>
                <ul>
                    {this.props.fruits.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default App5;