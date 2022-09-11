import React from "react";

class Form3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: '' };
    }
    changeText(event) {
        this.setState({ message: event.target.value });
    }

    render() {
        return (
            <div>
                <h3>Event Handling</h3>
                <p><input type='text' id='message' onChange={this.changeText.bind(this)}/></p>
                <p>{this.state.message}</p>
            </div>
        );
    }
}
export default Form3;