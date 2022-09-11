import React from 'react';

class Component1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {msg:"Hello world of State!"}
    }
    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
            </div>
        )
    }
}
export default Component1;