import '../styles/global.sass'
import { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import bottleNekoApp from '../reducers'
import https from 'https'

let store = createStore(bottleNekoApp, applyMiddleware(thunkMiddleware))

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </Provider>
  )
}
export default MyApp
