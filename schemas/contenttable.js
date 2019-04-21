import React from 'react'

const TablePreview = ({value}) => {
  const {table} = value
  return (
    <table>
      <tbody>
        {table.rows.map((row,ri) => (
          <tr key={ri}>
            {row.cells.map((cell,ci) => <td key={ci}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default {
    name: 'contenttable',
    title: 'Table',
    type: 'object',
    fields: [
      {
        name: 'table',
        title: 'Table',
        type: 'table'
      }
    ],
    preview: {
      select: {
        table: 'table'
      },
      component: TablePreview
    }
  }