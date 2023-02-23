import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'

import { Navbar } from 'components'
import { store } from '../store'
import '../styles/globals.css'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  )
}
