import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';


class App extends Component  {

  state = {
    ninjas : [
      {name: 'Hex' , age:35 , belt:'black', id:1},
      {name: 'Hec' , age:25 , belt:'yellow', id:2},
      {name: 'Hat' , age:55 , belt:'red', id:3}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  render(){
  return (
    <div className="App">
    <h1>My first React App!</h1>
    <p> Lets Begin! </p>
    <Ninjas ninjas={this.state.ninjas} />
    <AddNinja addNinja={this.addNinja}/>
    </div>
  );
}
}

export default App;
