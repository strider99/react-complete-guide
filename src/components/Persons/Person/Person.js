import React  from 'react';
import classes from  './Person.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click} >I am a person. My name is {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>

      <input type="text" onChange={props.changed} value={props.name} />

    </div>
  )
}

export default person;