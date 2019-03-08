import React, { Component } from 'react';
 
 function Welcome(props){
   return <h1>Welcome to CryptoDash</h1>
 }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome/>
      </div>
    );
  }
}

export default App;
