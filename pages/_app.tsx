import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from "@/store";
import ToastContext from "@/contexts/ToastContext";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <ToastContext>
        <Component {...pageProps} />
      </ToastContext>
    </Provider>
  )
}

export default MyApp
