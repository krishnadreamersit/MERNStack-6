import React from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";

class ReactComponents extends React.Component{
    render(){
        return(
            <div>
                <Component1/>
                <Component2/>
                <Component3/>
            </div>
        );
    }
}
export default ReactComponents;