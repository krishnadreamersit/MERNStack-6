import React, { Component } from 'react';

class App2 extends Component{
    render(){
        return(
            <div>
                <h1>Basic Calculation</h1>
                <p>Num1 : {this.props.n1}</p>
                <p>Num2 : {this.props.n2}</p>
                <p>Num1 : {Number(this.props.n1)+Number(this.props.n2)}</p>
            </div>
        );
    }
}

export default App2;