import React from 'react';
import Person from './Person/Person';


const persons = (props) => {
  return (
    props.persons.map((person, index, id) => {
      return <Person
      key = {
        person.id
      }
      click = {
        props.clicked.bind(this, index)
      }
      name = {
        person.name
      }
      age = {
        person.age
      }
      changed = {
        (event) => props.changed(event, person.id)
      }
      />
    })

  );
}
export default persons;