import React, { useEffect, useState } from "react";
import axios from "../axios";

//Hello World
/*
function App1() {
    const [result, setResult] = useState("");
    useEffect(() => {
        axios.get("api/hello").then((response) => {
            setResult(response.data);
        });
    }, []);

    return (
        <div><h1>{result}</h1></div>
    )
}
export default App1;
*/

function App1() {
    useEffect(() => {
        axios.get("/images").then((response) => {
            setRecords(response.data);
            console.log(response.data[0].name, response.data[0].desc, response.data[0].img);
        });
    }, []);    
    return (
        <div><h1>{records[0].name}</h1></div>
    )
}
export default App1;