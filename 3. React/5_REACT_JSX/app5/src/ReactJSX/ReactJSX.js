// import React from 'react';
// Example-1
/*
ReactDom.render(<h1>JSX is an extension of the JavaScript-1</h1>, document.getElementById("root"));
*/

// Example-2
/*
const element1 = React.createElement('h1', {}, 'JSX is an extension of the JavaScript-2');
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(element1);
*/

// Example-3 - Nested Elements in JSX
/*
const component1 = (
    <div>
        <h1>Heading-1</h1>
        <h2>Heading-2</h2>
        <p>JSX is an extension of the JavaScript-2</p>
    </div>
);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(component1);
*/

// Example-4 - fragment
/*
const component1 = (
    <>
        <h1>Heading-1</h1>
        <h2>Heading-2</h2>
        <p>JSX is an extension of the JavaScript-2</p>
    </>
);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(component1);
*/

// Example-5 - Attribute - className
/*
const component1 = (
    <>
        <h1>Heading-1</h1>
        <h2>Heading-2</h2>
        <p className='style1'>JSX is an extension of the JavaScript-2</p>
    </>
);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(component1);
*/

// Example-6 - Conditionals
/*
let num1 = 5;
const component1 = (
    <>
        <h1>Heading-1</h1>
        <h2>Heading-2</h2>
        <p className='style1'>{(num1)==5?true:false}</p>
    </>
);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(component1);
*/

// Example-7 - Conditionals
/*
let num1 = 5;
let result = false;
if(num1 === 5){
    result=true;    
}
const component1 = (
    <>
        <h1>Heading-1</h1>
        <h2>Heading-2</h2>
        <p className='style1'>Result = {result}</p>
    </>
);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(component1);
*/

// Example-8 - Comments
/*
const component1 = (
    <>
        <h1>Heading-1</h1>        
        {/* <h2>Heading-1</h2> *//*}
<p className='style1'>JSX is an extension of the JavaScript-2</p>        
</>
);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(component1);
*/

// Example-9 - Custom jsx file
import React from 'react';
import Component1 from './components/Component1';

var ReactJSX = function () {
    return (
        <div>
            <Component1 />
        </div>        
    )
}

export default ReactJSX;