import React, {useState } from "react";

function Form4() {
    const [txtID, setID] = useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(txtID);
        //send to file, dbms, api
        //receive from file, dbms, api
    }

    return (
        <div>
            <h3>Form-Submission</h3>
            <form onSubmit={handleSubmit}>
                <p>ID : <input type='text' name='txtID' value={txtID} onChange={(e)=>setID(e.target.value)}/></p>
                <p><input type='submit' value='SEND'/></p>
            </form>
        </div>
    );
}
export default Form4;