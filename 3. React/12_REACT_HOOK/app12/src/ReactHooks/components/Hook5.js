import React, { useState, useEffect } from "react";

function Hook5() {
    const [user, setUser] = useState("Raj Rai");
  
    return (
      <>
        <h1>{`Component1- ${user}`}</h1>
        <Component2 user={user} />
      </>
    );
  }
  
  function Component2({ user }) {
    return (
      <>
        <h1>Component2 - {user}</h1>
        <Component3 user={user} />
      </>
    );
  }
  
  function Component3({ user }) {
    return (
      <>
        <h1>Component3 - {user} </h1>
        <Component4 user={user} />
      </>
    );
  }
  
  function Component4({ user }) {
    return (
      <>
        <h1>Component4 - {user}</h1>
        <Component5 user={user} />
      </>
    );
  }
  
  function Component5({ user }) {
    return (
      <>
        <h1>Component5 - {user}</h1>        
      </>
    );
  }
  export default Hook5;