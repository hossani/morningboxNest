import React from 'react'
import Row from './row'

const TableCrud = () => {
  return (
    <div className="font-sans overflow-x-auto w-full">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-100 whitespace-nowrap">
      <tr>
        <th className="px-4 py-4 text-start text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Title
        </th>
        <th className="px-0 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Description
        </th>
        <th className="px-4 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Image
        </th>
        <th className="px-4 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
         Price
        </th>
        <th className="px-4 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
    <Row/>
    <Row/>


    <Row/>
    </tbody>
  </table>
</div>

  )
}

export default TableCrud