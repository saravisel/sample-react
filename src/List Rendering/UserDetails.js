import React from 'react'
import { format } from 'date-fns'

function UserDetails({cars}) {

    let {color, type, registration, capacity} = cars;

  return (
    <div>
        {/* <li> {color} {type} {format(registration, 'dd/mm/yyyy')} {capacity}</li> */}
        <table border= "1">
            <tbody>
                <tr>
                    <td> {color} </td>
                    <td> {type} </td>
                    <td> {format(registration, 'dd/mm/yyyy')} </td>
                    <td> {capacity} </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default UserDetails