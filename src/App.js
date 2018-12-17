import React, { Component } from 'react';
import './App.css';

const TITLE = 'HKEMC';

class App extends Component {
  componentDidMount(){
    document.title = TITLE;
  }

  render() {
    return (
     <div>

     </div>
    );
  }
}

export default App;
