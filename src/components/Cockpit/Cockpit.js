import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
      // if 2 persons then red, if 1 then red and bold using dynamic classes
      const assignedClasses = [];
      let btnClass = '';
      if(props.showPersons){

        btnClass = classes.Red;
      }

      if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
      }
      if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
      }
  return (
  <div className={classes.Cockpit}>
        <h1>Accounts Page</h1>
        < p className = {
          assignedClasses.join(' ')
        } > Accounts and Details </p>
        <button className={btnClass} onClick={this.togglePersonHandler} >Toggle Details</button>
        <button >Hell button</button>
  </div>
  )
}

export default cockpit;