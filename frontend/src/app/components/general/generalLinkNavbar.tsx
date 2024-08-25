'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const GeneralLinkNavbar = () => {
    const currentPath = usePathname();
    return (
      <>
        <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link 
                href="/"
                className={`${
                    currentPath === '/' ? 'visited:text-yellow-500' : 'text-[#fff]'
                  } hover:text-[#ffbb00ef]  text-[15px] block font-semibold `}
              >
                Home
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                href="/menu"
                className={`${
                    currentPath === '/menu' ? 'visited:text-yellow-500' : 'text-[#fff]'
                  } hover:text-[#ffbb00ef]  text-[15px] block font-semibold `}
              >
                Menu
              </Link>
            </li>
      </>
    )
}

export default GeneralLinkNavbar;
