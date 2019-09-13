import React from 'react'

const TableRows = ({data}) => {
  const newData = Object.entries(data)
  console.log(newData)
  return (
    <tr>
      <td>{newData[0][0]}</td>
      <td>{newData[0][1]}</td>
    </tr>
  )
}

export default TableRows