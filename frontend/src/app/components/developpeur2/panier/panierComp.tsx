import React from 'react'
import CardPanier from './cardPanier'

const PanierComponent = () => {
  return (
<div className="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">
  <h1 className="text-2xl font-extrabold text-gray-800">Your Cart</h1>
  <div className="grid md:grid-cols-3 gap-4 mt-8">

    <div className="md:col-span-2 space-y-4">
     


      <CardPanier/>
      <CardPanier/>

      <CardPanier/>



     
    </div>
    <div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
      <ul className="text-gray-800 space-y-4">
   
        <li className="flex flex-wrap gap-4 text-sm font-bold">
          Total <span className="ml-auto">$206.00</span>
        </li>
      </ul>
      <div className="mt-8 space-y-2">
        <button
          type="button"
          className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
        >
          Buy Now
        </button>
        <button
          type="button"
          className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md"
        >
          Continue Shopping
        </button>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <img
          src="https://readymadeui.com/images/master.webp"
          alt="card1"
          className="w-10 object-contain"
        />
        <img
          src="https://readymadeui.com/images/visa.webp"
          alt="card2"
          className="w-10 object-contain"
        />
        <img
          src="https://readymadeui.com/images/american-express.webp"
          alt="card3"
          className="w-10 object-contain"
        />
      </div>
    </div>
  </div>
</div>
  )
}

export default PanierComponent