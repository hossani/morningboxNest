import React from 'react'

const CardTable = () => {
  return (
    <tr className="odd:bg-gray-50">
    <td className="p-4 text-sm text-gray-800 text-center">The Walt Disney</td>
    <td className="p-4 text-sm text-yellow-600  text-center">Pending</td>
    <td className="p-4 text-sm text-gray-800 text-center">Gold</td>
    <td className="p-4 text-sm text-gray-800 text-center">9956</td>
    <td className="p-4 text-sm text-gray-800 text-center">9956</td>
    <td className="p-4 text-center ">
    <button type="button" className="text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Validate</button>
    </td>
  </tr>
  )
}

export default CardTable