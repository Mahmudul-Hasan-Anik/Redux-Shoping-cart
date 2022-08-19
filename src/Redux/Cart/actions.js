import { ADD_TO_CART, DECREMENT, INCREMENT, REMOVE_CART } from "./actionType"

export const addCart = (value)=>{
    return {
        type: ADD_TO_CART,
        payload: {
            product: value,
        }
    }
}

export const removeCart = (value)=>{
    return {
        type: REMOVE_CART,
        payload: {
            product: value,
        }
    }
}

export const increment = (value, id)=>{
    return {
        type: INCREMENT,
        payload: {
            quantity: value,
        }
    }
}

export const decrement = (value)=>{
    return {
        type: DECREMENT,
        payload: {
            quantity: value,
        }
    }
}

