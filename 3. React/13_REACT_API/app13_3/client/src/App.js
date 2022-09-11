import React, { useEffect, useState } from "react";
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    }
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/v1/persons/`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  render() {
    return (
      <div>
        <h1>Persons</h1>
        {
          this.state.persons.map(person =>
            <li>
              {person._id} |
              {person.name} |
              {person.address} |
              {person.photo}                   
              <img src={process.env.PUBLIC_URL+'/uploads/'+person.photo} alt='' width='25%'/>                       
            </li>            
          )
        }
      </div >
    )
  }
}
export default App;