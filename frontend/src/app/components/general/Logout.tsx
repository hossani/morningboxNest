import { logout } from '@/action/logout';
import React from 'react'

const Logout = () => {
  
  return (
    <form action={logout}>

    <button  className="px-5 py-2 text-sm rounded-full text-black  border-[#ffbe33] bg-[#ffbe33] hover:bg-[#ffbb00bd] hover:border-[#ffbb00bd] font-bold">
    Logout
  </button>  
  </form>
)
}

export default Logout