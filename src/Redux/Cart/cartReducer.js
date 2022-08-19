import { ADD_TO_CART, DECREMENT, INCREMENT, TOTAL_PRICE } from "./actionType";

const initialCart = {
    cart : {
        cartItem: [],
    },
    totalPrice: 0
}

export const cartReducer = (state = initialCart, action)=>{
    switch(action.type){
        case ADD_TO_CART :
            const newItem = action.payload.product
            const existing = state.cart.cartItem.find((item)=>item._id === newItem._id)
            const cartItem = existing ? state.cart.cartItem.map((item)=> item._id === newItem._id ? {...newItem, quantity: item.quantity + 1}: item)  : [...state.cart.cartItem, {...newItem, quantity: 1}]

            return {
                ...state,
                cart: {...state.cart, cartItem}
            }
        
        case INCREMENT:
            const incrementQuantity =  state.cart.cartItem.forEach((item) => {
                if (item.id === action.payload.quantity._id) {
                    item.quantity++
                };
            });
            return {
                ...state,
                incrementQuantity
            }
        
        case DECREMENT:
            const decrementQuantity =  state.cart.cartItem.forEach((item) => {
                if (item.id === action.payload.quantity._id) {
                    item.quantity--
                };
            });
            return {
                ...state,
                decrementQuantity
            }
        default:
            return state
    }
}
