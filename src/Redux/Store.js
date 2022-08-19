import { createStore } from "redux";
import { cartReducer } from "./Cart/cartReducer";
import { composeWithDevTools } from '@redux-devtools/extension';

const Store = createStore(cartReducer, composeWithDevTools())

export default Store