import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Store from "./Redux/Store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
    return (
        <Provider store={Store}>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            newestOnTop={false}
            closeOnClick
          />
          <Cart/>
        </Provider>
    );
}
