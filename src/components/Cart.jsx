import React from 'react'
import CartInitialProduct from './CartInitialProduct'
import CartSidebar from './CartSidebar'

const Cart = () => {
  return (
    <>
        <div className="grid place-items-center">
            <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
                Shopping Cart
            </h1>
        </div>
        <div className="grid grid-col-4 grid-flow-col gap-2">
            <div className='col-span-3'>
               <CartInitialProduct/>
            </div>
            <div>
               <CartSidebar/>
            </div>
        </div>
    </>
  )
}

export default Cart