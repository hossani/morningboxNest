import React from 'react'

const CardTrack = () => {
  return (
    <div className="space-y-4 p-6">
          <div className="flex items-center gap-6">
            <a href="#" className="h-14 w-14 shrink-0">
              <img
                className="h-full w-full dark:hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                alt="imac image"
              />
              <img
                className=" h-full w-full"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                alt="imac image"
              />
            </a>
            <div
              className="min-w-0 flex-1 font-medium text-gray-900 "
            >
              {" "}
              PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24"
              Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, macOS Sonoma, Blue,
              Keyboard layout INT{" "}
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              <span className="font-medium text-gray-900 ">
                Product ID:
              </span>{" "}
              BJ8364850
            </p>
            <div className="flex items-center justify-end gap-4">
              <p className="text-base font-normal text-gray-900 dark:text-white">
                x1
              </p>
              <p className="text-xl font-bold leading-tight text-gray-900 dark:text-white">
                $1,499
              </p>
            </div>
          </div>
        </div>  )
}

export default CardTrack