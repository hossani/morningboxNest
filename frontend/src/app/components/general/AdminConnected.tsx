'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const AdminConnected = () => {
  const currentPath = usePathname();

  return (
    <>
     <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link href='/addMeal'
  className={`${
    currentPath === '/addMeal' ? 'visited:text-yellow-500' : 'text-[#fff]'
  } hover:text-[#ffbb00ef]  text-[15px] block font-semibold `}            >
              Dashboard
            </Link>
          </li>
 
    </>
    
  )
}

export default AdminConnected