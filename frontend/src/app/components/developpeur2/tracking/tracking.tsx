import React from 'react'
import CardTrack from './cardTrack'

const Tracking = () => {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <h2 className="text-xl font-semibold text-gray-900  sm:text-2xl">
      Track the delivery of order #957684673
    </h2>
    <div className="mt-6 sm:mt-8 lg:flex lg:gap-8">

      <div className="w-full divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700 lg:max-w-xl xl:max-w-2xl h-fit">
<CardTrack/>
        <div className="space-y-4 bg-gray-50 p-6 dark:bg-gray-800">
    
          <dl className="flex items-center justify-between gap-4 ">
            <dt className="text-lg font-bold text-gray-900 dark:text-white">
              Total
            </dt>
            <dd className="text-lg font-bold text-yellow-400 ">
              $7,191.00
            </dd>
          </dl>
        </div>
      </div>


      <div className="mt-6 grow sm:mt-8 lg:mt-0">
        <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="text-xl font-semibold text-gray-900 ">
            Order history
          </h3>
          <ol className="relative ms-3 border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-6">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                  />
                </svg>
              </span>
              <h4 className="mb-0.5 text-base font-semibold text-gray-900">
              Place the order
              </h4>
              <p className="text-sm font-normal text-gray-500 ">
                Status: <span className='text-green-500 font-medium'>Active</span> 
              </p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  />
                </svg>
              </span>
              <h4 className="mb-0.5 text-base font-semibold text-gray-900">
                Order approved
              </h4>
              <p className="text-sm font-normal text-gray-500 ">
                Status: <span className='text-orange-500 font-medium'>Pending</span> 
              </p>
            </li>
          </ol>
          <div className="gap-4 sm:flex sm:items-center">
            <button
              type="button"
              className="w-full rounded-lg  border  px-5  py-2.5 text-sm font-medium text-white  hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4  border-gray-600 bg-gray-800 :text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-gray-700"
            >
              Back to home
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Tracking