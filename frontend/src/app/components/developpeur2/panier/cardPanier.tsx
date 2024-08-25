import React from 'react'

const CardPanier = () => {
  return (
    <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
        <div className="flex gap-4">
          <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
            <img
              src="https://readymadeui.com/images/watch5.webp"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-base font-bold text-gray-800">
                Stylish Smart Watch
              </h3>
              <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">
                Color:{" "}
                <span className="inline-block w-5 h-5 rounded-md bg-[#e8dcdc]" />
              </p>
            </div>
            <div className="mt-auto flex items-center gap-3">
              <button
                type="button"
                className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2 fill-white"
                  viewBox="0 0 124 124"
                >
                  <path
                    d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                    data-original="#000000"
                  />
                </svg>
              </button>
              <span className="font-bold text-sm leading-[18px]">1</span>
              <button
                type="button"
                className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2 fill-white"
                  viewBox="0 0 42 42"
                >
                  <path
                    d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                    data-original="#000000"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="ml-auto flex flex-col">
          <div className="flex items-start gap-4 justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 cursor-pointer fill-gray-400 inline-block"
              viewBox="0 0 64 64"
            >
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 cursor-pointer fill-gray-400 inline-block"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                data-original="#000000"
              />
              <path
                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                data-original="#000000"
              />
            </svg>
          </div>
          <h3 className="text-base font-bold text-gray-800 mt-auto">$70.00</h3>
        </div>
      </div>
  )
}

export default CardPanier