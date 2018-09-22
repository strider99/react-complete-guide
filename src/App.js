import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons : [
      {name: 'Om', age: 28},
      {name: 'Akash', age: 26},
      {name: 'Someone Else', age: 21}
    ],
    someOther: 'some other value',
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1); //removes one element from the array
    this.setState({
      persons
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
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person click={this.deletePersonHandler.bind(this,index)} name={person.name} age={person.age} />
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} /> */}

          {/* <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} /> */}

          {/* <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}

        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <button style={style} onClick={this.togglePersonHandler} >Toggle Name</button>
        {persons}



        {/* <Person name="Jimbo" >My hobbies are horse riding.</Person> */}
      </div>
    );
  }
}

export default App;
