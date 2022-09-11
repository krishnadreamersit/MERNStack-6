import React, { Component } from 'react';

class Component2 extends Component {    
    render() {  
        const f1 = (str1)=>{
            alert(str1);
        }
        return (  
            <div>  
                <h2>Button Click Event-1</h2>
                <button onClick={()=>f1("Hello")}>Click Me</button>
            </div>  
        );  
    }
}
export default Component2;