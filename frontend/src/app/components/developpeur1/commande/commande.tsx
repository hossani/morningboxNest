import React from 'react'
import CardTable from './card'

const ListCommande = () => {
  return (
    <div className="font-[sans-serif] overflow-x-auto w-full">
    <table className="min-w-full bg-white">
      <thead className="whitespace-nowrap">
        <tr>
          
          <th className="p-4 text-center text-sm font-semibold text-gray-800">
            ID_Commande
          </th>
          <th className="p-4 text-center text-sm font-semibold text-gray-800">
            Status
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 fill-gray-500 inline cursor-pointer ml-2"
              viewBox="0 0 401.998 401.998"
            >
              <path
                d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                data-original="#000000"
              />
            </svg>
          </th>
          <th className="p-4 text-center text-sm font-semibold text-gray-800">
            Customer
      
          </th>
          <th className="p-4 text-center text-sm font-semibold text-gray-800">
            Phone number
          </th>
         
          <th className="p-4 text-center text-sm font-semibold text-gray-800">
            Total price
        
          </th>
          <th className="p-4  text-sm font-semibold text-gray-800 text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="whitespace-nowrap">
      <CardTable/>
      <CardTable/>
      <CardTable/>
      <CardTable/>

      </tbody>
    </table>
  </div>
  

  )
}

export default ListCommande