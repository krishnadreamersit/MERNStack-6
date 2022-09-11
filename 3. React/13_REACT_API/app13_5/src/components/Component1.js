import React from "react";

class Component1 extends React.Component {    
    render(){
        return(
            <div key ={this.props._id}>
                <h2>Person Details</h2>
                <h4>ID : {this.props.id}</h4>
                <h4>NAME : {this.props.name}</h4>
                <h4>DESC : {this.props.desc}</h4>
                <p><img src={this.props.img} alt=''/></p>
                <hr/>
            </div>
        );
    }
}
export default Component1;