import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons : [
      {name: 'Om', age: 28},
      {name: 'Akash', age: 26},
      {name: '', age: 21}
    ],
    someOther: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName)  => {
    console.log(this);
    this.setState({
      persons: [
        {
          name: newName,
          age: 14
        }, {
          name: 'Akash HS',
          age: 13
        },
        {
          name: 'Meh',
          age: 21
        }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Omprakash', age: 28},
        {name: event.target.value, age: 24},
        {name: 'Meh', age: 21}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <button style={style} onClick={this.togglePersonHandler} >Toggle Name</button>
        { this.state.showPersons ?
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} />

          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

        </div> : null
        }


        {/* <Person name="Jimbo" >My hobbies are horse riding.</Person> */}
      </div>
    );
  }
}

export default App;
