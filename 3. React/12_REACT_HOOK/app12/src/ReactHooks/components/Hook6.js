import React, { useState, createContext, useContext } from "react";
const UserContext = createContext()

function Hook6() {
  const [user, setUser] = useState("Raj Rai");
  return (
    <UserContext.Provider value={user}>
      <h1>{`Component1 - ${user}`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

function Component2() {
  const user = useContext(UserContext);
  return (
    <UserContext.Provider value={user}>
      <h1>{`Component2 - ${user}`}</h1>
      <Component3 user={user} />
    </UserContext.Provider>
  );
}

function Component3() {
  const user = useContext(UserContext);
  return (
    <UserContext.Provider value={user}>
      <h1>{`Component2 - ${user}`}</h1>
      <Component4 user={user} />
    </UserContext.Provider>
  );
}

function Component4() {
  const user = useContext(UserContext);
  return (
    <UserContext.Provider value={user}>
      <h1>{`Component2 - ${user}`}</h1>
      <Component5 user={user} />
    </UserContext.Provider>
  );
}

function Component5() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>{`Component5 - ${user}`}</h1>
    </div>
  );
}

export default Hook6;