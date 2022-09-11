import React, { Component } from 'react';

class Component2 extends Component {    
    render() {  
        const f1 = (param1, param2)=>{
            alert(param2);
        }
        return (  
            <div>  
                <h2>Button Click Event-2</h2>
                <button onClick={(event)=>f1("Hello", event)}>Click Me</button>
            </div>  
        );  
    }
}
export default Component2;