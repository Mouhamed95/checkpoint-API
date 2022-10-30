import React from 'react'

export const TableRow = ({ el }) => {

    return (
          <table></table>
        <tr>
            <th scope="row">{el.id}</th>
            <td>{el.name}</td>
            <td>{el.username}</td>
            <td>{el.email}</td>
            <td>{el.address.city}</td>
            <td>{el.phone}</td>
            <td>{el.company}</td>

        </tr>
    )
}

export default TableRow



