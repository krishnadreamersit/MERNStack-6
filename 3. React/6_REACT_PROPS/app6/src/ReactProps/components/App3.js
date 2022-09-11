import React, { Component } from 'react';

class App3 extends Component{
    render(){
        return(
            <div>
                <h1>Personal Info-1</h1>
                <p>ID : {this.props.id}</p>
                <p>NAME : {this.props.name}</p>
                <p>ADDRESS : {this.props.address}</p>
                <p>EMAIL : {this.props.email}</p>
                <p>PHONE : {this.props.phone.toString()}</p>
                <p>DATE : {this.props.date.toString()}</p>
            </div>
        );
    }
}

export default App3;