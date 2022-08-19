import React from 'react'
import { Product } from '../Data/ProductData'
import { addCart } from '../Redux/Cart/actions'
import { useDispatch } from 'react-redux'

const CartItem = () => {
    const dispatch = useDispatch()

    const handleCart = (item)=>{
        dispatch(addCart(item))
    }
  return (
    <>
        <div className=" h-full ">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xxl:col-span-8">

                    {Product.map((item)=>(

                    <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4" key={item._id}>
                        <div className="flex justify-between px-4 items-center">
                            <div className="text-lg font-semibold">
                                <p>{item.name} ({item.stock})</p>
                                <p className="text-gray-400 text-base">Tk {item.price}</p>
                            </div>
                            <div className="text-lg font-semibold">
                                <button
                                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                                    onClick={()=>handleCart(item)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div> 
    </>
  )
}

export default CartItem



       