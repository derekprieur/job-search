import { Provider, useSelector } from 'react-redux'

import { MobileMenu, Navbar } from 'components'
import { store } from '../store'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )
}
