import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Store from "./Redux/Store";

export default function App() {
    return (
        <Provider store={Store}>
          <Cart/>
        </Provider>
    );
}
