import React, { Component } from 'react'
import UserDetails from './UserDetails';

export class UserList extends Component {

  render() {
    const namesList = ["John", "Andrew", "Mark", "Thomas"];

    const name = namesList.map(
        (names, index) => <li> {index} {names} </li>
    );

    const cars = [
        {
          "color": "purple",
          "type": "minivan",
          "registration": new Date('2017-01-03'),
          "capacity": 7
        },
        {
          "color": "red",
          "type": "station wagon",
          "registration": new Date('2018-03-03'),
          "capacity": 5
        },
        {
            "color": "blue",
            "type": "SUV",
            "registration": new Date('2018-03-04'),
            "capacity": 6
        }];

    const userlist = cars.map((car, index) => {
        return <UserDetails key= {index} cars= {car}/>
    });
    return (
      <div>
          <h1> List of Users</h1>
          {/* {name} */}
          <table border= '1'>
              <thead>
                  <tr>
                      <th> color</th>
                      <th> type</th>
                      <th> registration</th>
                      <th> capacity</th>
                  </tr>
              </thead>
          </table>
          {userlist}
      </div>
    )
  }
}

export default UserList