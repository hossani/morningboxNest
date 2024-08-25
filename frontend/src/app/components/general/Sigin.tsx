import { login } from '@/action/logout';
import React from 'react'

const Sigin = () => {

  return (
    <form action={login}>

<button className="px-5 py-2 text-sm rounded-full text-black  border-[#ffbe33] bg-[#ffbe33] hover:bg-[#ffbb00bd] hover:border-[#ffbb00bd] font-bold">
            Register/Login
          </button>  
          </form>
)
}

export default Sigin;