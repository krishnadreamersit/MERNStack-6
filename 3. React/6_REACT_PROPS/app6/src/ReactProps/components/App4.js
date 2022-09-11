import React, { Component } from 'react';

class App4 extends Component{
    render(){
        return(
            <div>
                <h1>Personal Info-2</h1>
                <p>ID : {this.props.data.id}</p>
                <p>NAME : {this.props.data.name}</p>
                <p>ADDRESS : {this.props.data.address}</p>
                <p>EMAIL : {this.props.data.email}</p>
                <p>PHONE : {this.props.data.phone.toString()}</p>
                <p>DATE : {this.props.data.date.toString()}</p>
            </div>
        );
    }
}

export default App4;