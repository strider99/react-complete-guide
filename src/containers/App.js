import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component {
  state = {
    persons : [
      {id:'1', name: 'Om', age: 28},
      {
        id: '2',
        name: 'Akash',
        age: 26
      },
      {
        id: '3',
        name: 'Someone Else',
        age: 21
      }
    ],
    someOther: 'some other value',
    showPersons: false
  }



  nameChangedHandler = (event, id) => {
    // Get the index for person id matching the passed id
    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id;
    });

    // Get the person from the personIndex. we dont want to mutate the state directly so we use spread
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
    console.log("i am reaching");
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    // Another method
    const persons = [...this.state.persons];

    persons.splice(personIndex,1); //removes one element from the array
    this.setState({
      persons
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'

      }
    };
    let persons = null;
    if(this.state.showPersons){

      persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />;
      style.backgroundColor = 'red';
    }




    return (
      <div className={classes.App}>
        <Cockpit
        showPersons = {this.state.showPersons}
        persons = {this.state.persons} clicked={this.togglePersonHandler} />

        {persons}
      </div>
    );
  }
}

export default App;
