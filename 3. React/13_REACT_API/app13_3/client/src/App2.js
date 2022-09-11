import React, { Component } from 'react';

class App2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      records: []
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(records => {
        this.setState({
          records: records
        })
      })
      .catch(error => console.log(error))
  }

  renderListing() {
    let recordList = []
    this.state.records.map(record => {
      return recordList.push(`<li key={record.id}>{record.name}</li>`)
    })

    return recordList;
  }

  render() {
    return (
      `<ul>
            {this.renderListing()}
        </ul>`
    );
  }
}
export default App2;

/*
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
*/
// export default App;