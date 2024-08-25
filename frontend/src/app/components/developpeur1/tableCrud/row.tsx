import React from 'react'

const Row = () => {
  return (
      <tr>
        <td className="px-4 py-4 text-sm text-gray-800 text-start">John Doe</td>
        <td className="px-0 py-4 text-sm text-gray-800 text-center ">    
            <button type="button" className="text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">More</button>
        </td>
        <td className="px-4 py-4 text-sm text-gray-800  ">
            <div className="  flex justify-center ">
            <img src='https://readymadeui.com/profile_4.webp' className="w-9 h-9 rounded-md " />
            </div>
        </td>
        <td className="px-4 py-4 text-sm text-gray-800 text-center ">2022-05-15</td>
        <td className="px-4 py-4 text-sm text-gray-800 text-center ">
          <button className="text-blue-600 mr-4">Edit</button>
          <button className="text-red-600">Delete</button>
        </td>
      </tr>
  )
}

export default Row