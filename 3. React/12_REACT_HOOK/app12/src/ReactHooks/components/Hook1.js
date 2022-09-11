import React, { useState } from 'react';  

class Hook extends React.Component {  
    constructor(props) {
      super(props);  
      this.state = {count: 0 };  
    }
    render() {  
      return (  
        <div>  
          <p><b>Clicked {this.state.count} times</b></p>  
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click Me!</button>
        </div>  
      );
    }
  }
  export default Hook;