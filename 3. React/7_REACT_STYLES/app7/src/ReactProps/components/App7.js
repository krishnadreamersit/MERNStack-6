import React, { Component } from 'react';

class App7 extends Component {
    render() {
        const result = this.props.result;
        var strReslt = "FALSE";
        if (result === true) {
            strReslt = "TRUE"
        }
        return (
            <div>
                <h1>If Statement</h1>
                <p>{strReslt}</p>
            </div>
        );
    }
}

export default App7;