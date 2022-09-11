import React from "react";

function Form2() {
    function f1(){
        alert("Hello world of Event");
    }
    function f2(str1){
        alert("Message: "+str1);
    }
    function f3(param1, param2){
        alert("Message: "+param1);
    }
    return (
        <div>
            <div>Form-2</div>
            <p>ID : <input type='number' name='txtID' id='txtID'></input></p>
            <p><input type='button' value='Click Me-1' onClick={f1}/></p>
            <p><input type='button' value='Click Me-2' onClick={()=>f2("Hello")}/></p>
            <p><input type='button' value='Click Me-3' onClick={(event)=>f3("Hello", event)}/></p>
        </div>
    );
}
export default Form2;