import React, { useEffect, useState } from "react";
import axios from "./axios";
/*
function App1(){
    return(
        <div>
            <h1>Hello from App</h1>
            <img src='/uploads/1662391538116--default.jpg' alt=''></img>
            <img src={require('./uploads/1662391774499--image1.jpg').default} alt=''></img>                        
        </div>
    );
}
export default App1;
*/

function App1() {
    const [persons, setPersons] = useState("");
    useEffect(() => {
        axios.get("v1/persons/").then((response) => {
            setPersons(response.data);
        });
    }, []);

    return (
        <div>
            {
                persons.length > 0 && (
                    <ul>
                        {
                            persons.map(person => (
                                <div key={person._id}>
                                    <h3>NAME : {person.name}</h3>
                                    <h3>ADDRESS : {person.address}</h3>                                    
                                    <h3>{person.photo.url}</h3>
                                    <h3><img src='http://127.0.0.1/uploads/{person.photo}' alt=''/></h3>
                                    <hr />
                                </div>
                            ))
                        }
                    </ul>
                )}

        </div>

    )

}
export default App1;