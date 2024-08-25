'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const Connected = () => {
  const currentPath = usePathname();

  return (
    <>
     <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link
              href="/profile"
              className={`${
                currentPath === '/profile' ? 'visited:text-yellow-500' : 'text-[#fff]'
              } hover:text-[#ffbb00ef]  text-[15px] block font-semibold `}            >
              Profile
            </Link>
          </li>
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link
              href="/checkout"  
              className={`${
                currentPath === '/checkout' ? 'visited:text-yellow-500' : 'text-[#fff]'
              } hover:text-[#ffbb00ef]  text-[15px] block font-semibold `}            >
              Checkout
            </Link>
          </li>
          </>
  )
}

export default Connected