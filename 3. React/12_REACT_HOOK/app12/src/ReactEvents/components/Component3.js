import React, { Component } from 'react';

class Component1 extends Component { 
    constructor(props) {  
        super(props);  
        this.state = {  
            txt1: ''  
        };  
    }  
    changeText(event) {  
        this.setState({  
            txt1: event.target.value  
        });  
    }   
    
    render() {  
        return (  
            <div>  
                <h2>Key Press Event-1</h2>
                <label htmlFor="name">Enter any text: </label>  
                <input type="text" id="txt1" onChange={this.changeText.bind(this)}/>  
                <h4>Your Text : { this.state.txt1 }</h4>
            </div>  
        );  
    }
}
export default Component1;