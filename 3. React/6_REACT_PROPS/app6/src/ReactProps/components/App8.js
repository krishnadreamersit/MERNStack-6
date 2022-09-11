import React, { Component } from 'react';

class App8 extends Component {
    render() {
        const marks = this.props.marks;
        var total = marks[0]+marks[1]+marks[2];        
        var strReslt = "PASS";
        // if(marks[0]>=40 && marks[1]>=40 && marks[2]>=40){
        //     strReslt="PASS";
        // }
        if(marks[0]<40 && marks[1]<40 && marks[2]<40){
            strReslt="FAIL";
        }        
        return (
            <div>
                <h1>Logical && or || Operator</h1>
                <p>Total : {total}</p>
                <p>Result : {strReslt}</p>
            </div>
        );
    }
}

export default App8;