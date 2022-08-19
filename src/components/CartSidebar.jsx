import React from 'react'
import CartProduct from './CartProduct'
import { useSelector } from 'react-redux'

const CartSidebar = () => {
    const product = useSelector((state)=> state.cart.cart.cartItem)
    const productValue = useSelector((state)=> state)
  return (
    <>
        <div className="col-span-8 sm:col-span-8 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            {!product.length == 0 ?<CartProduct product={product}/> : ''}

            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4" >
                    

                        <div
                            className="flex justify-center items-center text-center"
                        >
                            <div className="text-xl font-semibold">
                                <p>Total Item</p>
                                <p className="text-5xl">{product.reduce((prev,curr) => prev + curr.quantity , 0)}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                    >
                        <div
                            className="flex justify-center items-center text-center"
                        >
                            <div className="text-xl font-semibold">
                                <p>Total Price</p>
                                <p className="text-5xl">
                                  {product.reduce((prev, curr)=> prev + curr.price * curr.quantity, 0)}
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
    </>
  )
}

export default CartSidebar