import React from 'react'
import RowAppro from './row';

const TableApprob = () => {
  return (
    <>
    <div className="font-sans overflow-x-auto w-full">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-100 whitespace-nowrap">
      <tr>
        <th className="px-4 py-4 text-start text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Title
        </th>
       
        <th className="px-4 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Quantity
        </th>
        <th className="px-4 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
         Price
        </th>
        <th className="px-4 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Total
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
    <RowAppro/>
    <RowAppro/>
    <RowAppro/>
    <RowAppro/>

    </tbody>
  </table>
  <div className="border-t border-gray-300 pt-6 flex justify-end gap-4 px-3">
  <button type="button"
      className="px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200">Cancel</button>
  <button type="button"
      className="px-4 py-2 rounded-lg text-black text-sm border-none outline-none tracking-wide bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-500 ">Approved</button>
</div>
</div>

</>
  )
}

export default TableApprob;